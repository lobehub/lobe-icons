import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path
        d="M6.638 4.38a5.35 5.35 0 017.747 3.963 5.35 5.35 0 01-.56 3.284l-1.154-.61A4.044 4.044 0 007.237 5.54l-.6-1.158z"
        fill="#3050FF"
      />
      <Path
        clipRule="evenodd"
        d="M9.13 0a9.13 9.13 0 017.992 13.546l6.803 6.515-3.4 3.551-6.853-6.562A9.13 9.13 0 119.13 0zm0 2.61a6.521 6.521 0 100 13.042 6.521 6.521 0 000-13.043z"
        fill="#3050FF"

        fillRule="evenodd"
      />
    </Svg>
  );
});

Icon.displayName = 'SearXNGColor';

export default Icon;
