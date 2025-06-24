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
      <path
        d="M21.596 2H2.404A.404.404 0 002 2.404v19.192c0 .223.18.404.404.404h19.192c.223 0 .404-.18.404-.404V2.404A.404.404 0 0021.596 2z"
        fill="#FF4A36"
      />
      <path d="M18.366 16.15H11.9v2.214h6.465v-2.215z" fill="#fff" />
    </svg>
  );
});

export default Icon;
