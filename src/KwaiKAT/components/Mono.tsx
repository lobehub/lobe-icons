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
      <path d="M20.42 19.311h3.418V1l-6.781 4.177-6.778-4.111.026 7.868h3.418l-.026-2.222 3.42 2.035 3.303-2.035v12.6z" />
      <path d="M3.064 10.734c2.784-2.07 6.942-2.394 9.941.907l.01.01.01.013 9.16 12.24h-3.84l-7.69-10.217c-1.63-1.737-3.891-1.689-5.515-.638-1.624 1.05-2.563 3.073-1.548 5.28 1.494 3.246 6.152 3.275 7.725.108l.032-.064 2.02 2.629c-2.98 3.968-9.329 3.926-12.165-.552-2.395-3.78-.926-7.645 1.86-9.716z" />
    </svg>
  );
});

export default Icon;
