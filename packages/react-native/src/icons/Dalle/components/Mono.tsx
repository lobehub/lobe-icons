import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, color = '#000000', ...rest }) => {
  return (
    <Svg
      color={color}
      fillRule="evenodd"
      height={size}
      style={style}
      viewBox="0 0 24 24"
      width={size}
      {...rest}
    >
      <Path d="M0 10h4.8v5H0z" fill={color} opacity=".08" />
      <Path d="M4.8 10h4.8v5H4.8z" fill={color} opacity=".2" />
      <Path d="M9.6 10h4.8v5H9.6z" fill={color} opacity=".3" />
      <Path d="M14.4 10h4.8v5h-4.8z" fill={color} opacity=".5" />
      <Path d="M19.2 10H24v5h-4.8z" fill={color} opacity=".6" />
    </Svg>
  );
});

Icon.displayName = 'DalleMono';

export default Icon;
