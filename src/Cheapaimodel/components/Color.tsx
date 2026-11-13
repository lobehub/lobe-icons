'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { COLOR_PRIMARY, TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      fill={COLOR_PRIMARY}
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M2.4 23.2L7.2 21.6V9.6Q7.2 7.2 4.8 8Q2.4 8.8 2.4 11.2ZM9.6 20.8L14.4 19.2V2.4Q14.4 0 12 0.8Q9.6 1.6 9.6 4ZM16.8 18.4L21.6 16.8V4.8Q21.6 2.4 19.2 3.2Q16.8 4 16.8 6.4Z" />
    </svg>
  );
});

export default Icon;
