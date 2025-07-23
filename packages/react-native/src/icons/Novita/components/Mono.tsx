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
        d="M9.167 4.17v5.665L0 19.003h9.167v-5.666l5.666 5.666H24L9.167 4.17z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'NovitaMono';

export default Icon;
