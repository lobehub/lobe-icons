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
        d="M11.332 24H.955A.952.952 0 010 23.05h11.341a11.107 11.107 0 009.638-5.479c2-3.409 2.02-7.62.054-11.05a11.107 11.107 0 00-9.584-5.57H0C0 .425.427 0 .955 0h10.494a12.09 12.09 0 018.53 3.53 11.984 11.984 0 013.522 8.503C23.483 18.669 17.992 24 11.331 24z"
        fill={color}
      />
      <Path
        d="M0 21.44h7.363a3.658 3.658 0 002.463-.941H0v.941zm0-2.56h11.295c.228-.306.44-.613.637-.953H0v.953zm0-2.563h12.739a9.33 9.33 0 00.339-.95H0v.95zm0-2.56h13.447c.047-.306.084-.632.105-.95H0v.95zm0-2.56h13.549c-.022-.322-.058-.64-.105-.954H0v.954zm0-2.563h13.078c-.099-.322-.213-.64-.339-.95H0v.95zm0-2.56h11.932a11.06 11.06 0 00-.637-.95H0v.95zM0 2.56v.954h9.835a3.652 3.652 0 00-2.463-.941L0 2.56z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'DocSearchMono';

export default Icon;
