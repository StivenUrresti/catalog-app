import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colorsLight} from '@/theme/colorsLight';
import {RootStackRoutes, RootStackScreenProps} from '@/types/stackRoutes';
import {useActions} from './useActions';
import FastImage from 'react-native-fast-image';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const DetailCatalogScreen = ({
  route: {
    params: {idArt},
  },
}: RootStackScreenProps<RootStackRoutes.DETAIL_CATALOG_SCREEN>) => {
  const {artWorkData, isFetching} = useActions({idArt});
  const [loadingSkeleton, setLoadingSkeleton] = useState(true);

  useEffect(() => {
    if (!isFetching) {
      setLoadingSkeleton(false);
    }
  }, [isFetching]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <SkeletonPlaceholder
            speed={900}
            enabled={loadingSkeleton}
            backgroundColor={colorsLight.GRAY_02}
            highlightColor={colorsLight.INFO_COLOR}>
            <FastImage
              source={{
                uri: `https://www.artic.edu/iiif/2/${artWorkData?.data.image_id}/full/843,/0/default.jpg`,
              }}
              style={styles.image}
              resizeMode={FastImage.resizeMode.cover}
            />
          </SkeletonPlaceholder>
        </View>
        <View style={styles.detailsContainer}>
          <SkeletonPlaceholder
            speed={900}
            enabled={loadingSkeleton}
            backgroundColor={colorsLight.GRAY_LIGHT}
            highlightColor={colorsLight.GRAY_03}>
            <>
              <Text style={styles.title}>{artWorkData?.data.title}</Text>
              <Text style={styles.subtitle}>
                {artWorkData?.data.artist_display || 'no artist'}
              </Text>
              <Text style={styles.description}>
                {artWorkData?.data.description || 'No description'}
              </Text>
            </>
          </SkeletonPlaceholder>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsLight.WHITE,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    backgroundColor: colorsLight.PRIMARY_COLOR,
  },
  detailsContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colorsLight.BLACK,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: colorsLight.GRAY_03,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: colorsLight.BLACK,
    lineHeight: 24,
  },
  // Añade más estilos según sea necesario
});
