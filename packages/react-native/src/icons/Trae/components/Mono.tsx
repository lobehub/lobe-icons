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
        d="M21.596 2c.223 0 .404.181.404.404v19.192a.405.405 0 01-.404.404H2.404A.405.405 0 012 21.596V2.404C2 2.181 2.181 2 2.404 2h19.192zM11.9 18.363h6.465V16.15h-6.465v2.214z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'TraeMono';

export default Icon;
