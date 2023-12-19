/* eslint-disable react-hooks/exhaustive-deps */
import {useLazyGetAllArtWorksToSearchQuery} from '@/api/catalogApi/catalogApi';
import {DataCatalogEntity} from '@/api/catalogApi/entities/catalogEntity';
import {useAppDispatch} from '@/hooks/useRedux';
import {setShow} from '@/slices/searchSlice';
import {RootStackRoutes} from '@/types/stackRoutes';
import {useNavigation, useIsFocused} from '@react-navigation/native'; // Import useIsFocused
import {useEffect, useState} from 'react';

export const useActionsModalSearch = () => {
  const handleOnchangeText = (text: string) => setSearchText(text);
  const [searchText, setSearchText] = useState('');
  const [items, setItems] = useState<DataCatalogEntity[]>([]);
  const isFocused = useIsFocused();
  const [triggersArtWork] = useLazyGetAllArtWorksToSearchQuery();
  const {navigate} = useNavigation();
  const dispatch = useAppDispatch();
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
  }, [searchText, isFocused]);

  const navigateToDetail = (id: number) => {
    navigate(RootStackRoutes.DETAIL_CATALOG_SCREEN, {idArt: id});
    dispatch(setShow(false));
    setSearchText('');
  };

  return {searchText, items, handleOnchangeText, navigateToDetail};
};
