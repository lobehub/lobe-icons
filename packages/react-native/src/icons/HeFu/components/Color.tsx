import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

import { COLOR_ACCENT, COLOR_PRIMARY } from '../style';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path
        d="M2.8 3.6h3.2v16.8H2.8Z M6 10.4h6v3.2H6Z M12 3.6h3.2v16.8H12Z M15.2 11.3h2.6v1.4h-2.6Z M19.3 5.6h1.4v12.8h-1.4Z"
        fill={COLOR_PRIMARY}
      />
      <Path
        d="M17.9 5.6a2.1 2.1 0 1 0 4.2 0a2.1 2.1 0 1 0-4.2 0Z M17.9 12a2.1 2.1 0 1 0 4.2 0a2.1 2.1 0 1 0-4.2 0Z M17.9 18.4a2.1 2.1 0 1 0 4.2 0a2.1 2.1 0 1 0-4.2 0Z"
        fill={COLOR_ACCENT}
      />
    </Svg>
  );
});

Icon.displayName = 'HeFuColor';

export default Icon;
