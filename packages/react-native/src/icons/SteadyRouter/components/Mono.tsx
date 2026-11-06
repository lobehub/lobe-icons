import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, color = '#000000', ...rest }) => {
  return (
    <Svg color={color} fill="none" height={size} style={style} viewBox="0 0 64 64" width={size} {...rest}>
      <Path
        d="M43.8 20C43.8 15.5 38.5 12.5 32 12.5C25 12.5 20.5 16 20.5 21.5C20.5 27 25.5 29.3 32 30.8C39.5 32.5 45 35.5 45 41.5C45 47.5 39.5 51.5 32 51.5C25.3 51.5 20.2 48.5 20.2 44"
        stroke={color}
        strokeWidth={10}
      />
    </Svg>
  );
});

Icon.displayName = 'SteadyRouterMono';

export default Icon;
