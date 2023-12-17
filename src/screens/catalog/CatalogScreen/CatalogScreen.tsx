/* eslint-disable react/no-unstable-nested-components */
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {Text} from '@react-native-material/core';
import {useActions} from './useActions';
import {colorsLight} from '@/theme/colorsLight';
import {DataCatalogEntity} from '@/api/catalogApi/entities/catalogEntity';
import RenderItem from './RenderItem';
import {View} from 'react-native-ui-lib';
import {SearchBar} from '@/components';

export const CatalogScreen = () => {
  const {fetchingDataCatalog, dataCatalog} = useActions();

  const RenderItems = ({item}: {item: DataCatalogEntity}) => (
    <RenderItem item={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      {!fetchingDataCatalog && (
        <View flex-1 padding-16>
          <Text style={styles.title}>List of Artworks</Text>
          <SearchBar style={styles.search} placeholder={'Search'} />
          <FlatList
            data={dataCatalog?.data}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={RenderItems}
            ListFooterComponent={<View height={80} />}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  titleItem: {
    textAlign: 'center',
  },
  content: {
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colorsLight.GRAY_03,
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    marginVertical: 12,
  },
  search: {
    marginVertical: 20,
  },
  // Puedes añadir más estilos según tus necesidades
});

export default CatalogScreen;
