import {colorsLight} from '@/theme/colorsLight';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const HeartIcon = ({
  width = 24,
  height = 24,
  color = colorsLight.ERROR,
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 256 256">
      <Path
        fill={color}
        d="M240 94c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 220.66 16 164 16 94a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 40.88 157.35 32 178 32a62.07 62.07 0 0 1 62 62Z"
      />
    </Svg>
  );
};
