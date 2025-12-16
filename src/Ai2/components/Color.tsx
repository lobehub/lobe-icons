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
      viewBox="0 0 206 205"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path
        d="M82 80H41V41h33c4.4 0 8-3.6 8-8V0h39v41c0 21.6-17.5 39-39 39m-41 4H0v39h33c4.4 0 8 3.6 8 8v33h39v-41c0-21.6-17.5-39-39-39m131.1-2c-4.4 0-8-3.6-8-8V41h-39v41c0 21.6 17.5 39 39 39h41V82zM84 164v41h39v-33c0-4.4 3.6-8 8-8h33v-39h-41c-21.6 0-39 17.5-39 39"
        fill="#f0529c"
      />
    </svg>
  );
});

export default Icon;
