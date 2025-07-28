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
        d="M0 20.683L12.01 2.5 24 20.683h-2.233L12.009 5.878 3.471 18.806h12.122l1.239 1.877H0z"
        fill={color}
      />
      <Path
        d="M8.069 16.724l2.073-3.115 2.074 3.115H8.069zM18.24 20.683l-5.668-8.707h2.177l5.686 8.707h-2.196zM19.74 11.676l2.13-3.19 2.13 3.19h-4.26z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'FluxMono';

export default Icon;
