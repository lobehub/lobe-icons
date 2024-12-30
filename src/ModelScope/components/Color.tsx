'use client';

import { forwardRef } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 192.02999877929688 104.04000091552734"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <g fill="none" fillRule="evenodd">
        <path
          d="M0 63.016h21.997V41.022H0zM85.017 85.009h21.993V63.015H85.017zM151.01 63.015v21.994h-22v19.031h41.03V63.015z"
          fill="#624AFF"
        />
        <path d="M107.01 63.016h22V41.022h-22zM0 41.021h21.997V19.027H0z" fill="#36CED0" />
        <path d="M170.04 63.015h21.99V41.021h-21.99z" fill="#624AFF" />
        <path d="M170.04 41.021h21.99V19.026h-21.99z" fill="#36CED0" />
        <path d="M129.01 0v19.027h22V41.02h19.03V0z" fill="#624AFF" />
        <path d="M63.021 63.015h21.996V41.021H63.021z" fill="#36CED0" />
        <path
          d="M21.997 0v41.02h19.029V19.027h21.995V0zM21.997 63.015v41.025h41.024V85.009H41.026V63.015z"
          fill="#624AFF"
        />
      </g>
    </svg>
  );
});

export default Icon;
