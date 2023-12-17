import {useGetArtWorksByCategoryQuery} from '@/api/catalogApi/catalogApi';

interface IUseActions {
  idArt: number;
}

export const useActions = ({idArt}: IUseActions) => {
  const {data: artWorkData, isFetching} = useGetArtWorksByCategoryQuery(idArt);

  return {artWorkData, isFetching};
};
