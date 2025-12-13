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
      viewBox="0 0 28 28"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <g fill="currentColor">
        <path d="M17.055.372H8.527L-.002 8.9v8.528h8.529V8.9h8.528zM10.2 27.628h8.527l8.529-8.528v-8.528h-8.529V19.1H10.2z" />
      </g>
    </svg>
  );
});

export default Icon;
