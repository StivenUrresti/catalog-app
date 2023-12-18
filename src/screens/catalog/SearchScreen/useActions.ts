import {useState} from 'react';

export const useActions = () => {
  const [searchText, setSearchText] = useState('');

  const onChangeText = (text: string) => setSearchText(text);
  return {searchText, onChangeText};
};
