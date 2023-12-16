import {ActivityIndicator, StyleSheet, Text} from 'react-native';
import React from 'react';
import {colorsLight} from '@/theme/colorsLight';
import {Modal, View} from 'react-native-ui-lib';
import {useSelector} from 'react-redux';
import {selectLoading} from '@/slices/loadingSlice';

export const Loading = () => {
  const {showLoading} = useSelector(selectLoading);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showLoading}
      onRequestClose={() => null}>
      <View flex-1 center backgroundColor={colorsLight.BACKGROUND_SCREEN_COLOR}>
        <ActivityIndicator color={colorsLight.PRIMARY_COLOR} size={48} />
        <Text style={styles.text}>loading..</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colorsLight.BLACK,
  },
});
