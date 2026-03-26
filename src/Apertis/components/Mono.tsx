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
      <path d="M11.4 4.5L17.2 19.5H14.1L12 14.5H8.9L5.1 19.5H2L11.4 4.5ZM9.5 12.5L10.2 10.8H14L13.2 12.5H9.5Z" />
      <path d="M13.8 5.5L14.8 4.5L22 19.5H19.5L13.8 5.5Z" />
    </svg>
  );
});

export default Icon;
