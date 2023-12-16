import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Text} from '@react-native-material/core';
import {colorsLight} from '@/theme/colorsLight';
import {useActions} from './useActions';
import {View} from 'react-native-ui-lib';

export const CatalogScreen = () => {
  const {data, addToFavorites} = useActions();
  return (
    <SafeAreaView>
      <Text color={colorsLight.BLACK}>CatalogScreen</Text>
      <FlatList
        data={data}
        keyExtractor={({index}: any) => `${index + Math.random().toString()} `}
        renderItem={({item}: any) => (
          <View key={item.id} center>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => addToFavorites(item)}>
              <Text color={colorsLight.BLACK} key={item.id}>
                {item?.name}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  touchable: {
    marginVertical: 10,
  },
});
