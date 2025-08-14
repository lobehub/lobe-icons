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
        clipRule="evenodd"
        d="M3.84 7.847C3.84 6.274 2.53 5 .912 5H0v9.683C0 17.067 1.988 19 4.44 19c2.452 0 4.44-1.933 4.44-4.317v-4.97c0-1.314 1.096-2.38 2.448-2.38 1.352 0 2.448 1.066 2.448 2.38v7.42c0 1.031.86 1.867 1.92 1.867h2.112V9.923C17.808 7.204 15.541 5 12.744 5S7.68 7.204 7.68 9.923V14.8c0 1.031-.86 1.867-1.92 1.867S3.84 15.83 3.84 14.8V7.847zm14.582-.403c1.175.897 1.954 2.29 1.954 3.856v5.833c0 1.031.86 1.867 1.92 1.867H24v-7.234a4.36 4.36 0 00-.025-.466c-.24-2.23-2.179-3.967-4.535-3.967a4.704 4.704 0 00-1.018.11z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'YouMindMono';

export default Icon;
