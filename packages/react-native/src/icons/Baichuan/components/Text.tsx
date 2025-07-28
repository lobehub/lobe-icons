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
      viewBox="0 0 45 24"
      width={size * 1.88} // 保持宽高比
      {...rest}
    >
      <Path
        d="M2 2v2.712h8.136L9.57 7.198H4.26v14.576h2.712v-1.356h9.717v1.356h2.938V7.198H12.51l.677-2.486h8.362V2H2zm4.972 16.045v-2.938h9.717v2.825l-9.717.113zm0-8.361v2.937l9.717-.113V9.684H6.972zm21.921-7.571h-2.825v10.735c0 1.92-1.133 4.988-2.712 7.231L25.729 22c1.873-2.578 3.164-6.667 3.164-8.927V2.113zm4.067.904h2.712v16.61h-2.711l-.001-16.61zM42.452 2H39.74v19.661h2.712V2z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'BaichuanText';

export default Icon;
