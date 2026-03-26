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
        d="M11.4 4.5L17.2 19.5H14.1L12 14.5H8.9L5.1 19.5H2L11.4 4.5ZM9.5 12.5L10.2 10.8H14L13.2 12.5H9.5Z"
        fill={color}
      />
      <Path
        d="M13.8 5.5L14.8 4.5L22 19.5H19.5L13.8 5.5Z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'ApertisMono';

export default Icon;
