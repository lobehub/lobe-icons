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
      viewBox="0 0 100 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M8 4h4v12l8-8v4L12 20 4 12V8l4 4V4zm16 0h8v2h-6v4h6v2h-6v4h6v2h-8V4zm12 0h8c2.2 0 4 1.8 4 4v8c0 2.2-1.8 4-4 4h-8V4zm2 2v12h6c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-6zm14 0h8v2h-6v4h6v2h-6v4h6v2h-8V4zm12 0h8c2.2 0 4 1.8 4 4 0 1.5-.8 2.8-2 3.5 1.2.7 2 2 2 3.5 0 2.2-1.8 4-4 4h-8V4zm2 2v4h6c1.1 0 2-.9 2-2s-.9-2-2-2h-6zm0 6v4h6c1.1 0 2-.9 2-2s-.9-2-2-2h-6z" />
    </svg>
  );
});

export default Icon;