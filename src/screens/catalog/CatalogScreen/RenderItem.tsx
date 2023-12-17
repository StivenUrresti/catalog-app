import {View, Text} from 'react-native';
import React from 'react';
import {DataCatalogEntity} from '@/api/catalogApi/entities/catalogEntity';

interface Props {
  item: DataCatalogEntity;
}

const RenderItem = ({}: Props) => {
  return (
    <View>
      <Text>RenderItem</Text>
    </View>
  );
};

export default RenderItem;
