import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, color = '#000000', ...rest }) => {
  return (
    <Svg color={color} height={size} style={style} viewBox="0 0 86 86" width={size} {...rest}>
      <Path
        d="M43 0C19.252 0 0 19.252 0 43s19.252 43 43 43 43-19.252 43-43S66.748 0 43 0Zm1.362 66.507c-12.864 0-23.292-10.493-23.292-23.435 0-12.943 10.428-23.435 23.292-23.435 12.863 0 23.291 10.492 23.291 23.435 0 12.942-10.428 23.435-23.291 23.435Z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'GreenPTMono';

export default Icon;
