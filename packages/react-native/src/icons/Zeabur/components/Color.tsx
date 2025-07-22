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
      <Path d="M9.325 15.022h14.672V22H0v-6.978h6.746l9.29-5.044H0V3h23.997v6.978z" fill={color} />
      <Path d="M.001 3h15.954v6.978H.001z" fill="#6300FF" />
      <Path d="M9.4 15.022H24V22H9.4z" fill="#F40" />
    </Svg>
  );
});

Icon.displayName = 'ZeaburColor';

export default Icon;
