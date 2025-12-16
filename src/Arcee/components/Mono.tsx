'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      fill="none"
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 37 32"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path
        d="M20.406 3.665L4.241 31.593H0L18.288 0L20.406 3.665ZM25.884 13.155L11.075 31.592H6.367L23.913 9.745L25.884 13.155ZM36.535 31.592H21.661L34.619 28.277L36.535 31.592ZM31.263 22.464L19.17 31.59H13.076L29.413 19.262L31.263 22.464Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Icon;
