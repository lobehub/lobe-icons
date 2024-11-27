'use client';

import { forwardRef } from 'react';

import { useFillId } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  const { fill, id } = useFillId(TITLE);
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
      <path
        clipRule="evenodd"
        d="M2.371 0C1.614 0 1 .614 1 1.371v18.522c0 .758.614 1.372 1.371 1.372h2.397l7.21 2.691a.686.686 0 00.926-.642V7.756c0-.572-.355-1.084-.891-1.284L4.768 3.765h13.72v17.5h2.398c.757 0 1.371-.614 1.371-1.372V1.371C22.257.614 21.643 0 20.886 0H2.37zm8.612 16.183c.31.15.562-.037.562-.42 0-.385-.251-.818-.562-.968-.31-.152-.561.037-.561.42s.251.816.561.968z"
        fill={fill}
        fillRule="evenodd"
      />
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id={id} x1="0" x2="24.5" y1="0" y2="24">
          <stop stopColor="#2622FF" />
          <stop offset="1" stopColor="#A717FF" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Icon;
