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
      <Path
        d="M23.997 3v6.978L9.325 15.022H9.4V22l14.596-.001L0 22v-6.978h6.746l9.29-5.044h-.081V3h8.042z"
        fill={color}
      />
      <Path d="M.001 3h16.954v6.978H.001zM8.4 15.022H24V22H8.4z" fill={color} opacity=".5" />
    </Svg>
  );
});

Icon.displayName = 'ZeaburMono';

export default Icon;
