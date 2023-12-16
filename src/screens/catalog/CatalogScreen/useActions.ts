import {useGetAllArtworksQuery} from '@/api/catlogApi/catalogApi';
import {addFavorite} from '@/slices/favoritesSlice';
import {useDispatch} from 'react-redux';

export const useActions = () => {
  const {data: dataCatalog} = useGetAllArtworksQuery();
  console.log('dataCatalog', dataCatalog);
  const data = [
    {
      id: 1,
      name: 'test',
      description: 'test',
    },
    {
      id: 2,
      name: 'test2',
      description: 'test2',
    },
    {
      id: 3,
      name: 'test3',
      description: 'test3',
    },
    {
      id: 4,
      name: 'test4',
      description: 'test4',
    },
  ];

  const dispatch = useDispatch();

  const addToFavorites = (item: any) => {
    dispatch(addFavorite(item));
  };

  return {data, addToFavorites};
};
