import {useGetAllArtworksQuery} from '@/api/catalogApi/catalogApi';
import {useAppDispatch} from '@/hooks/useRedux';
import {addFavorite} from '@/slices/favoritesSlice';
import {setShowLoading} from '@/slices/loadingSlice';
import {useEffect} from 'react';

export const useActions = () => {
  const {data: dataCatalog, isFetching: fetchingDataCatalog} =
    useGetAllArtworksQuery();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (fetchingDataCatalog) {
      dispatch(setShowLoading(true));
    } else {
      dispatch(setShowLoading(false));
    }
  }, [fetchingDataCatalog, dispatch]);
  console.log('dataCatalog', JSON.stringify(dataCatalog?.data));

  const addToFavorites = (item: any) => {
    dispatch(addFavorite(item));
  };

  return {dataCatalog, fetchingDataCatalog, addToFavorites};
};
