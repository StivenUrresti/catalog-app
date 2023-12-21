/* eslint-disable react/no-unstable-nested-components */
import {IArtWorkEntity} from '@/api/catalogApi/entities/catalogEntity';
import {colorsLight} from '@/theme/colorsLight';
import {Text} from '@react-native-material/core';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {View} from 'react-native-ui-lib';
import RenderItem from './RenderItem';
import {useActions} from './useActions';

export const FavoritesScreen = () => {
  const {favoritesData, handleDislike, goToDetailScreen} = useActions();

  const RenderItems = ({item}: {item: IArtWorkEntity}) => (
    <RenderItem
      item={item}
      handleDislike={handleDislike}
      goToDetailScreen={goToDetailScreen}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <View flex-1 padding-16>
        <Text style={styles.title}>List of My favorites Artworks</Text>
        <FlatList
          data={favoritesData}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={RenderItems}
          ListFooterComponent={<View height={80} />}
          ListEmptyComponent={
            <View flex-1 center>
              <Text style={styles.emptyText}>No favorites yet</Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsLight.BACKGROUND_SCREEN_COLOR,
  },
  title: {
    color: colorsLight.PRIMARY_COLOR,
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'bold',
    marginVertical: 14,
    alignSelf: 'center',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: colorsLight.GRAY_03,
  },
});
