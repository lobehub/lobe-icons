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
        d="M7.043 6.487c1.635 0 2.241-1.003 2.241-2.243S8.681 2 7.044 2C5.405 2 4.801 3.003 4.801 4.244c0 1.24.604 2.243 2.241 2.243z"
        fill={color}
      />
      <Path
        d="M14.883 6.97v1.443h-3.679v3.203h3.68v8.012H8.801V8.41h-8v3.203h4.48v8.012H0v3.203h24v-3.203h-5.6v-8.012H24V8.41h-5.6V5.206H24V2.003h-4.161a4.97 4.97 0 00-4.961 4.967h.005z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'DifyMono';

export default Icon;
