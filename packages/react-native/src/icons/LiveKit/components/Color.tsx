import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path
        d="M14 10h-4v4h4v-4zM18 6h-4v4.001h4v-4zM18 14h-4v4h4v-4zM22 2h-4v4h4V2zM22 18h-4v4h4v-4z"
        fill="#1FD5F9"
      />
      <Path d="M6 18V2H2v20h12v-4H6z" fill="#fff" />
    </Svg>
  );
});

Icon.displayName = 'LiveKitColor';

export default Icon;
