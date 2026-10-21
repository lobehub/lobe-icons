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
      viewBox="0 0 58 24"
      width={size * 2.42} // 保持宽高比
      {...rest}
    >
      <Path
        d="M14.398 2c2.852 0 5.718.957 7.976 2.533v4.44c-1.66-2.042-4.796-3.575-7.976-3.575-5.581 0-8.957 2.594-8.957 6.604s3.636 6.605 8.957 6.605c3.208 0 6.3-1.482 7.95-3.497h.023v-.004l.003-.002v4.436C20.16 21.07 17.327 22 14.398 22 6.838 22 2 17.522 2 12S6.376 2 14.398 2m22.644 19.585H33.39L29.805 6.332v15.253h-3.648V2.505h6.401z"
        fill={color}
      />
      <Path
        d="M47.867 21.585H44.22V6.565l-3.53 15.02h-3.648l4.484-19.08h6.341zm8.133 0h-3.649V2.505H56zm-33.626-6.512-.024.033H11.825V11.71h10.55z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'GmiCloudText';

export default Icon;
