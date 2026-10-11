import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './IconProps';

const HomeIcon = ({ color = '#6B3A1E', width = 19, height = 19, ...props }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 19 19" fill="none" {...props}>
    <Path d="M0.800049 7.67499L9.05005 0.799988L17.3 7.67499V16.3833C17.3 16.6264 17.2035 16.8596 17.0316 17.0315C16.8597 17.2034 16.6265 17.3 16.3834 17.3H11.8V11.8H6.30005V17.3H1.71672C1.4736 17.3 1.24044 17.2034 1.06853 17.0315C0.896626 16.8596 0.800049 16.6264 0.800049 16.3833V7.67499Z" stroke={color} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default HomeIcon;
