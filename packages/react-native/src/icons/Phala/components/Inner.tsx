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
        d="M0 16.8h4.8V24H0zm19.2-12H24V12h-4.8zM4.8 12h14.4v4.8H4.8zM0 0h19.2v4.8H4.8V12L0 11.94z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'PhalaInner';

export default Icon;
