import React, { memo } from 'react';
import { Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';
import Logo from './Logo';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  return (
    <Svg
      height={size}
      style={style}
      viewBox="0 0 40 40"
      width={size}
      {...rest}
    >
      <Logo />
    </Svg>
  );
});

Icon.displayName = 'AiOnlyColor';

export default Icon;
