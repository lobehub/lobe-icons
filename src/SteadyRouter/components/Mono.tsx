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
      viewBox="0 0 64 64"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path
        d="M43.8 20C43.8 15.5 38.5 12.5 32 12.5C25 12.5 20.5 16 20.5 21.5C20.5 27 25.5 29.3 32 30.8C39.5 32.5 45 35.5 45 41.5C45 47.5 39.5 51.5 32 51.5C25.3 51.5 20.2 48.5 20.2 44"
        stroke="currentColor"
        strokeWidth={10}
      />
    </svg>
  );
});

export default Icon;
