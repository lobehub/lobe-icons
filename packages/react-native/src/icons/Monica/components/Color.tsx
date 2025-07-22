import React, { memo } from 'react';
import { Circle, Defs, Ellipse, LinearGradient, Path, Stop, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';
import { useFillId } from '@/hooks/useFillId';

import { TITLE } from '../style';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  const { id, fill } = useFillId(TITLE);
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Circle cx="12" cy="12" fill={fill} r="12" />
      <Ellipse cx="12" cy="12" fill="#fff" rx="9.75" ry="8.438" />
      <Path
        d="M16.207 10.195a.96.96 0 111.357 1.357l-1.114 1.114 1.473.85a.96.96 0 11-.96 1.662l-2.444-1.411a1.003 1.003 0 01-.072-.046.962.962 0 01-.236-1.53l1.996-1.996zM7.688 9.937a1.5 1.5 0 00-1.5 1.5v2.25a1.5 1.5 0 003 0v-2.25a1.5 1.5 0 00-1.5-1.5z"
        fill="#1E1E1E"
      />

      <Defs>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={id}
          x1="0"
          x2="24"
          y1="12.281"
          y2="12.281"
        >
          <Stop stopColor="#A83FE0" />
          <Stop offset=".477" stopColor="#515FFB" />
          <Stop offset="1" stopColor="#2BB5DD" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
});

Icon.displayName = 'MonicaColor';

export default Icon;
