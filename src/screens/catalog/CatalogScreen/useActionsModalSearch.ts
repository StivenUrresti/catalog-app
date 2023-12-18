/* eslint-disable react-hooks/exhaustive-deps */
import {useLazyGetAllArtWorksToSearchQuery} from '@/api/catalogApi/catalogApi';
import {DataCatalogEntity} from '@/api/catalogApi/entities/catalogEntity';
import {useEffect, useState} from 'react';

export const useActionsModalSearch = () => {
  const handleOnchangeText = (text: string) => setSearchText(text);
  const [searchText, setSearchText] = useState('');
  const [triggersArtWork] = useLazyGetAllArtWorksToSearchQuery();
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

  return {handleOnchangeText, searchText, items};
};
