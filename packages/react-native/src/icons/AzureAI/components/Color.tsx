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
        clipRule="evenodd"
        d="M16.233 0c.713 0 1.345.551 1.572 1.329.227.778 1.555 5.59 1.555 5.59v9.562h-4.813L14.645 0h1.588z"
        fill={a.fill}
        fillRule="evenodd"
      />
      <Path
        d="M23.298 7.47c0-.34-.275-.6-.6-.6h-2.835a3.617 3.617 0 00-3.614 3.615v5.996h3.436a3.617 3.617 0 003.613-3.614V7.47z"
        fill={b.fill}
      />
      <Path
        clipRule="evenodd"
        d="M16.233 0a.982.982 0 00-.989.989l-.097 18.198A4.814 4.814 0 0110.334 24H1.6a.597.597 0 01-.567-.794l7-19.981A4.819 4.819 0 0112.57 0h3.679-.016z"
        fill={c.fill}
        fillRule="evenodd"
      />
      <Defs>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={a.id}
          x1="18.242"
          x2="14.191"
          y1="16.837"
          y2=".616"
        >
          <Stop stopColor="#712575" />
          <Stop offset="9%" stopColor="#9A2884" />
          <Stop offset="18%" stopColor="#BF2C92" />
          <Stop offset="27%" stopColor="#DA2E9C" />
          <Stop offset="34%" stopColor="#EB30A2" />
          <Stop offset="40%" stopColor="#F131A5" />
          <Stop offset="50%" stopColor="#EC30A3" />
          <Stop offset="61%" stopColor="#DF2F9E" />
          <Stop offset="72%" stopColor="#C92D96" />
          <Stop offset="83%" stopColor="#AA2A8A" />
          <Stop offset="95%" stopColor="#83267C" />
          <Stop offset="100%" stopColor="#712575" />
        </LinearGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={b.id}
          x1="19.782"
          x2="19.782"
          y1=".34"
          y2="23.222"
        >
          <Stop stopColor="#DA7ED0" />
          <Stop offset="8%" stopColor="#B17BD5" />
          <Stop offset="19%" stopColor="#8778DB" />
          <Stop offset="30%" stopColor="#6276E1" />
          <Stop offset="41%" stopColor="#4574E5" />
          <Stop offset="54%" stopColor="#2E72E8" />
          <Stop offset="67%" stopColor="#1D71EB" />
          <Stop offset="81%" stopColor="#1471EC" />
          <Stop offset="100%" stopColor="#1171ED" />
        </LinearGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={c.id}
          x1="18.404"
          x2="3.236"
          y1=".859"
          y2="25.183"
        >
          <Stop stopColor="#DA7ED0" />
          <Stop offset="5%" stopColor="#B77BD4" />
          <Stop offset="11%" stopColor="#9079DA" />
          <Stop offset="18%" stopColor="#6E77DF" />
          <Stop offset="25%" stopColor="#5175E3" />
          <Stop offset="33%" stopColor="#3973E7" />
          <Stop offset="42%" stopColor="#2772E9" />
          <Stop offset="54%" stopColor="#1A71EB" />
          <Stop offset="68%" stopColor="#1371EC" />
          <Stop offset="100%" stopColor="#1171ED" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
});

Icon.displayName = 'AzureAIColor';

export default Icon;
