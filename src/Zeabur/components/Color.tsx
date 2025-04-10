'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <g>
        <path d="M9.325 15.022h14.672V22H0v-6.978h6.746l9.29-5.044H0V3h23.997v6.978z" />
        <path d="M.001 3h15.954v6.978H.001z" fill="#6300FF" />
        <path d="M9.4 15.022H24V22H9.4z" fill="#F40" />
      </g>
    </svg>
  );
});

export default Icon;
