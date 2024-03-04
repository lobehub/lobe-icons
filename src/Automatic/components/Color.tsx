import { forwardRef } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <g fill="#E00054" fillRule="nonzero">
        <path d="M8.462 3.5h2.924l8.33 17h-1.46L10.617 4.942l-1.442.001z" opacity=".8"></path>
        <path d="M5.474 20.5l2.817-5.366 2.873 5.366h5.541l-8.362-17L0 20.5z"></path>
        <path d="M12.768 3.501L21.113 20.5h1.46L14.238 3.504z" opacity=".4"></path>
        <path d="M14.195 3.501L22.54 20.5H24L15.666 3.504z" opacity=".2"></path>
        <path d="M11.34 3.501L19.683 20.5h1.464L12.81 3.504z" opacity=".6"></path>
      </g>
    </svg>
  );
});

export default Icon;
