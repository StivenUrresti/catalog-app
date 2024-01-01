import React, {useMemo} from 'react';
import {DataCatalogEntity} from '@/api/catalogApi/entities/catalogEntity';
import {HeartIcon} from '@/assets/svg';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

interface Props {
  item: DataCatalogEntity;
  handleDislike: (id: number) => void;
  goToDetailScreen: (id: number) => void;
}

const RenderItem = ({item, handleDislike, goToDetailScreen}: Props) => {
  const renderFastImage = (data: DataCatalogEntity | undefined) => {
    if (data?.image_id) {
      return (
        <FastImage
          source={{
            uri: `https://www.artic.edu/iiif/2/${data?.image_id}/full/843,/0/default.jpg`,
          }}
          style={styles.image}
          resizeMode={FastImage.resizeMode.stretch}
        />
      );
    } else {
      return (
        <FastImage
          source={require('@/assets/img/empty_img_four.png')}
          style={styles.image}
          resizeMode={FastImage.resizeMode.stretch}
        />
      );
    }
  };

  const fastImageComponent = useMemo(() => renderFastImage(item), [item]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => goToDetailScreen(item.id)}>
      <View style={styles.imageContainer}>{fastImageComponent}</View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.indicatorText}>{'Artist: '}</Text>
        <Text style={styles.author}>{item.artist_display}</Text>
      </View>
      <View style={styles.likeIconContainer}>
        <TouchableOpacity onPress={() => handleDislike(item.id)}>
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
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 16,
    marginVertical: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
    paddingRight: 24,
    fontStyle: 'normal',
  },
  imageContainer: {
    position: 'relative',
    width: 100,
    height: 90,
    borderRadius: 12,
    overflow: 'hidden',
  },
  likeIconContainer: {
    position: 'absolute',
    top: 18,
    right: 8,
  },
  image: {
    flex: 1,
  },
  title: {
    fontSize: 14,
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
    fontSize: 14,
    color: '#555',
    fontStyle: 'normal',
  },
  reference: {
    fontSize: 14,
    color: '#777',
    fontStyle: 'normal',
  },
});

export default RenderItem;
