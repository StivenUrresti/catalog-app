/* eslint-disable react-hooks/exhaustive-deps */
import {useLazyGetAllArtWorksToSearchQuery} from '@/api/catalogApi/catalogApi';
import {DataCatalogEntity} from '@/api/catalogApi/entities/catalogEntity';
import {useAppDispatch, useAppSelector} from '@/hooks/useRedux';
import {selectSearch, setShow} from '@/slices/searchSlice';
import {RootStackRoutes} from '@/types/stackRoutes';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';

export const useActionsModalSearch = () => {
  const {navigate} = useNavigation();
  const {show} = useAppSelector(selectSearch);
  const dispatch = useAppDispatch();
  const [triggersArtWork] = useLazyGetAllArtWorksToSearchQuery();

  const [searchText, setSearchText] = useState('');
  const [items, setItems] = useState<DataCatalogEntity[]>([]);

  useEffect(() => {
    async function getData() {
      if (searchText.length > 0) {
        const {data: dataArt} = await triggersArtWork(searchText);
        if (dataArt?.data) {
          setItems(dataArt.data);
        } else {
          setItems([]);
        }
      } else {
        setItems([]);
      }
    }

    getData();
  }, [searchText]);

  const handleOnchangeText = (text: string) => setSearchText(text);
  const handleGoBack = () => {
    dispatch(setShow(false));
    setSearchText('');
  };

  const navigateToDetail = (id: number) => {
    navigate(RootStackRoutes.DETAIL_CATALOG_SCREEN, {idArt: id});
    dispatch(setShow(false));
    setSearchText('');
  };

  return {
    show,
    searchText,
    items,
    handleOnchangeText,
    navigateToDetail,
    handleGoBack,
  };
};
