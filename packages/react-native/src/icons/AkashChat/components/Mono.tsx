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
        d="M15.902 14.836l3.93 6.914h-7.934L7.93 14.836h7.972z"
        fill={color}
      />
      <Path
        clipRule="evenodd"
        d="M19.828 21.754l3.96-6.918L15.86 1H7.93l11.898 20.754z"
        fill={color}
      />
      <Path
        clipRule="evenodd"
        d="M3.965 7.914h7.93L3.969 21.75 0 14.836l3.965-6.922z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'AkashChatMono';

export default Icon;
