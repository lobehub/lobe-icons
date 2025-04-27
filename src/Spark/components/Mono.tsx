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
      <path d="M11.615 0l6.237 6.107c2.382 2.338 2.823 3.743 3.161 6.15-1.197-1.732-1.776-2.02-4.504-2.772C12.48 8.374 11.095 5.933 11.615 0z" />
      <path d="M9.32 2.122C4.771 6.367 2 9.182 2 13.08c0 5.76 4.288 9.788 9.745 9.918 5.457.13 9.441-5.284 9.095-8.403-.347-3.118-4.418-3.81-4.418-3.81 1.69 3.16-.13 8.098-4.894 8.098-5.154 0-6.8-6.02-4.2-9.008.82 1.617 1.879 2.563 2.674 3.273.717.64 1.219 1.09 1.136 1.664-.173 1.213-1.385.866-1.385.866.346.607 3.6 1.473 4.59-1.342.613-1.741-.423-2.789-1.714-4.096-1.632-1.651-3.672-3.717-3.31-8.118z" />
    </svg>
  );
});

export default Icon;
