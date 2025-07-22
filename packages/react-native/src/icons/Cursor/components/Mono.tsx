import React, { memo } from 'react';
import { useColorScheme } from 'react-native';
import { Defs, LinearGradient, Path, Stop, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';
import { useFillIds } from '@/hooks/useFillId';

import { TITLE } from '../style';

const Icon = memo<RNIconProps>(({ color, size = 24, style, ...rest }) => {
  const [a, b, c] = useFillIds(TITLE + color, 3);
  const colorScheme = useColorScheme();
  const fill = colorScheme === 'dark' || color === '#fff' ? '#fff' : '#000';
  const fillSecondary = colorScheme === 'dark' || color === '#fff' ? '#E4E4E4' : '#555';

  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path d="M11.925 24l10.425-6-10.425-6L1.5 18l10.425 6z" fill={a.fill} />
      <Path d="M22.35 18V6L11.925 0v12l10.425 6z" fill={b.fill} />
      <Path d="M11.925 0L1.5 6v12l10.425-6V0z" fill={c.fill} />
      <Path d="M22.35 6L11.925 24V12L22.35 6z" fill={fillSecondary} />
      <Path d="M22.35 6l-10.425 6L1.5 6h20.85z" fill={fill} />
      <Defs>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={a.id}
          x1="11.925"
          x2="11.925"
          y1="12"
          y2="24"
        >
          <Stop offset=".16" stopColor={fill} stopOpacity=".39" />
          <Stop offset=".658" stopColor={fill} stopOpacity=".8" />
        </LinearGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={b.id}
          x1="22.35"
          x2="11.925"
          y1="6.037"
          y2="12.15"
        >
          <Stop offset=".182" stopColor={fill} stopOpacity=".31" />
          <Stop offset=".715" stopColor={fill} stopOpacity="0" />
        </LinearGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={c.id}
          x1="11.925"
          x2="1.5"
          y1="0"
          y2="18"
        >
          <Stop stopColor={fill} stopOpacity=".6" />
          <Stop offset=".667" stopColor={fill} stopOpacity=".22" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
});

Icon.displayName = 'CursorMono';

export default Icon;
