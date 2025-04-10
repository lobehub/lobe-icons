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
      <path d="M12 0L4.583 6.583c-3.23 2.869-3.23 7.965 0 10.834L12 24l7.417-6.583c3.23-2.869 3.23-7.965 0-10.834L12 0z" />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="a"
          x1="18.919"
          x2="4.853"
          y1="5.595"
          y2="18.301"
        >
          <stop stopColor="#F4BF45" />
          <stop offset=".35" stopColor="#E48047" />
          <stop offset=".69" stopColor="#C73361" />
          <stop offset="1" stopColor="#A42F5F" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Icon;
