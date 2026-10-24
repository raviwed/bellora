import React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { IconProps } from './IconProps';
import { BelloraColors } from '../../constants/enums';

const OrdersIcon = ({ color = BelloraColors.tabIconInactive, width = 22, height = 22, ...props }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 22 22" fill="none" {...props}>
    <Path d="M15.5833 3.66669H6.41659C5.40406 3.66669 4.58325 4.4875 4.58325 5.50002V17.4167C4.58325 18.4292 5.40406 19.25 6.41659 19.25H15.5833C16.5958 19.25 17.4166 18.4292 17.4166 17.4167V5.50002C17.4166 4.4875 16.5958 3.66669 15.5833 3.66669Z" stroke={color} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M8.25 3.66667V2.75H13.75V3.66667M8.25 9.16667H13.75M8.25 12.8333H13.75M8.25 16.5H11" stroke={color} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default OrdersIcon;
