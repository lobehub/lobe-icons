import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path
        d="M20.531 3.736A2.146 2.146 0 0018.419 2h-3.838c-1.071 0-2.07.54-2.65 1.435L.023 21.78a.142.142 0 00.12.22h3.6c.097 0 .188-.05.24-.131l3.547-5.492h6.274c1.46 0 2.73-.996 3.067-2.407l.167-.695.002-.01a.14.14 0 00-.139-.161H9.644l4.935-7.643a.861.861 0 01.724-.393h1.225c.276 0 .512.194.563.463l3.105 16.237a.286.286 0 00.281.232h3.38c.009 0 .018 0 .026-.003a.142.142 0 00.114-.166L20.531 3.736z"
        fill="#514BFD"
      />
    </Svg>
  );
});

Icon.displayName = 'AnspireColor';

export default Icon;
