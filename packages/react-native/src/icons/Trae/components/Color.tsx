import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path
        d="M21.596 2H2.404A.404.404 0 002 2.404v19.192c0 .223.18.404.404.404h19.192c.223 0 .404-.18.404-.404V2.404A.404.404 0 0021.596 2z"
        fill="#FF4A36"
      />
      <Path d="M18.366 16.15H11.9v2.214h6.465v-2.215z" fill="#fff" />
    </Svg>
  );
});

Icon.displayName = 'TraeColor';

export default Icon;
