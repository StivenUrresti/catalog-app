import {colorsLight} from '@/theme/colorsLight';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const SearchIcon = ({
  width = 24,
  height = 24,
  color = colorsLight.BLACK,
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z"
      />
    </Svg>
  );
};
