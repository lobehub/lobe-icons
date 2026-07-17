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
      <g transform="scale(0.347826)">
        <g fill="#1a1a1a">
          <circle cx="3" cy="3" opacity={0.7} r="3" />
          <circle cx="12" cy="3" opacity={0.85} r="3" />
          <circle cx="21" cy="3" opacity={0.85} r="3" />
          <circle cx="30" cy="3" opacity={0.85} r="3" />
          <circle cx="39" cy="3" opacity={0.85} r="3" />
          <circle cx="48" cy="3" opacity={0.85} r="3" />
          <circle cx="57" cy="3" opacity={0.85} r="3" />
          <circle cx="66" cy="3" opacity={0.85} r="3" />
          <circle cx="3" cy="12" opacity={0.85} r="3" />
          <circle cx="12" cy="12" opacity={0.85} r="3" />
          <circle cx="66" cy="12" opacity={0.85} r="3" />
          <circle cx="3" cy="21" opacity={0.85} r="3" />
          <circle cx="30" cy="21" opacity={0.85} r="3" />
          <circle cx="39" cy="21" opacity={0.85} r="3" />
          <circle cx="66" cy="21" opacity={0.85} r="3" />
          <circle cx="3" cy="30" opacity={0.85} r="3" />
          <circle cx="21" cy="30" opacity={0.85} r="3" />
          <circle cx="30" cy="30" opacity={0.85} r="3" />
          <circle cx="39" cy="30" opacity={0.85} r="3" />
          <circle cx="48" cy="30" opacity={0.85} r="3" />
          <circle cx="66" cy="30" opacity={0.85} r="3" />
          <circle cx="3" cy="39" opacity={0.85} r="3" />
          <circle cx="21" cy="39" opacity={0.85} r="3" />
          <circle cx="30" cy="39" opacity={0.85} r="3" />
          <circle cx="39" cy="39" opacity={0.85} r="3" />
          <circle cx="48" cy="39" opacity={0.85} r="3" />
          <circle cx="66" cy="39" opacity={0.85} r="3" />
          <circle cx="3" cy="48" opacity={0.85} r="3" />
          <circle cx="30" cy="48" opacity={0.85} r="3" />
          <circle cx="39" cy="48" opacity={0.85} r="3" />
          <circle cx="66" cy="48" opacity={0.85} r="3" />
          <circle cx="3" cy="57" opacity={0.85} r="3" />
          <circle cx="12" cy="57" opacity={0.85} r="3" />
          <circle cx="66" cy="57" opacity={0.85} r="3" />
          <circle cx="3" cy="66" opacity={0.7} r="3" />
          <circle cx="12" cy="66" opacity={0.85} r="3" />
          <circle cx="21" cy="66" opacity={0.85} r="3" />
          <circle cx="30" cy="66" opacity={0.85} r="3" />
          <circle cx="39" cy="66" opacity={0.85} r="3" />
          <circle cx="48" cy="66" opacity={0.85} r="3" />
          <circle cx="57" cy="66" opacity={0.85} r="3" />
          <circle cx="66" cy="66" opacity={0.85} r="3" />
        </g>
        <g fill="#e2e2e2">
          <circle cx="21" cy="12" r="3" />
          <circle cx="30" cy="12" r="3" />
          <circle cx="39" cy="12" r="3" />
          <circle cx="48" cy="12" r="3" />
          <circle cx="57" cy="12" r="3" />
          <circle cx="12" cy="21" r="3" />
          <circle cx="21" cy="21" r="3" />
          <circle cx="48" cy="21" r="3" />
          <circle cx="57" cy="21" r="3" />
          <circle cx="12" cy="30" r="3" />
          <circle cx="57" cy="30" r="3" />
          <circle cx="12" cy="39" r="3" />
          <circle cx="57" cy="39" r="3" />
          <circle cx="12" cy="48" r="3" />
          <circle cx="21" cy="48" r="3" />
          <circle cx="48" cy="48" r="3" />
          <circle cx="57" cy="48" r="3" />
          <circle cx="21" cy="57" r="3" />
          <circle cx="30" cy="57" r="3" />
          <circle cx="39" cy="57" r="3" />
          <circle cx="48" cy="57" r="3" />
          <circle cx="57" cy="57" r="3" />
        </g>
      </g>
    </svg>
  );
});

export default Icon;
