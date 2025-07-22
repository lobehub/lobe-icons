import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path
        d="M21.66 7.017a3.308 3.308 0 10-4.677-4.678l-3.458 3.458a3.308 3.308 0 104.678 4.677l3.458-3.457zM10.475 18.203a3.308 3.308 0 10-4.678-4.678l-3.458 3.458a3.308 3.308 0 104.678 4.677l3.458-3.457z"
        fill="#7748F9"
      />
      <Path
        d="M18.203 13.525a3.308 3.308 0 10-4.678 4.678l3.458 3.458a3.308 3.308 0 004.678-4.678l-3.458-3.458zM7.017 2.339a3.308 3.308 0 10-4.678 4.678l3.458 3.457a3.308 3.308 0 004.677-4.678L7.017 2.34z"
        fill="#BFABFB"
      />
    </Svg>
  );
});

Icon.displayName = 'Doc2XColor';

export default Icon;
