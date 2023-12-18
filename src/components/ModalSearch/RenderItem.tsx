import {DataCatalogEntity} from '@/api/catalogApi/entities/catalogEntity';
import {colorsLight} from '@/theme/colorsLight';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {RootStackRoutes} from '@/types/stackRoutes';
import {useAppDispatch} from '@/hooks/useRedux';
import {setShow} from '@/slices/searchSlice';

interface Props {
  item: DataCatalogEntity;
}

const RenderItem = ({item}: Props) => {
  const {navigate} = useNavigation();
  const dispatch = useAppDispatch();
  return (
    <TouchableOpacity
      key={`${item.id + item.title}`}
      style={styles.container}
      onPress={() => {
        navigate(RootStackRoutes.DETAIL_CATALOG_SCREEN, {idArt: item.id});
        dispatch(setShow(false));
      }}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.indicatorText}>{'Artist: '}</Text>
        <Text style={styles.author}>{item.artist_display}</Text>
        <Text style={styles.indicatorText}>{'Place Origin: '}</Text>
        <Text style={styles.author}>{item.place_of_origin || 'No Place'}</Text>
      </View>
      <View style={styles.imageContainer}>
        {item.image_id ? (
          <FastImage
            source={{
              uri: `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`,
              priority: FastImage.priority.normal,
            }}
            style={styles.image}
            resizeMode={FastImage.resizeMode.stretch}
          />
        ) : (
          <FastImage
            source={require('@/assets/img/empty_img_four.png')}
            style={styles.image}
            resizeMode={FastImage.resizeMode.stretch}
          />
        )}
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
    marginVertical: 8,
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
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    color: colorsLight.PRIMARY_COLOR,
    fontStyle: 'normal',
  },
  indicatorText: {
    fontSize: 14,
    color: colorsLight.GRAY_03,
    fontStyle: 'normal',
  },
  author: {
    fontSize: 14,
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
