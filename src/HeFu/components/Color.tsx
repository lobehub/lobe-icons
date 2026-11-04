'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { COLOR_ACCENT, COLOR_PRIMARY, TITLE } from '../style';

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
      <path
        d="M2.8 3.6h3.2v16.8H2.8Z M6 10.4h6v3.2H6Z M12 3.6h3.2v16.8H12Z M15.2 11.3h2.6v1.4h-2.6Z M19.3 5.6h1.4v12.8h-1.4Z"
        fill={COLOR_PRIMARY}
      />
      <path
        d="M17.9 5.6a2.1 2.1 0 1 0 4.2 0a2.1 2.1 0 1 0-4.2 0Z M17.9 12a2.1 2.1 0 1 0 4.2 0a2.1 2.1 0 1 0-4.2 0Z M17.9 18.4a2.1 2.1 0 1 0 4.2 0a2.1 2.1 0 1 0-4.2 0Z"
        fill={COLOR_ACCENT}
      />
    </svg>
  );
});

export default Icon;
