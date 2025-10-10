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
      <Path d="M22 6h-5.278l3.166-6h-8.443L3 16h6.333v8L22 6z" fill={color} />
    </Svg>
  );
});

Icon.displayName = 'StraicoMono';

export default Icon;
