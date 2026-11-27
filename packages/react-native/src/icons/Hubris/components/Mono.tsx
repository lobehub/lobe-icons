import React, { memo } from 'react';
import { Circle, G, Line, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, color = '#000000', ...rest }) => {
  return (
    <Svg color={color} height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Circle cx={12} cy={12} fill={color} r={2.4} />
      <G opacity={0.85}>
        <Circle cx={12} cy={3.5} fill={color} r={1.4} />
        <Circle cx={20.5} cy={12} fill={color} r={1.4} />
        <Circle cx={12} cy={20.5} fill={color} r={1.4} />
        <Circle cx={3.5} cy={12} fill={color} r={1.4} />
      </G>
      <G opacity={0.6}>
        <Circle cx={18.5} cy={5.5} fill={color} r={1.1} />
        <Circle cx={18.5} cy={18.5} fill={color} r={1.1} />
        <Circle cx={5.5} cy={18.5} fill={color} r={1.1} />
        <Circle cx={5.5} cy={5.5} fill={color} r={1.1} />
      </G>
      <G opacity={0.4} stroke={color} strokeWidth={0.7}>
        <Line x1={12} x2={12} y1={12} y2={3.5} />
        <Line x1={12} x2={20.5} y1={12} y2={12} />
        <Line x1={12} x2={12} y1={12} y2={20.5} />
        <Line x1={12} x2={3.5} y1={12} y2={12} />
      </G>
      <G opacity={0.3} stroke={color} strokeWidth={0.7}>
        <Line x1={12} x2={18.5} y1={12} y2={5.5} />
        <Line x1={12} x2={18.5} y1={12} y2={18.5} />
        <Line x1={12} x2={5.5} y1={12} y2={18.5} />
        <Line x1={12} x2={5.5} y1={12} y2={5.5} />
      </G>
    </Svg>
  );
});

Icon.displayName = 'HubrisMono';

export default Icon;
