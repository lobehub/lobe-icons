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
        d="M14.207 4H9.793c0 5.282-4.393 9.58-9.793 9.58v4.316a14.33 14.33 0 0 0 9.794-3.839V21h4.413c0-5.282 4.393-9.58 9.793-9.58V7.105a14.32 14.32 0 0 0-9.793 3.841z"
        fill="#04d98b"
       />
    </svg>
  );
});

export default Icon;
