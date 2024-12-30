'use client';

import { forwardRef } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M8 5.3H2.667v2.667H0V13.3h2.667v5.333H8v-2.666H5.333V13.3H2.667v-2.667h2.666V7.967H8V5.3zM8 10.633h2.667V13.3H8v-2.667zM13.333 13.3v2.667h-2.666V13.3h2.666zM13.333 13.3v-2.667H16V13.3h-2.667zM21.333 7.967H24V13.3h-2.667v-2.667h-2.666V7.967H16V5.3h5.333v2.667zM21.333 13.3v5.333H16v-2.666h2.667V13.3h2.666z" />
    </svg>
  );
});

export default Icon;
