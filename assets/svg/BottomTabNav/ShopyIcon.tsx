import React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { IconProps } from './IconProps';
import { BelloraColors } from '../../constants/enums';

const ShopyIcon = ({ color = BelloraColors.tabIconInactive, width = 22, height = 22, ...props }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 22 22" fill="none" {...props}>
    <Path d="M4.58325 7.33331H17.4166L16.4999 18.3333C16.4999 18.5764 16.4033 18.8096 16.2314 18.9815C16.0595 19.1534 15.8264 19.25 15.5833 19.25H6.41659C6.17347 19.25 5.94031 19.1534 5.7684 18.9815C5.5965 18.8096 5.49992 18.5764 5.49992 18.3333L4.58325 7.33331Z" stroke={color} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M8.25 7.33335V6.41669C8.25 5.68734 8.53973 4.98787 9.05546 4.47214C9.57118 3.95642 10.2707 3.66669 11 3.66669C11.7293 3.66669 12.4288 3.95642 12.9445 4.47214C13.4603 4.98787 13.75 5.68734 13.75 6.41669V7.33335" stroke={color} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default ShopyIcon;
