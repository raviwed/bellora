import React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { IconProps } from './IconProps';

const WhishListIcon = ({ color = '#A8958A', width = 16, height = 15, ...props }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 16 15" fill="none" {...props}>
    <Path d="M7.67505 13.9371C7.67505 13.9371 0.800049 9.72044 0.800049 4.58711C0.830823 3.8028 1.09506 3.04554 1.55889 2.41235C2.02273 1.77915 2.66505 1.29885 3.40357 1.03299C4.14208 0.767126 4.94315 0.727802 5.70415 0.920056C6.46515 1.11231 7.15142 1.52739 7.67505 2.11211C8.19867 1.52739 8.88495 1.11231 9.64595 0.920056C10.4069 0.727802 11.208 0.767802 11.9465 1.03299C12.685 1.29885 13.3274 1.77915 13.7912 2.41235C14.255 3.04554 14.5193 3.8028 14.55 4.58711C14.55 9.72044 7.67505 13.9371 7.67505 13.9371Z" stroke={color} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default WhishListIcon;
