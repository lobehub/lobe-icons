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
      <path d="M19.049 0h-3.903v2.324c-.94-.468-2-.734-3.122-.734C8.151 1.588 5 4.74 5 8.613c0 1.691.601 3.246 1.602 4.46H5v3.902h3.902v-2.072c.94.468 2 .734 3.122.734a7.032 7.032 0 007.025-7.024c0-1.811-.69-3.464-1.819-4.71h1.819V0zm-7.025 11.735a3.126 3.126 0 01-3.122-3.122 3.126 3.126 0 013.122-3.122 3.126 3.126 0 013.122 3.122c0 1.72-1.4 3.122-3.122 3.122zM12.024 16.976H8.902v3.902h3.122A3.126 3.126 0 0115.146 24h3.903a7.032 7.032 0 00-7.025-7.024z" />
    </svg>
  );
});

export default Icon;
