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
        d="M0 12c0 6.617 5.395 12 12.026 12H24V0H12.026C5.395 0 0 5.383 0 12m3.518 0c0-4.81 3.861-8.726 8.608-8.726S20.733 7.189 20.733 12c0 4.81-3.861 8.726-8.607 8.726-4.747 0-8.608-3.915-8.608-8.726"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'WaferMono';

export default Icon;
