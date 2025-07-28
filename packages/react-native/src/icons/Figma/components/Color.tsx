import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path d="M4 20a4 4 0 014-4h4v4a4 4 0 01-8 0z" fill="#24CB71" />
      <Path d="M12 0v8h4a4 4 0 000-8h-4z" fill="#FF7237" />
      <Path d="M15.967 16a4 4 0 100-8 4 4 0 000 8z" fill="#00B6FF" />
      <Path d="M4 4a4 4 0 004 4h4V0H8a4 4 0 00-4 4z" fill="#FF3737" />
      <Path d="M4 12a4 4 0 004 4h4V8H8a4 4 0 00-4 4z" fill="#874FFF" />
    </Svg>
  );
});

Icon.displayName = 'FigmaColor';

export default Icon;
