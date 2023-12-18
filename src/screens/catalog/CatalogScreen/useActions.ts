/* eslint-disable react-hooks/exhaustive-deps */
import {useLazyGetAllArtworksQuery} from '@/api/catalogApi/catalogApi';
import {useAppDispatch} from '@/hooks/useRedux';
import {addFavorite} from '@/slices/favoritesSlice';
import {RootStackRoutes} from '@/types/stackRoutes';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';

export const useActions = () => {
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation();
  const [pageArtWorks, setPageArtWorks] = useState(1);
  const [itemsArtWork, setItemsArtWork] = useState<any[]>([]);

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
    setPageArtWorks(pageArtWorks + 1);
  };

  const addToFavorites = (item: any) => {
    dispatch(addFavorite(item));
  };

  const goToDetail = (idArt: number) => {
    navigate(RootStackRoutes.DETAIL_CATALOG_SCREEN, {
      idArt,
    });
  };

  return {
    itemsArtWork,
    isLoadingArtworkData,
    addToFavorites,
    goToDetail,
    handleNextArtWork,
    handleRefreshArtWorks,
  };
};
