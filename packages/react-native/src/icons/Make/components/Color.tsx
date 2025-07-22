import React, { memo } from 'react';
import { Defs, LinearGradient, Path, Stop, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';
import { useFillIds } from '@/hooks/useFillId';

import { TITLE } from '../style';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  const [a, b, c] = useFillIds(TITLE, 3);
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path
        d="M6.989 4.036L.062 17.818a.577.577 0 00.257.774l3.733 1.876a.577.577 0 00.775-.256L11.753 6.43a.577.577 0 00-.257-.775L7.763 3.78a.575.575 0 00-.774.257z"
        fill={a.fill}
      />
      <Path
        d="M19.245 3.832h4.179c.318 0 .577.26.577.577v15.425a.578.578 0 01-.577.578h-4.179a.578.578 0 01-.577-.578V4.41c0-.318.259-.577.577-.577z"
        fill={b.fill}
      />
      <Path
        d="M12.815 4.085L9.85 19.108a.576.576 0 00.453.677l4.095.826c.314.063.62-.14.681-.454l2.964-15.022a.577.577 0 00-.453-.677l-4.096-.827a.577.577 0 00-.68.454z"
        fill={c.fill}
      />

      <Defs>
        <LinearGradient gradientUnits="userSpaceOnUse" id={a.id} x1="1.5" x2="12" y1="19.5" y2="0">
          <Stop stopColor="#F0F" />
          <Stop offset=".17" stopColor="#E90CF9" />
          <Stop offset=".54" stopColor="#C023ED" />
          <Stop offset=".73" stopColor="#B02DE9" />
          <Stop offset="1" stopColor="#B02DE9" />
        </LinearGradient>
        <LinearGradient gradientUnits="userSpaceOnUse" id={b.id} x1="0" x2="24" y1="24" y2="0">
          <Stop stopColor="#B02DE9" />
          <Stop offset=".02" stopColor="#B02DE9" />
          <Stop offset=".8" stopColor="#6D00CC" />
          <Stop offset="1" stopColor="#6D00CC" />
        </LinearGradient>
        <LinearGradient gradientUnits="userSpaceOnUse" id={c.id} x1="0" x2="24" y1="24" y2="0">
          <Stop stopColor="#F0F" />
          <Stop offset=".02" stopColor="#F0F" />
          <Stop offset=".09" stopColor="#E90CF9" />
          <Stop offset=".23" stopColor="#C023ED" />
          <Stop offset=".3" stopColor="#B02DE9" />
          <Stop offset=".42" stopColor="#A42BE3" />
          <Stop offset=".63" stopColor="#8626D5" />
          <Stop offset=".85" stopColor="#6021C3" />
          <Stop offset="1" stopColor="#6021C3" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
});

Icon.displayName = 'MakeColor';

export default Icon;
