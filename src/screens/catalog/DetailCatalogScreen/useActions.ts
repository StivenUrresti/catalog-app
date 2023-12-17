import {useGetArtWorksByCategoryQuery} from '@/api/catalogApi/catalogApi';
import {useState} from 'react';

interface IUseActions {
  idArt: number;
}

export const useActions = ({idArt}: IUseActions) => {
  const {data: artWorkData, isFetching} = useGetArtWorksByCategoryQuery(idArt);
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };
  console.log('artWorkData', JSON.stringify(artWorkData));

  return {artWorkData, isFetching, like, handleLike};
};
