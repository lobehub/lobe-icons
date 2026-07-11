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
      <path d="M18.78 4.17a.55.55 0 00-1.06 0l-.2.68a2.1 2.1 0 01-1.41 1.41l-.68.2a.55.55 0 000 1.06l.68.2a2.1 2.1 0 011.41 1.41l.2.68a.55.55 0 001.06 0l.2-.68a2.1 2.1 0 011.41-1.41l.68-.2a.55.55 0 000-1.06l-.68-.2a2.1 2.1 0 01-1.41-1.41l-.2-.68z" />
      <path
        d="M8.42 8.1h7.22a3.04 3.04 0 013.04 3.04v4.38a3.04 3.04 0 01-3.04 3.04H8.42a3.04 3.04 0 01-3.04-3.04v-4.38A3.04 3.04 0 018.42 8.1zm0 1.9c-.63 0-1.14.51-1.14 1.14v4.38c0 .63.51 1.14 1.14 1.14h7.22c.63 0 1.14-.51 1.14-1.14v-4.38c0-.63-.51-1.14-1.14-1.14H8.42z"
        clipRule="evenodd"
      />
      <path d="M10.18 12.19a1.27 1.27 0 100 2.54 1.27 1.27 0 000-2.54zm4.13 0a1.27 1.27 0 100 2.54 1.27 1.27 0 000-2.54z" />
    </svg>
  );
});

export default Icon;
