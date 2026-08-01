import React, { memo } from 'react';
import { Circle, Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const MARK_PATH =
  'M12 5C15 5 18 7 20 13C18 19 15 21 12 21C9 21 6 19 4 13C6 7 9 5 12 5ZM8.4 11.6A1 1 0 0 1 10.4 11.6L10.4 14.4A1 1 0 0 1 8.4 14.4ZM13.6 11.6A1 1 0 0 1 15.6 11.6L15.6 14.4A1 1 0 0 1 13.6 14.4Z';

const Icon = memo<RNIconProps>(({ size = 24, style, color = '#000000', ...rest }) => {
  return (
    <Svg color={color} height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path d={MARK_PATH} fill={color} fillRule="evenodd" />
      <Circle cx="12" cy="4.5" fill={color} r="1.3" />
    </Svg>
  );
});

Icon.displayName = 'OpenferenceMono';

export default Icon;
