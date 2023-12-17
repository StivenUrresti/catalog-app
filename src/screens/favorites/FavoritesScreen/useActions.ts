import {useAppDispatch} from '@/hooks/useRedux';
import {removeFavorite, selectFavorites} from '@/slices/favoritesSlice';
import {RootStackRoutes} from '@/types/stackRoutes';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

export const useActions = () => {
  const {favoritesData} = useSelector(selectFavorites);
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation();

  const handleDislike = (id: number) => {
    dispatch(removeFavorite({id}));
  };

  const goToDetailScreen = (idArt: number) => {
    navigate(RootStackRoutes.DETAIL_CATALOG_SCREEN, {
      idArt,
    });
  };
  return {favoritesData, handleDislike, goToDetailScreen};
};
