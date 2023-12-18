/* eslint-disable react/no-unstable-nested-components */
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {ActivityIndicator, Text} from '@react-native-material/core';
import {useActions} from './useActions';
import {colorsLight} from '@/theme/colorsLight';
import {DataCatalogEntity} from '@/api/catalogApi/entities/catalogEntity';
import RenderItem from './RenderItem';
import {View} from 'react-native-ui-lib';
import {SearchBar} from '@/components';
import {TabsHomeRoutes, TabsHomeScreenProps} from '@/types/tabRoutes';
import {ModalSearch} from './ModalSearch';

export const CatalogScreen =
  ({}: TabsHomeScreenProps<TabsHomeRoutes.CATALOG>) => {
    const {
      isLoadingArtworkData,
      itemsArtWork,
      isChanging,
      handleNextArtWork,
      handleRefreshArtWorks,
      handleScroll,
    } = useActions();

    const RenderItems = ({item}: {item: DataCatalogEntity}) => (
      <RenderItem item={item} />
    );

    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);

    return (
      <SafeAreaView style={styles.container}>
        <View centerH paddingH-16 marginV-14>
          <Text style={styles.title}>List of Artworks</Text>
          <SearchBar placeholder="buscar" onPress={() => toggleModal()} />
        </View>
        <View flex-1 paddingH-16>
          <FlatList
            data={itemsArtWork}
            keyExtractor={(item: any, index: number) =>
              (index + item).toString()
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
          <ModalSearch visible={modal} onClose={toggleModal} />
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
