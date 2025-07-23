import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, color = '#000000', ...rest }) => {
  return (
    <Svg
      color={color}
      fillRule="evenodd"
      height={size}
      style={style}
      viewBox="0 0 24 24"
      width={size}
      {...rest}
    >
      <Path d="M11.49 2H2v9.492h9.492V2h-.002z" fill={color} />
      <Path d="M22 2h-9.492v9.492H22V2z" fill={color} />
      <Path d="M11.49 12.508H2V22h9.492v-9.492h-.002z" fill={color} />
      <Path d="M22 12.508h-9.492V22H22v-9.492z" fill={color} />
    </Svg>
  );
});

Icon.displayName = 'MicrosoftMono';

export default Icon;
