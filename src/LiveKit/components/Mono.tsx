'use client';

import { forwardRef } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M14 10h-4v4h4v-4zM18 6h-4v4.001h4v-4zM18 14h-4v4h4v-4zM22 2h-4v4h4V2zM22 18h-4v4h4v-4z" />
      <path d="M6 18V2H2v20h12v-4H6z" />
    </svg>
  );
});

export default Icon;
