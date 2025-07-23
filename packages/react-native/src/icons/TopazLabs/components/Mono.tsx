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
        d="M2 15.357V22h6.65v-6.643H2zM15.32 15.357V8.714H8.67v6.643h6.65zM22 8.643V2h-6.65v6.643H22z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'TopazLabsMono';

export default Icon;
