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
        clipRule="evenodd"
        d="M22.956 6.521H12.522c-.577 0-1.044.468-1.044 1.044v3.13c0 .577-.466 1.044-1.043 1.044H1.044c-.577 0-1.044.467-1.044 1.044v4.174C0 17.533.467 18 1.044 18h10.434c.577 0 1.044-.467 1.044-1.043v-3.13c0-.578.466-1.044 1.043-1.044h9.391c.577 0 1.044-.467 1.044-1.044V7.565c0-.576-.467-1.044-1.044-1.044z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'SiliconCloudMono';

export default Icon;
