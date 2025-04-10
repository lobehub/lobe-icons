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
      <path d="M22 21.376h-4.89V2.62H22v18.756zM14.532 21.376h-3.469V2.62h3.469v18.756zM8.764 21.376h-2.66V2.62h2.66v18.756zM3.903 21.376H2V2.62h1.903v18.756z" />
    </svg>
  );
});

export default Icon;
