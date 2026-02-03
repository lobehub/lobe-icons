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
        d="M11.86-.14c6.622 0 12 5.377 12 12 0 6.622-5.378 12-12 12-6.623 0-12-5.378-12-12 0-6.623 5.377-12 12-12zM7.831 18.006l4.892.034.01-1.523-3.375-.025.018-6.023-1.523-.004-.022 7.54zm7.533-12.229a3.794 3.794 0 000 7.585 3.794 3.794 0 000-7.585zM2.533 10.446l.002 1.524 3.508-.004-.002-1.524-3.508.004zm12.832-3.221a2.349 2.349 0 012.346 2.346 2.348 2.348 0 01-2.346 2.346 2.349 2.349 0 01-2.346-2.346 2.35 2.35 0 012.346-2.346z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'LovartMono';

export default Icon;
