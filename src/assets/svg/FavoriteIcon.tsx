import {colorsLight} from '@/theme/colorsLight';
import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const FavoriteIcon = ({
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
        <Path d="M15 8h.01M11 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5.5" />
        <Path d="m3 16l5-5c.928-.893 2.072-.893 3 0l2 2m4.8 7.817l-2.172 1.138a.392.392 0 0 1-.568-.41l.415-2.411l-1.757-1.707a.389.389 0 0 1 .217-.665l2.428-.352l1.086-2.193a.392.392 0 0 1 .702 0l1.086 2.193l2.428.352a.39.39 0 0 1 .217.665l-1.757 1.707l.414 2.41a.39.39 0 0 1-.567.411L17.8 20.817z" />
      </G>
    </Svg>
  );
};
