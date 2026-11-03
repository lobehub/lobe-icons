'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      fill="currentColor"
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M24 12a5.718 5.718 0 1 1-11.437 0A5.718 5.718 0 0 1 24 12M5.718 6.282a5.718 5.718 0 1 0 0 11.436 5.718 5.718 0 0 0 0-11.436M10.31 12a4.591 4.591 0 1 1-9.182 0 4.591 4.591 0 0 1 9.182 0" />
    </svg>
  );
});

export default Icon;
