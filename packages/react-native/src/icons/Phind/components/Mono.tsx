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
        d="M3.723 4.542V24H7.37v-7.893s.007 0 .007.007V15.6c1.249 1.201 2.818 2.034 4.555 2.319.418.062.844.097 1.276.097 4.325-.125 8.07-3.332 8.699-7.733a8.916 8.916 0 00-1.723-6.678A9.017 9.017 0 0014.228.092a9.023 9.023 0 00-6.71 1.715c-.238.173-.46.36-.677.555L4.288.321 2 3.153l1.723 1.389zM13 3.306a5.69 5.69 0 015.392 3.853 5.655 5.655 0 01-3.9 7.275 5.57 5.57 0 01-1.492.194c-.976 0-1.89-.243-2.692-.673a5.519 5.519 0 01-1.863-1.59 5.462 5.462 0 01-1.067-2.568 5.355 5.355 0 01-.063-.826c0-3.131 2.546-5.665 5.685-5.665z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'PhindMono';

export default Icon;
