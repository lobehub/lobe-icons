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
      <path d="M4 20a4 4 0 014-4h4v4a4 4 0 01-8 0z" fill="#24CB71" />
      <path d="M12 0v8h4a4 4 0 000-8h-4z" fill="#FF7237" />
      <path d="M15.967 16a4 4 0 100-8 4 4 0 000 8z" fill="#00B6FF" />
      <path d="M4 4a4 4 0 004 4h4V0H8a4 4 0 00-4 4z" fill="#FF3737" />
      <path d="M4 12a4 4 0 004 4h4V8H8a4 4 0 00-4 4z" fill="#874FFF" />
    </svg>
  );
});

export default Icon;
