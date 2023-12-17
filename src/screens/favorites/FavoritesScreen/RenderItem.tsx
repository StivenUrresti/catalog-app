import {DataCatalogEntity} from '@/api/catalogApi/entities/catalogEntity';
import {HeartIcon} from '@/assets/svg';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image'; // Asegúrate de tener instalada la biblioteca correspondiente
import {useActions} from './useActions';

interface Props {
  item: DataCatalogEntity;
}

const RenderItem = ({item}: Props) => {
  const {handleDislike, goToDetailScreen} = useActions();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => goToDetailScreen(item.id)}>
      <View style={styles.imageContainer}>
        <FastImage
          source={{
            uri: `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`,
          }}
          style={styles.image}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.indicatorText}>{'Artist: '}</Text>
        <Text style={styles.author}>{item.artist_display}</Text>
      </View>
      <View style={styles.likeIconContainer}>
        <TouchableOpacity
          style={styles.likeIcon}
          onPress={() => handleDislike(item.id)}>
          <HeartIcon />
        </TouchableOpacity>
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
    marginLeft: 16,
    paddingRight: 24, // Añadido espacio a la derecha del texto
    fontStyle: 'normal',
  },
  imageContainer: {
    position: 'relative',
    width: 120,
    height: 90,
    borderRadius: 12,
    overflow: 'hidden',
  },
  likeIconContainer: {
    position: 'absolute',
    top: 18,
    right: 8,
  },
  likeIcon: {},
  image: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
    fontStyle: 'normal',
  },
  indicatorText: {
    fontSize: 14,
    color: '#555',
    fontStyle: 'normal',
  },
  author: {
    fontSize: 16,
    color: '#555',
    fontStyle: 'normal',
  },
  reference: {
    fontSize: 15,
    color: '#777',
    fontStyle: 'normal',
  },
});

export default RenderItem;
