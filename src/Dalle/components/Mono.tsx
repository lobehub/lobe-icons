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
        <path d="M0 10h4.8v5H0z" opacity=".08" />
        <path d="M4.8 10h4.8v5H4.8z" opacity=".2" />
        <path d="M9.6 10h4.8v5H9.6z" opacity=".3" />
        <path d="M14.4 10h4.8v5h-4.8z" opacity=".5" />
        <path d="M19.2 10H24v5h-4.8z" opacity=".6" />
      </g>
    </svg>
  );
});

export default Icon;
