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
      <path d="M9.377 10.47l-.018 6.023 3.374.025-.01 1.523-4.891-.034.022-7.541 1.523.004z" />
      <path
        clipRule="evenodd"
        d="M15.365 5.778a3.794 3.794 0 010 7.585 3.794 3.794 0 010-7.585zm0 1.447A2.35 2.35 0 0013.02 9.57a2.349 2.349 0 002.346 2.346 2.348 2.348 0 002.346-2.346 2.349 2.349 0 00-2.346-2.346z"
      />
      <path d="M6.043 11.966l-3.508.004-.002-1.524 3.508-.004.002 1.524z" />
    </svg>
  );
});

export default Icon;
