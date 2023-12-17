import {useGetAllArtworksQuery} from '@/api/catalogApi/catalogApi';
import {useAppDispatch} from '@/hooks/useRedux';
import {addFavorite} from '@/slices/favoritesSlice';
import {setShowLoading} from '@/slices/loadingSlice';
import {RootStackRoutes} from '@/types/stackRoutes';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';

export const useActions = () => {
  const {data: dataCatalog, isFetching: fetchingDataCatalog} =
    useGetAllArtworksQuery();
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation();

  useEffect(() => {
    if (fetchingDataCatalog) {
      dispatch(setShowLoading(true));
    } else {
      dispatch(setShowLoading(false));
    }
  }, [fetchingDataCatalog, dispatch]);

  const addToFavorites = (item: any) => {
    dispatch(addFavorite(item));
  };

  const goToDetail = (idArt: number) => {
    navigate(RootStackRoutes.DETAIL_CATALOG_SCREEN, {
      idArt,
    });
  };

  return {dataCatalog, fetchingDataCatalog, addToFavorites, goToDetail};
};
