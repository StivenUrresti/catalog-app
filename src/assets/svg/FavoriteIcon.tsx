import {colorsLight} from '@/theme/colorsLight';
import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const FavoriteIcon = ({
  width = 14,
  height = 14,
  color = colorsLight.BLACK,
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 14 14">
      <G
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M.576 6.733a6.538 6.538 0 0 1 1.164-.104c1.58 0 3.027.563 4.154 1.5" />
        <Path d="M5.076 10.629h-3.5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.5" />
        <Path d="M6.326 5.629a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5Zm1.014 4.934c-.351-.061-.351-.565 0-.626a3.176 3.176 0 0 0 2.558-2.45l.021-.097c.076-.347.57-.349.649-.003l.026.113a3.193 3.193 0 0 0 2.565 2.435c.353.062.353.568 0 .63A3.192 3.192 0 0 0 10.594 13l-.026.113c-.079.346-.573.344-.649-.003l-.021-.097a3.176 3.176 0 0 0-2.558-2.45Z" />
      </G>
    </Svg>
  );
};
