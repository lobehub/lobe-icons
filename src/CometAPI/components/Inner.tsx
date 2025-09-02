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
      <g transform="rotate(35 12 12)">
        <circle cx="12" cy="12" fill="none" r="6.2" stroke="currentColor" strokeWidth="2.4" />
        <circle cx="13.6" cy="10.6" fill="currentColor" r="2.6" />
      </g>
    </svg>
  );
});

export default Icon;
