import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path d="M18.5 16h-13v3h13v-3z" fill="#FF4F00" />
    </Svg>
  );
});

Icon.displayName = 'ZapierColor';

export default Icon;
