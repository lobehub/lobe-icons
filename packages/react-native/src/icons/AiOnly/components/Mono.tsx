import React, { memo } from 'react';
import { Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';
import Logo from './Logo';

const Icon = memo<RNIconProps>(({ size = 24, style, color = '#000000', ...rest }) => {
  return (
    <Svg
      color={color}
      height={size}
      style={style}
      viewBox="0 0 40 40"
      width={size}
      {...rest}
    >
      <Logo color={color} mono />
    </Svg>
  );
});

Icon.displayName = 'AiOnlyMono';

export default Icon;
