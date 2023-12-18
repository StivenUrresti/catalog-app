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
import RenderItem from './RenderItem';
import {DataCatalogEntity} from '@/api/catalogApi/entities/catalogEntity';
import {useActionsModalSearch} from './useActionsModalSearch';

interface Props {
  visible: boolean;
  onClose: () => void;
}

export const ModalSearch = ({visible, onClose}: Props) => {
  const {handleOnchangeText, searchText, items} = useActionsModalSearch();

  const RenderItems = ({item}: {item: DataCatalogEntity}) => (
    <RenderItem item={item} />
  );
  return (
    <Modal animationType="slide" transparent={false} visible={visible}>
      <SafeAreaView style={styles.container}>
        <View flex>
          <View row centerV paddingH-16 marginT-20>
            <TouchableOpacity onPress={onClose}>
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
              keyExtractor={(item: any, index: number) =>
                (index + item).toString()
              }
              showsVerticalScrollIndicator={false}
              renderItem={RenderItems}
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
});
