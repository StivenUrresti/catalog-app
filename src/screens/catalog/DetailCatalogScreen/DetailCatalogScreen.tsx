import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {colorsLight} from '@/theme/colorsLight';
import {RootStackRoutes, RootStackScreenProps} from '@/types/stackRoutes';
import {useActions} from './useActions';
import FastImage from 'react-native-fast-image';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import HTML from 'react-native-render-html';
import {Text} from '@react-native-material/core';
import {HeartIcon, HeartOutlineIcon} from '@/assets/svg';
import {View} from 'react-native-ui-lib';

export const DetailCatalogScreen = ({
  route: {
    params: {idArt},
  },
}: RootStackScreenProps<RootStackRoutes.DETAIL_CATALOG_SCREEN>) => {
  const {artWorkData, isFetching, like, handleLike, handleDislike} = useActions(
    {idArt},
  );
  const [loadingSkeleton, setLoadingSkeleton] = useState(true);

  useEffect(() => {
    if (!isFetching) {
      setLoadingSkeleton(false);
    }
  }, [isFetching]);

  const htmlStyles = {
    p: {
      color: colorsLight.BLACK,
    },
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View>
        <SkeletonPlaceholder
          speed={900}
          enabled={loadingSkeleton}
          backgroundColor={colorsLight.WHITE}
          highlightColor={colorsLight.GRAY_02}>
          <FastImage
            source={{
              uri: `https://www.artic.edu/iiif/2/${artWorkData?.data.image_id}/full/843,/0/default.jpg`,
            }}
            style={styles.image}
            resizeMode={FastImage.resizeMode.cover}
          />
        </SkeletonPlaceholder>
      </View>
      <SkeletonPlaceholder
        speed={900}
        enabled={loadingSkeleton}
        backgroundColor={colorsLight.WHITE}
        highlightColor={colorsLight.GRAY_02}>
        <View
          row
          centerV
          marginV-16
          paddingH-16
          style={styles.containerFavorite}>
          <Text style={styles.textFavorite}>Add to Favorites</Text>
          {!like ? (
            <TouchableOpacity onPress={() => handleLike(artWorkData?.data)}>
              <HeartOutlineIcon />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => handleDislike()}>
              <HeartIcon />
            </TouchableOpacity>
          )}
        </View>
      </SkeletonPlaceholder>
      <View style={styles.detailsContainer}>
        <SkeletonPlaceholder
          speed={900}
          enabled={loadingSkeleton}
          backgroundColor={colorsLight.WHITE}
          highlightColor={colorsLight.GRAY_02}>
          <>
            <Text style={styles.title}>{artWorkData?.data.title}</Text>
            <Text style={styles.sectionTitle}>Description</Text>
            {artWorkData?.data?.description &&
            artWorkData?.data?.description?.length > 0 ? (
              <View marginB-18>
                <HTML
                  source={{html: artWorkData?.data.description || ''}}
                  tagsStyles={htmlStyles}
                />
              </View>
            ) : (
              <View marginB-18>
                <Text style={styles.sectionValue}>No description</Text>
              </View>
            )}
            {renderSection(
              'Artist',
              artWorkData?.data.artist_display || 'No artist',
              1,
            )}
            {renderSection(
              'Place of Origin',
              artWorkData?.data.place_of_origin || 'No origin',
              2,
            )}
            {renderSection(
              'Medium',
              artWorkData?.data.medium_display || 'No medium',
              3,
            )}
            {renderSection(
              'Artwork Type',
              artWorkData?.data?.artwork_type_title || 'No artwork type',
              4,
            )}
            {renderSection(
              'Copyright Notice',
              artWorkData?.data?.copyright_notice || 'No copyright notice',
              5,
            )}
            {renderSection(
              'Department',
              artWorkData?.data?.department_title || 'No department',
              6,
            )}
            {renderListSection(
              'Categories',
              artWorkData?.data.category_titles,
              'No Categories',
            )}
            {renderListSection(
              'Terms',
              artWorkData?.data.term_titles,
              'No Terms',
            )}
            {renderListSection(
              'Themes',
              artWorkData?.data.theme_titles,
              'No Themes',
            )}
          </>
        </SkeletonPlaceholder>
      </View>
    </ScrollView>
  );
};

const renderSection = (title: string, value: string, key: number) => (
  <View key={key} style={styles.sectionContainer}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <Text style={styles.sectionValue}>{value}</Text>
  </View>
);

const renderListSection = (
  title: string,
  list: string[] | undefined,
  emptyMessage: string,
) => (
  <View style={styles.sectionContainer}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {list && list.length > 0 ? (
      list.map((item: any, index: number) => (
        <Text key={index} style={styles.sectionValue}>{`* ${item}`}</Text>
      ))
    ) : (
      <Text style={styles.sectionValue}>{emptyMessage}</Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorsLight.WHITE,
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    backgroundColor: colorsLight.PRIMARY_COLOR,
  },
  detailsContainer: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colorsLight.BLACK,
    marginBottom: 8,
    fontStyle: 'normal',
  },
  sectionContainer: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    color: colorsLight.GRAY_03,
    fontWeight: 'bold',
    marginBottom: 4,
    fontStyle: 'normal',
  },
  sectionValue: {
    fontSize: 16,
    color: colorsLight.BLACK,
    fontStyle: 'normal',
  },
  description: {
    fontSize: 16,
    color: colorsLight.BLACK,
    lineHeight: 24,
    marginTop: 16,
    textAlign: 'justify',
    fontStyle: 'normal',
  },
  addButton: {
    backgroundColor: colorsLight.PRIMARY_COLOR,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 20,
  },
  addButtonText: {
    color: colorsLight.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  containerFavorite: {justifyContent: 'space-between'},
  textFavorite: {
    fontSize: 16,
    color: colorsLight.BLACK,
    fontStyle: 'normal',
    fontWeight: '500',
  },
});
