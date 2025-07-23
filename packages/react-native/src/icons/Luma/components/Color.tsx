import React, { memo } from 'react';
import { Defs, LinearGradient, Path, Stop, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';
import { useFillIds } from '@/hooks/useFillId';

import { TITLE } from '../style';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  const [a, b, c, d, e] = useFillIds(TITLE, 5);
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path d="M2 5.999L12.392 0v24L2 18V5.999z" fill="#000" />
      <Path d="M12.392 24L2 18l10.392-6 10.393 6-10.393 6z" fill={a.fill} />
      <Path d="M12.392 24L2 18l10.392-6 10.393 6-10.393 6z" fill={b.fill} />
      <Path d="M2 5.999L12.392 0v24L2 18V5.999z" fill={c.fill} />
      <Path d="M12.392 24L2 18l10.392-6 10.393 6-10.393 6z" fill={d.fill} />
      <Path d="M2 5.999L12.392 0v24L2 18V5.999z" fill={e.fill} />
      <Defs>
        <LinearGradient gradientUnits="userSpaceOnUse" id={a.id} x1="2" x2="22.785" y1="18" y2="18">
          <Stop stopColor="#00A" />
          <Stop offset="100%" stopColor="#A78DFF" />
        </LinearGradient>
        <LinearGradient gradientUnits="userSpaceOnUse" id={b.id} x1="2" x2="22.785" y1="18" y2="18">
          <Stop stopColor="#00A" />
          <Stop offset="100%" stopColor="#A78DFF" />
        </LinearGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={c.id}
          x1="13.748"
          x2="4.672"
          y1="22.642"
          y2="3.745"
        >
          <Stop stopColor="#004EFF" />
          <Stop offset="100%" stopColor="#0FF" />
        </LinearGradient>
        <LinearGradient gradientUnits="userSpaceOnUse" id={d.id} x1="2" x2="22.785" y1="18" y2="18">
          <Stop stopColor="#00A" />
          <Stop offset="100%" stopColor="#A78DFF" />
        </LinearGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={e.id}
          x1="13.748"
          x2="4.672"
          y1="22.642"
          y2="3.745"
        >
          <Stop stopColor="#004EFF" />
          <Stop offset="100%" stopColor="#0FF" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
});

Icon.displayName = 'LumaColor';

export default Icon;
