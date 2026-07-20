import React, { memo } from 'react';
import { Circle, G, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

import { COLOR_PRIMARY } from '../style';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <G fill="none" stroke={COLOR_PRIMARY} strokeWidth={1.7}>
        <Circle cx="12" cy="12" r="4" />
        <Circle cx="12" cy="8" r="4" />
        <Circle cx="12" cy="16" r="4" />
        <Circle cx="8.54" cy="10" r="4" />
        <Circle cx="15.46" cy="10" r="4" />
        <Circle cx="8.54" cy="14" r="4" />
        <Circle cx="15.46" cy="14" r="4" />
        <Circle cx="12" cy="12" r="9.3" />
      </G>
    </Svg>
  );
});

Icon.displayName = 'RespiraColor';

export default Icon;
