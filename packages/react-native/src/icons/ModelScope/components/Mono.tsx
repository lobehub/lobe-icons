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
        d="M2.667 5.3H8v2.667H5.333v2.666H2.667V8.467H.5v2.166h2.167V13.3H0V7.967h2.667V5.3zM2.667 13.3h2.666v2.667H8v2.666H2.667V13.3zM8 10.633h2.667V13.3H8v-2.667zM13.333 13.3v2.667h-2.666V13.3h2.666zM13.333 13.3v-2.667H16V13.3h-2.667z"
        fill={color}
      />
      <Path
        clipRule="evenodd"
        d="M21.333 13.3v-2.667h-2.666V7.967H16V5.3h5.333v2.667H24V13.3h-2.667zm0-2.667H23.5V8.467h-2.167v2.166z"
        fill={color}
      />
      <Path d="M21.333 13.3v5.333H16v-2.666h2.667V13.3h2.666z" fill={color} />
    </Svg>
  );
});

Icon.displayName = 'ModelScopeMono';

export default Icon;
