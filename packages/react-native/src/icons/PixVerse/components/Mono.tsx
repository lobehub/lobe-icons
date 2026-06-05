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
        d="M10.998 23.837L5 21.015V5.569c0-.733.32-1.547.84-2.065l1.386-1.387 6.064 19.729c.426 1.377-.987 2.605-2.292 1.991z"
        fill={color}
        opacity=".8"
      />
      <Path
        d="M19.36 8.43L12.517.905A2.765 2.765 0 008.517.81L5.84 3.504c-.511.584-.803 1.198-.803 1.93V20.88l13.699-8.219a2.765 2.765 0 00.623-4.23"
        fill={color}
        opacity=".8"
      />
    </Svg>
  );
});

Icon.displayName = 'PixVerseMono';

export default Icon;
