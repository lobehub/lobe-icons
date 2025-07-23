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
        d="M0 6.306C0 5.48.893 4.96 1.612 5.37l6.607 3.76c.337.192.545.55.545.938v9.35c0 .596-.483 1.079-1.079 1.079H1.08A1.079 1.079 0 010 19.417V6.307z"
        fill={color}
      />
      <Path
        d="M9.708 10.063c0-.385.206-.742.54-.934l12.135-6.984A1.079 1.079 0 0124 3.08v16.337c0 .596-.483 1.079-1.079 1.079H10.787a1.079 1.079 0 01-1.08-1.079v-9.354z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'XuanyuanMono';

export default Icon;
