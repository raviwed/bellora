import React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { IconProps } from './IconProps';
import { BelloraColors } from '../../constants/enums';

const LeftarrowIcon = ({ color = BelloraColors.coffee, width = 22, height = 22, ...props }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 22 22" fill="none" {...props}>
    <Path d="M17.4167 11H4.58337M10.0834 16.5L4.58337 11L10.0834 5.5" stroke={color} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default LeftarrowIcon;
