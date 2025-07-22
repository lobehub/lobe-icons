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
        d="M7.333 2h-3.2l-2 4.333V17.8L0 22h5.2l2.028-4.2L7.333 2zm7.334 0h-5.2v20h5.2V2zM16.8 7.733H22V22h-5.2V7.733zM22 2h-5.2v4.133H22V2z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'BaichuanMono';

export default Icon;
