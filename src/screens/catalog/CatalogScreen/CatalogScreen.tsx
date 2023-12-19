/* eslint-disable react/no-unstable-nested-components */
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {ActivityIndicator, Text} from '@react-native-material/core';
import {useActions} from './useActions';
import {colorsLight} from '@/theme/colorsLight';
import {DataCatalogEntity} from '@/api/catalogApi/entities/catalogEntity';
import {View} from 'react-native-ui-lib';
import {SearchBar} from '@/components';
import {TabsHomeRoutes, TabsHomeScreenProps} from '@/types/tabRoutes';
import {setShow} from '@/slices/searchSlice';
import {useFocusEffect} from '@react-navigation/native';
import RenderItem from '@/screens/catalog/CatalogScreen/RenderItem';

export const CatalogScreen =
  ({}: TabsHomeScreenProps<TabsHomeRoutes.CATALOG>) => {
    const {
      isLoadingArtworkData,
      itemsArtWork,
      isChanging,
      flatListRef,
      handleNextArtWork,
      handleRefreshArtWorks,
      handleScroll,
      navigateToDetail,
      dispatch,
    } = useActions();

    const RenderItems = ({item}: {item: DataCatalogEntity}) => (
      <RenderItem item={item} navigateToDetail={navigateToDetail} />
    );

    useFocusEffect(
      React.useCallback(() => {
        flatListRef?.current?.scrollToOffset({animated: true, offset: 0});
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []),
    );

    return (
      <SafeAreaView style={styles.container}>
        <View centerH paddingH-16 marginV-14>
          <Text style={styles.title}>List of Artworks</Text>
          <SearchBar
            placeholder="Search"
            onPress={() => dispatch(setShow(true))}
          />
        </View>
        <View flex-1 paddingH-16>
          <FlatList
            ref={flatListRef}
            data={itemsArtWork}
            keyExtractor={(item: DataCatalogEntity, index: number) =>
              `${item.id}-${index}`
            }
            showsVerticalScrollIndicator={false}
            refreshing={isLoadingArtworkData}
            onRefresh={handleRefreshArtWorks}
            onEndReached={handleNextArtWork}
            onEndReachedThreshold={0.7}
            renderItem={RenderItems}
            onScroll={handleScroll}
            ListFooterComponent={
              <View marginV-6>
                {isChanging && (
                  <ActivityIndicator size={35} color={colorsLight.GRAY_03} />
                )}
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
    color: colorsLight.PRIMARY_COLOR,
  },
  search: {
    width: '90%',
  },
});

export default CatalogScreen;
