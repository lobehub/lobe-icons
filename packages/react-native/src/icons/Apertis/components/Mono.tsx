import React, { memo } from 'react';
import { G, Path, Svg } from 'react-native-svg';

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
      <G opacity=".45">
        <Path d="M3.474 24l3.943-8.21H9.34L3.474 24z" fill={color} />
        <Path d="M24 24h-4.895l-3.882-8.362 1.356-3.164H9.01L15 0l9 24z" fill={color} />
      </G>
      <Path d="M15.743 12.474H7.737l-1.263 3.315L0 24 10.737 0l5.006 12.474z" fill={color} />
      <Path d="M16.146 13.48L20.369 24h-5.21l-3.473-8.21h3.473l.989-2.31z" fill={color} />
    </Svg>
  );
});

Icon.displayName = 'ApertisMono';

export default Icon;
