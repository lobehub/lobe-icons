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
        d="M9.377 10.47l-.018 6.023 3.374.025-.01 1.523-4.891-.034.022-7.541 1.523.004z"
        fill={color}
      />
      <Path
        clipRule="evenodd"
        d="M15.365 5.778a3.794 3.794 0 010 7.585 3.794 3.794 0 010-7.585zm0 1.447A2.35 2.35 0 0013.02 9.57a2.349 2.349 0 002.346 2.346 2.348 2.348 0 002.346-2.346 2.349 2.349 0 00-2.346-2.346z"
        fill={color}
      />
      <Path d="M6.043 11.966l-3.508.004-.002-1.524 3.508-.004.002 1.524z" fill={color} />
    </Svg>
  );
});

Icon.displayName = 'LovartInner';

export default Icon;
