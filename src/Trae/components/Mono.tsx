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
      <path d="M21.596 2c.223 0 .404.181.404.404v19.192a.405.405 0 01-.404.404H2.404A.405.405 0 012 21.596V2.404C2 2.181 2.181 2 2.404 2h19.192zM11.9 18.363h6.465V16.15h-6.465v2.214z" />
    </svg>
  );
});

export default Icon;
