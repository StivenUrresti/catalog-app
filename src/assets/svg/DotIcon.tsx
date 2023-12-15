import {colorsLight} from '@/theme/colorsLight';
import React from 'react';
import Svg, {Circle} from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const DotIcon = ({
  width = 6,
  height = 6,
  color = colorsLight.PRIMARY_COLOR,
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 6 6" fill="none">
      <Circle cx="3" cy="3" r="3" fill={color} />
    </Svg>
  );
};
