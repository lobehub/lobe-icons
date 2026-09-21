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
      <path d="M0 16.8h4.8V24H0zm19.2-12H24V12h-4.8zM4.8 12h14.4v4.8H4.8zM0 0h19.2v4.8H4.8V12L0 11.94z" />
    </svg>
  );
});

export default Icon;
