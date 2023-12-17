import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {Text} from '@react-native-material/core';
import {useActions} from './useActions';
import {TouchableOpacity, View} from 'react-native-ui-lib';
import FastImage from 'react-native-fast-image';
import {colorsLight} from '@/theme/colorsLight';

export const CatalogScreen = () => {
  const {fetchingDataCatalog, dataCatalog} = useActions();

  return (
    <SafeAreaView style={styles.container}>
      {!fetchingDataCatalog && (
        <View padding-16>
          <Text style={styles.title}>list of artworks</Text>
          <FlatList
            data={dataCatalog?.data}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity marginV-10 row gap style={styles.content}>
                <FastImage
                  source={{
                    uri: `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`,
                  }}
                  style={styles.img}
                />
                <View>
                  <Text>{item.title}</Text>
                  <Text>{item.artist_title}</Text>
                </View>
              </TouchableOpacity>
            )}
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
  },
});
