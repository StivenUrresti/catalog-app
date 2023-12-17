import {DataCatalogEntity} from '@/api/catalogApi/entities/catalogEntity';
import {colorsLight} from '@/theme/colorsLight';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useActions} from './useActions';

interface Props {
  item: DataCatalogEntity;
}

const RenderItem = ({item}: Props) => {
  const {goToDetail} = useActions();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => goToDetail(item.id)}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.indicatorText}>{'Artist: '}</Text>
        <Text style={styles.author}>{item.artist_display}</Text>
      </View>
      <View style={styles.imageContainer}>
        <FastImage
          source={{
            uri: `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`,
          }}
          style={styles.image}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  textContainer: {
    flex: 1,
    marginRight: 16,
    fontStyle: 'normal',
  },
  imageContainer: {
    width: 90,
    height: 90,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: colorsLight.BLACK,
    fontStyle: 'normal',
  },
  indicatorText: {
    fontSize: 14,
    color: colorsLight.GRAY_03,
    fontStyle: 'normal',
  },
  author: {
    fontSize: 16,
    color: colorsLight.BLACK,
    fontStyle: 'normal',
  },
  reference: {
    fontSize: 15,
    color: '#555',
    fontStyle: 'normal',
  },
});

export default RenderItem;
