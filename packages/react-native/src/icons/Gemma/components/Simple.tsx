import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, color = '#000000', ...rest }) => {
  return (
    <Svg color={color} height={size} style={style} viewBox="0 0 24 24" {...rest}>
      <Path
        d="M12 0a14.305 14.305 0 0 0 12 12 14.305 14.305 0 0 0-12 12A14.304 14.304 0 0 0 0 12 14.304 14.304 0 0 0 12 0Zm.031 4.5A14.281 14.281 0 0 1 9 9a14.742 14.742 0 0 1-4.5 3.063 14.281 14.281 0 0 1 4.5 3.03 14.281 14.281 0 0 1 3.031 4.5 14.742 14.742 0 0 1 3.063-4.5 14.281 14.281 0 0 1 4.5-3.03A14.742 14.742 0 0 1 15.094 9a14.74 14.74 0 0 1-3.063-4.5Z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  );
});

Icon.displayName = 'GemmaSimple';

export default Icon;
