'use client';

import { memo } from 'react';

import { useFillId } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  const { id, fill } = useFillId(TITLE);
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
        d="M22.012 0h1.032v.927H24v.968h-.956V3.78h-1.032V1.896h-1.878v-.97h1.878V0zM2.6 12.371V1.87h.969v10.502h-.97zm10.423.66h10.95v.918h-6.208v9.579h-4.742V13.03zM5.629 3.333v12.356H0v4.51h10.386V8L20.859 8l-.003-4.668-15.227.001z"
        fill={fill}
        fillRule="evenodd"
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={id}
          x1="1.646"
          x2="18.342"
          y1="1.916"
          y2="22.091"
        >
          <stop stopColor="#01A9FF" />
          <stop offset="1" stopColor="#0160FF" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Icon;
