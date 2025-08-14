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
        d="M12 0a12 12 0 110 24 12 12 0 010-24zm7.167 19.18a10.082 10.082 0 002.971-7.169v-.548l-.499.002h-6.68v1.12h6.038l-.002.034a9.038 9.038 0 01-8.993 8.41 8.957 8.957 0 01-6.375-2.642 8.963 8.963 0 01-2.64-6.376c0-2.406.939-4.67 2.64-6.373A8.961 8.961 0 0112 2.998l.572.007V1.882l-.57-.006A10.15 10.15 0 001.864 12.01c0 2.708 1.055 5.253 2.97 7.17A10.078 10.078 0 0012 22.15a10.08 10.08 0 007.171-2.97m-6.6-2.942V6.657h-1.14v10.705h3.529v-1.123H12.57zM9.704 8.183a1.533 1.533 0 10-3.067-.01 1.533 1.533 0 003.067.01z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'LGMono';

export default Icon;
