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
      viewBox="0 0 114 24"
      width={size * 4.75} // 保持宽高比
      {...rest}
    >
      <Path
        d="M2 22V2h4.23l4.41 6.828L14.93 2h3.988v20l-3.987-.06V9.25l-3.263 4.714H9.674L6.23 9.25V22H2zM26.471 2h-3.867v20h3.867V2zm3.565 0h4.049l7.492 12.387V2h3.988v20h-3.988L34.085 9.734V21.94h-4.049V2zm23.082 0h-4.109v20h4.109V2zm3.504 0v20h4.23V9.25l3.444 4.714h1.994l3.263-4.713V21.94l3.988.06V2h-3.988l-4.29 6.828L60.852 2h-4.23zm19.457 20l6.344-20h5.076l6.404 20h-4.471l-.89-3.021h-7.139L80.49 22h-4.411zm6.369-6.405h5.078l-2.505-8.338-2.573 8.338zM111.97 2h-4.774l-3.619 6.082L99.885 2h-4.592l5.961 9.985L95.294 22h4.591l3.698-6.113 3.613 6.053h4.774l-6.025-9.956L111.97 2z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'MinimaxText';

export default Icon;
