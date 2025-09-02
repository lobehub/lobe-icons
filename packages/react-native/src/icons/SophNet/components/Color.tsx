import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path
        d="M2 3.124A3.125 3.125 0 015.126 0h15.101a3.125 3.125 0 010 6.249H5.125A3.125 3.125 0 012 3.124z"
        fill="#6200EE"
      />
      <Path
        d="M3.293 1.035a3.125 3.125 0 014.411.257l8.51 9.562a3.125 3.125 0 01-4.669 4.155L3.036 5.447a3.125 3.125 0 01.257-4.412z"
        fill="#6200EE"
      />
      <Path
        d="M2 13.018a3.125 3.125 0 013.125-3.124h8.853a3.124 3.124 0 110 6.248H5.125A3.125 3.125 0 012 13.018z"
        fill="#6200EE"
      />
      <Path d="M8.249 20.829A3.125 3.125 0 112 20.922a3.125 3.125 0 016.249-.093z" fill="#BF7AFF" />
    </Svg>
  );
});

Icon.displayName = 'SophNetColor';

export default Icon;
