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
        d="M16.376 12.644L21 2h-3.842l-4.624 10.644h3.842zM13.915 24v-3.733c0-2.822-.352-3.64-1.407-5.988L6.933 2H3l7.124 15.709V24h3.79z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'YandexMono';

export default Icon;
