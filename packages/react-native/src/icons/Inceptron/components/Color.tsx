import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path d="m0 13.955 7.608-7.077H17.68l-7.607 7.077z" fill="#eb048e" />
      <Path d="M17.68 6.878v7.077h-7.607z" fill="#1d1d9e" />
      <Path d="M17.68 13.955v2.222l-7.685 7.148h-.042v-9.267l.119-.103z" fill="#eb048e" />
      <Path d="M10.073 13.955 0 23.325v-9.37zm7.607 2.221v7.116l-.043.04h-7.65z" fill="#1d1d9e" />
      <Path d="M0 6.879 6.311 1h7.608L7.608 6.879z" fill="#2cf0ff" />
      <Path d="M8.98 5.601 13.92 1H24l-4.947 4.601z" fill="#eb048e" />
      <Path d="M7.608 6.878 0 13.955V6.878z" fill="#1d1d9e" />
      <Path d="M9.953 14.059v9.266H0zm7.727-7.18 6.312-5.871v16.414l-6.312 5.871z" fill="#2cf0ff" />
    </Svg>
  );
});

Icon.displayName = 'InceptronColor';

export default Icon;
