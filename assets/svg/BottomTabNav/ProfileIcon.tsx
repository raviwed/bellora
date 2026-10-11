import React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { IconProps } from './IconProps';

const ProfileIcon = ({ color = '#A8958A', width = 22, height = 22, ...props }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 22 22" fill="none" {...props}>
    <Path d="M10.9999 11C13.025 11 14.6666 9.3584 14.6666 7.33335C14.6666 5.30831 13.025 3.66669 10.9999 3.66669C8.97487 3.66669 7.33325 5.30831 7.33325 7.33335C7.33325 9.3584 8.97487 11 10.9999 11Z" stroke={color} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M3.66675 19.25C3.66675 15.2166 6.96675 12.8333 11.0001 12.8333C15.0334 12.8333 18.3334 15.2166 18.3334 19.25" stroke={color} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default ProfileIcon;
