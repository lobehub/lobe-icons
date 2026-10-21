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
        d="M16.725 1c0.91 0 1.753 0.486 2.209 1.275l4.724 8.184a2.55 2.55 0 0 1 0 2.55l-4.724 8.183a2.55 2.55 0 0 1-2.21 1.276H7.276a2.55 2.55 0 0 1-2.209-1.276L0.342 13.01a2.55 2.55 0 0 1 0-2.55l4.724-8.184A2.55 2.55 0 0 1 7.276 1z m0.97 7.307a0.83 0.83 0 0 0-1.169 0.148l-2.74 3.535-3.132-2.46a0.833 0.833 0 0 0-1.175 0.146l-3.324 4.321a0.833 0.833 0 0 0 1.32 1.016l2.812-3.654 3.13 2.46c0.175 0.136 0.395 0.2 0.617 0.17a0.83 0.83 0 0 0 0.556-0.316l3.254-4.198a0.83 0.83 0 0 0-0.149-1.168"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'AIMLAPIMono';

export default Icon;
