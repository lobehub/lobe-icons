import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path d="M11.49 2H2v9.492h9.492V2h-.002z" fill="#F25022" />
      <Path d="M22 2h-9.492v9.492H22V2z" fill="#7FBA00" />
      <Path d="M11.49 12.508H2V22h9.492v-9.492h-.002z" fill="#00A4EF" />
      <Path d="M22 12.508h-9.492V22H22v-9.492z" fill="#FFB900" />
    </Svg>
  );
});

Icon.displayName = 'MicrosoftColor';

export default Icon;
