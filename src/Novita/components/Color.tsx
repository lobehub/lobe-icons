'use client';

import { forwardRef } from 'react';

import type { IconType } from '@/types';

import { COLOR_PRIMARY, TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 47 47"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path
        clipRule="evenodd"
        d="M17.9526 9V20.0949L0 38.0474H17.9526V26.952L29.0486 38.0474H47L17.9526 9Z"
        fill={COLOR_PRIMARY}
        fillRule="evenodd"
      />
    </svg>
  );
});

export default Icon;
