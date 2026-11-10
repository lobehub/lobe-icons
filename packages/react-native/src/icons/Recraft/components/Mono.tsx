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
        d="M18.937 16.017h-5.995c3.616-1.143 6.026-3.584 6.026-7.292C18.968 4.152 15.322 1 10.996 1 7.69 1 5.125 3.966 5.125 8.725c0 1.514.309 3.151.71 4.45H3.488L1.201 23h8.806v-6.228L13.67 23h9.13zm-8.59-3.368c-.834 0-1.638-1.607-1.638-3.924 0-2.194.804-3.739 1.638-3.739s1.638 1.545 1.638 3.739c0 2.317-.804 3.924-1.638 3.924"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'RecraftMono';

export default Icon;
