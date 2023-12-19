/* eslint-disable react/no-unstable-nested-components */
import {BackArrow} from '@/assets/svg';
import {colorsLight} from '@/theme/colorsLight';
import React from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {View} from 'react-native-ui-lib';
import {DataCatalogEntity} from '@/api/catalogApi/entities/catalogEntity';
import {useActionsModalSearch} from './useActionsModalSearch';
import RenderItem from '../../screens/catalog/CatalogScreen/RenderItem';
import {Text} from '@react-native-material/core';

export const ModalSearch = () => {
  const {
    show,
    searchText,
    items,
    handleOnchangeText,
    handleGoBack,
    navigateToDetail,
  } = useActionsModalSearch();

  const renderItems = ({item}: {item: DataCatalogEntity}) => (
    <RenderItem item={item} navigateToDetail={navigateToDetail} />
  );

  return (
    <Modal animationType="slide" transparent={false} visible={show}>
      <SafeAreaView style={styles.container}>
        <View flex>
          <View row centerV paddingH-16 marginT-20>
            <TouchableOpacity onPress={handleGoBack}>
              <BackArrow color={colorsLight.GRAY_03} />
            </TouchableOpacity>
            <TextInput
              value={searchText}
              onChangeText={handleOnchangeText}
              placeholderTextColor={colorsLight.GRAY_03}
              placeholder="Search.."
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>
          <View
            height={2}
            width={'100%'}
            backgroundColor={colorsLight.GRAY_02}
            marginT-8
          />
          <View flex-1 paddingH-16>
            <FlatList
              data={items}
              keyExtractor={(item: DataCatalogEntity, index: number) =>
                `${item.id}-${index}`
              }
              showsVerticalScrollIndicator={false}
              renderItem={renderItems}
              ListEmptyComponent={
                <View center>
                  {searchText.length > 0 ? (
                    <Text style={styles.titleStartSearching}>
                      {`No results for "${searchText}"`}
                    </Text>
                  ) : (
                    <Text style={styles.titleStartSearching}>
                      {'Start searching'}
                    </Text>
                  )}
                </View>
              }
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    fontSize: 14,
    padding: 10,
    flex: 1,
    color: colorsLight.BLACK,
    borderWidth: 0.4,
    borderColor: colorsLight.GRAY_03,
    borderRadius: 12,
    height: 40,
  },
  titleStartSearching: {
    marginBottom: 16,
    marginVertical: 16,
  },
});
