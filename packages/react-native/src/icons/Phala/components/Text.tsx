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
      viewBox="0 0 103 24"
      width={size * 4.29} // 保持宽高比
      {...rest}
    >
      <Path
        d="M18.496 8.942c0 4.657-2.917 7.342-8.005 7.342H6.517v5.714H2V2h8.49c5.09 0 8.006 2.514 8.006 6.942m-4.288.143c0-2.228-1.43-3.342-3.946-3.342H6.517v6.77h3.745c2.516 0 3.946-1.143 3.946-3.428M25.575 2v10h9.063V2h4.515v19.998h-4.515v-6h-9.063v6h-4.513V2zm30.919 15.998h-9.171L45.705 22h-4.66l8.69-19.997h4.66L62.944 22H58.11zm-1.609-4.002-2.95-7.282L48.958 14zm39.671 4.002h-9.172L83.765 22h-4.66l8.692-19.997h4.66L101.002 22h-4.833zm-1.61-4.002-2.948-7.284-2.975 7.284zM69.525 2v16.055h8.577v3.943H65.008V2z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'PhalaText';

export default Icon;
