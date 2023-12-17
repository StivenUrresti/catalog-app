/* eslint-disable react-hooks/exhaustive-deps */
import {useGetArtWorksByCategoryQuery} from '@/api/catalogApi/catalogApi';
import {IArtWorkEntity} from '@/api/catalogApi/entities/catalogEntity';
import {useAppDispatch, useAppSelector} from '@/hooks/useRedux';
import {
  addFavorite,
  checkIsInFavorites,
  removeFavorite,
  selectFavorites,
} from '@/slices/favoritesSlice';
import {useEffect, useState} from 'react';

interface IUseActions {
  idArt: number;
}

export const useActions = ({idArt}: IUseActions) => {
  const {data: artWorkData, isFetching} = useGetArtWorksByCategoryQuery(idArt);
  const {isInFavorites} = useAppSelector(selectFavorites);
  const [like, setLike] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkIsInFavorites(idArt));
  }, [artWorkData?.data]);

  useEffect(() => {
    setLike(isInFavorites);
  }, [isInFavorites]);

  const handleLike = (item: IArtWorkEntity | any) => {
    setLike(true);
    dispatch(addFavorite(item));
  };

  const handleDislike = () => {
    setLike(false);
    dispatch(removeFavorite({id: idArt}));
  };

  return {artWorkData, isFetching, like, handleLike, handleDislike};
};
