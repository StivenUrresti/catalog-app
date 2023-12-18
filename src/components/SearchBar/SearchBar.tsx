import {StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import {View} from 'react-native-ui-lib';
import {colorsLight} from '@/theme/colorsLight';
import {Text} from '@react-native-material/core';
import {SearchIcon} from '@/assets/svg';

interface Props {
  placeholder: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const SearchBar = ({placeholder, style, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View
        row
        centerV
        paddingH-16
        height={42}
        style={[styles.containerInput, style]}>
        <SearchIcon color={colorsLight.GRAY_03} />
        <Text color={colorsLight.GRAY_03} variant="body1">
          {placeholder}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerInput: {
    borderColor: colorsLight.GRAY_03,
    borderWidth: 0.4,
    borderRadius: 12,
    gap: 8,
  },
  container: {
    width: '100%',
  },
});
