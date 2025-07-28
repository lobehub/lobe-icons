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
      <Path d="M5 0h5v24H5V0zM14 0h5v24h-5V0z" fill={color} />
    </Svg>
  );
});

Icon.displayName = 'ElevenLabsMono';

export default Icon;
