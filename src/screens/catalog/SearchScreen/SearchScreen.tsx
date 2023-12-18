import React from 'react';
import {RootStackRoutes, RootStackScreenProps} from '@/types/stackRoutes';
import {View} from 'react-native-ui-lib';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {BackArrow} from '@/assets/svg';
import {colorsLight} from '@/theme/colorsLight';
import {useActions} from './useActions';

export const SearchScreen = ({
  navigation,
}: RootStackScreenProps<RootStackRoutes.SEARCH_SCREEN>) => {
  const {searchText, onChangeText} = useActions();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View paddingH-16 row centerV marginT-20 style={styles.containerInput}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <BackArrow />
          </TouchableOpacity>
          <TextInput
            placeholder="Search"
            style={styles.input}
            placeholderTextColor={colorsLight.GRAY_03}
            value={searchText}
            onChangeText={onChangeText}
            autoCapitalize="none"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerInput: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    color: colorsLight.BLACK,
    fontSize: 16,
    borderWidth: 0.4,
    borderColor: colorsLight.GRAY_03,
    borderRadius: 12,
    width: '90%',
    padding: 10,
  },
  textNoFound: {
    fontFamily: 'Satoshi-Regular',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colorsLight.BACKGROUND_SCREEN_COLOR,
  },
});
