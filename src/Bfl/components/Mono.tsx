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
      <path d="M17.113 10.248H14.56l-2.553-3.616-7.963 11.27h2.558l5.405-7.654h2.552l-5.404 7.653h2.565l5.392-7.653L24 20 19.97 20v-2.091l-2.857-4.044-2.842 4.037V20H0L12.008 3l5.105 7.249z" />
    </svg>
  );
});

export default Icon;
