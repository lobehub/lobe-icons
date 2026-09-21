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
      <path d="M0 12c0 6.617 5.395 12 12.026 12H24V0H12.026C5.395 0 0 5.383 0 12m3.518 0c0-4.81 3.861-8.726 8.608-8.726S20.733 7.189 20.733 12c0 4.81-3.861 8.726-8.607 8.726-4.747 0-8.608-3.915-8.608-8.726" />
    </svg>
  );
});

export default Icon;
