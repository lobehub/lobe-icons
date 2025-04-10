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
        <path
          d="M17.385 11.23a4.615 4.615 0 100-9.23 4.615 4.615 0 000 9.23zm0 10.77a4.615 4.615 0 100-9.23 4.615 4.615 0 000 9.23zm-10.77 0a4.615 4.615 0 100-9.23 4.615 4.615 0 000 9.23z"
          opacity=".2"
        />
        <circle cx="6.615" cy="6.615" r="4.615" />
      </g>
    </svg>
  );
});

export default Icon;
