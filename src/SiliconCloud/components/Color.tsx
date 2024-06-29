import { forwardRef } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="-0.5 0 28 28"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path
        clipRule="evenodd"
        d="M0 5.887v16.226a5.408 5.408 0 005.408 5.408h16.226a5.408 5.408 0 005.408-5.408V5.887A5.408 5.408 0 0021.634.48H5.408A5.408 5.408 0 000 5.887zm21.709-3.53h-1.69c-5.409 0-8.526 3.455-8.526 8.75v.909a6.948 6.948 0 104.893 5.289h5.323a2.545 2.545 0 000-5.09h-5.296v-1.332c0-2.029 1.465-3.493 3.606-3.493h1.69a2.517 2.517 0 000-5.033zM11.643 18.695a2.066 2.066 0 10-4.131 0 2.066 2.066 0 004.131 0z"
        fill="#7C3AED"
        fillRule="evenodd"
      ></path>
    </svg>
  );
});

export default Icon;
