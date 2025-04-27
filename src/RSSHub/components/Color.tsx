'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <rect fill="#FFD6A6" height="22" rx="7" width="22" x="1" y="1" />
      <path
        d="M1.13 6.646C1.046 7.084 1 7.536 1 8v8a7 7 0 007 7h8a7.04 7.04 0 001.354-.13A12.154 12.154 0 0018.5 17.7c0-6.738-5.462-12.2-12.2-12.2-1.848 0-3.6.41-5.17 1.146z"
        fill="#FF8549"
      />
      <circle cx="6.25" cy="17.75" fill="#FF2900" r="4.55" />
    </svg>
  );
});

export default Icon;
