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
        d="m14.606 7.852-.627 4.129c-.014.095.145.135.186.048 1.193-2.551 2.912-2.936 5.738-2.944h.359c.201 0 .356.174.328.369l-.166 1.156a.457.457 0 0 0 .46.516h3.095c.202 0 .357.174.329.369l-.225 1.559a.33.33 0 0 1-.328.278H14.22a.46.46 0 0 0-.46.39l-1.423 9.875a.33.33 0 0 1-.329.279h-1.975a.327.327 0 0 1-.328-.369l.77-5.341a.457.457 0 0 0-.461-.516h-1.16a.327.327 0 0 1-.329-.369l.495-3.432a.457.457 0 0 0-.46-.517H.642a.327.327 0 0 1-.328-.369l.224-1.558a.33.33 0 0 1 .329-.279h4.817a.46.46 0 0 0 .46-.39l.187-1.301a.33.33 0 0 1 .329-.28h3.784c.761 0 1.406-.546 1.512-1.281l.969-6.72a.33.33 0 0 1 .328-.278h1.976c.201 0 .356.174.328.369z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'DecartMono';

export default Icon;
