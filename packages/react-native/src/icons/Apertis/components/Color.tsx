import React, { memo } from 'react';
import { Defs, G, LinearGradient, Path, Stop, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';
import { useFillIds } from '@/hooks/useFillId';

import { TITLE } from '../style';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  const [a, b, c, d] = useFillIds(TITLE, 4);
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <G opacity=".45">
        <Path d="M3.474 24l3.943-8.21H9.34L3.474 24z" fill={a.fill} />
        <Path d="M24 24h-4.895l-3.882-8.362 1.356-3.164H9.01L15 0l9 24z" fill={b.fill} />
      </G>
      <Path d="M15.743 12.474H7.737l-1.263 3.315L0 24 10.737 0l5.006 12.474z" fill={c.fill} />
      <Path d="M16.146 13.48L20.369 24h-5.21l-3.473-8.21h3.473l.989-2.31z" fill={d.fill} />
      <Defs>
        <LinearGradient gradientUnits="userSpaceOnUse" id={a.id} x1="12" x2="12" y1="0" y2="24">
          <Stop stopColor="#14B8A6" />
          <Stop offset="5%" stopColor="#0D7D72" />
          <Stop offset="100%" stopColor="#044F47" />
        </LinearGradient>
        <LinearGradient gradientUnits="userSpaceOnUse" id={b.id} x1="12" x2="12" y1="0" y2="24">
          <Stop stopColor="#14B8A6" />
          <Stop offset="5%" stopColor="#0D7D72" />
          <Stop offset="100%" stopColor="#044F47" />
        </LinearGradient>
        <LinearGradient gradientUnits="userSpaceOnUse" id={c.id} x1="0" x2="0" y1="0" y2="24">
          <Stop stopColor="#5EEAD4" />
          <Stop offset="25%" stopColor="#2DD4BF" />
          <Stop offset="65%" stopColor="#0D9488" />
          <Stop offset="100%" stopColor="#0A7A6F" />
        </LinearGradient>
        <LinearGradient gradientUnits="userSpaceOnUse" id={d.id} x1="0" x2="0" y1="0" y2="24">
          <Stop stopColor="#5EEAD4" />
          <Stop offset="25%" stopColor="#2DD4BF" />
          <Stop offset="65%" stopColor="#0D9488" />
          <Stop offset="100%" stopColor="#0A7A6F" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
});

Icon.displayName = 'ApertisColor';

export default Icon;
