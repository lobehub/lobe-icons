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
      <Path
        d="M.661 19.889h8.666c-.14-1.41-1.145-2.955-3.601-4.007v-.104c2.863.88 3.893 2.386 4.312 4.11H20.73l-1.72-1.476C20.017 15.244 24 13.747 24 13.747c-.141-2.541-1.441-4.909-5.787-6.827L8.326 3c.331 4.179 1.811 6.575 5.523 7.163v.102c-2.579-.064-4.368-1.216-5.275-3.588C.698 8.123-1.201 14.156.66 19.889z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'PikaMono';

export default Icon;
