/* eslint-disable react-hooks/exhaustive-deps */
import {useLazyGetAllArtworksQuery} from '@/api/catalogApi/catalogApi';
import {DataCatalogEntity} from '@/api/catalogApi/entities/catalogEntity';
import {useAppDispatch} from '@/hooks/useRedux';
import {addFavorite} from '@/slices/favoritesSlice';
import {setHiddenTabBar} from '@/slices/tabBarSlice';
import {RootStackRoutes} from '@/types/stackRoutes';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useRef, useState} from 'react';
import {FlatList, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';

export const useActions = () => {
  const flatListRef = useRef<FlatList>(null);
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation();
  const [pageArtWorks, setPageArtWorks] = useState(1);
  const [itemsArtWork, setItemsArtWork] = useState<DataCatalogEntity[]>([]);
  const [isChanging, setIsChanging] = useState(false);

  const [triggerArtWorks, {isLoading: isLoadingArtworkData}] =
    useLazyGetAllArtworksQuery();

  useEffect(() => {
    async function getData() {
      const {data: dataArt} = await triggerArtWorks({
        page: pageArtWorks,
      });

      if (dataArt && dataArt?.data) {
        if (pageArtWorks > 1) {
          setItemsArtWork([...itemsArtWork, ...dataArt.data]);
        } else {
          setItemsArtWork(dataArt.data);
        }
      }
    }
    getData();
  }, [pageArtWorks, isLoadingArtworkData]);

  const handleRefreshArtWorks = () => {
    setPageArtWorks(1);
  };

  const handleNextArtWork = () => {
    if (isLoadingArtworkData) {
      return;
    }
    setIsChanging(true);
    setPageArtWorks(pageArtWorks + 1);
  };

  const addToFavorites = (item: any) => {
    dispatch(addFavorite(item));
  };

  const navigateToDetail = (idArt: number) => {
    navigate(RootStackRoutes.DETAIL_CATALOG_SCREEN, {
      idArt,
    });
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    if (scrollY > 0) {
      dispatch(setHiddenTabBar(true));
    } else {
      dispatch(setHiddenTabBar(false));
    }
  };

  return {
    itemsArtWork,
    isLoadingArtworkData,
    isChanging,
    flatListRef,
    addToFavorites,
    navigateToDetail,
    handleNextArtWork,
    handleRefreshArtWorks,
    handleScroll,
    dispatch,
  };
};
