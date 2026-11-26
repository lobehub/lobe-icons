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
      <path d="M1.4 6.5h5.1a1 1 0 0 1 .707.293L11.414 11h2.47a1.9 1.9 0 0 1 3.253.035A1 1 0 0 1 17.4 11h5.2a1 1 0 0 1 0 2h-5.2a1 1 0 0 1-.263-.035 1.9 1.9 0 0 1-3.253.035h-4.97l-4.207 4.207A1 1 0 0 1 4 17.5H1.4a1 1 0 0 1 0-2h2.186l2.5-2.5H1.4a1 1 0 0 1 0-2h7.186l-2.5-2.5H1.4a1 1 0 0 1 0-2" />
    </svg>
  );
});

export default Icon;
