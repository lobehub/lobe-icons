import React, { memo } from 'react';
import { Circle, Defs, LinearGradient, Path, Stop, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

import { COLOR_DOT, COLOR_GRADIENT_END, COLOR_GRADIENT_START } from '../style';

const BOWL = { cx: 8.966, cy: 15.793, r: 5.69, sw: 3.034 };
const STEM = { sw: 3.034, x: 14.655, y1: 2.517, y2: 21.483 };
const DOT = { cx: 20.345, cy: 4.414, r: 1.897 };

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Circle
        cx={BOWL.cx}
        cy={BOWL.cy}
        fill="none"
        r={BOWL.r}
        stroke="url(#deyinGradient)"
        strokeWidth={BOWL.sw}
      />
      <Path
        d={`M${STEM.x} ${STEM.y1}V${STEM.y2}`}
        stroke="url(#deyinGradient)"
        strokeLinecap="round"
        strokeWidth={STEM.sw}
      />
      <Circle cx={DOT.cx} cy={DOT.cy} fill={COLOR_DOT} r={DOT.r} />
      <Defs>
        <LinearGradient id="deyinGradient" x1="4" x2="20" y1="4" y2="20">
          <Stop stopColor={COLOR_GRADIENT_START} />
          <Stop offset="1" stopColor={COLOR_GRADIENT_END} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
});

Icon.displayName = 'DeyinColor';

export default Icon;
