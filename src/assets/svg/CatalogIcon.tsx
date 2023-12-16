import {colorsLight} from '@/theme/colorsLight';
import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const CatalogIcon = ({
  width = 24,
  height = 24,
  color = colorsLight.BLACK,
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <G
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2">
        <Path d="M15 8h.01M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6z" />
        <Path d="m3 16l5-5c.928-.893 2.072-.893 3 0l5 5" />
        <Path d="m14 14l1-1c.928-.893 2.072-.893 3 0l3 3" />
      </G>
    </Svg>
  );
};
