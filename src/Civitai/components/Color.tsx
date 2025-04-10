'use client';

import { memo } from 'react';

import { useFillIds } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  const [a, b] = useFillIds(TITLE, 2);
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
      <path d="M12 0l10.392 6v12L12 24 1.608 18V6L12 0z" fill={a.fill} />
      <path d="M12 3.934l6.985 4.033v8.066L12 20.065l-6.985-4.032V7.967L12 3.934z" fill={b.fill} />
      <path
        d="M12 6.885l4.43 2.558v1.377h-2.386L12 9.64l-2.044 1.18v2.36L12 14.36l2.044-1.18h2.386v1.377L12 17.115l-4.43-2.558V9.443L12 6.885z"
        fill="#fff"
        fillRule="evenodd"
      />
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id={a.id} x1="12" x2="12" y1="0" y2="24">
          <stop stopColor="#1281F4" />
          <stop offset="1" stopColor="#0821C6" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={b.id}
          x1="12"
          x2="12"
          y1="3.934"
          y2="20.066"
        >
          <stop stopColor="#09138A" />
          <stop offset="1" stopColor="#150740" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Icon;
