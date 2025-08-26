import React, { memo } from 'react';
import { Defs, LinearGradient, Path, Stop, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';
import { useFillId } from '@/hooks/useFillId';

import { TITLE } from '../style';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  const { id, fill } = useFillId(TITLE);
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path d="M15.902 14.836l3.93 6.914h-7.934L7.93 14.836h7.972z" fill={fill} />
      <Path d="M19.828 21.754l3.96-6.918L15.86 1H7.93l11.898 20.754z" fill="#FF414C" />
      <Path d="M3.965 7.914h7.93L3.969 21.75 0 14.836l3.965-6.922z" fill="#FF414C" />
      <Defs>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={id}
          x1="13.877"
          x2="18.518"
          y1="19.997"
          y2="14.799"
        >
          <Stop stopColor="#FF414C" />
          <Stop offset="100%" stopColor="#FF414C" stopOpacity="0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
});

Icon.displayName = 'AkashChatColor';

export default Icon;
