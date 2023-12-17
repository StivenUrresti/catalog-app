import {selectFavorites} from '@/slices/favoritesSlice';
import {colorsLight} from '@/theme/colorsLight';
import {Text} from '@react-native-material/core';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';

export const FavoritesScreen = () => {
  const {favoritesData} = useSelector(selectFavorites);
  console.log('favoritesData', JSON.stringify(favoritesData));
  return (
    <SafeAreaView>
      <Text color={colorsLight.BLACK}>FavoritesScreen</Text>
      {favoritesData.map(e => (
        <Text key={e.id} color={colorsLight.BLACK}>
          {e.name}
        </Text>
      ))}
    </SafeAreaView>
  );
};
