'use client';

import { memo } from 'react';

import { useFillIds } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  const [a] = useFillIds(TITLE, 1);
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
      <path d="M23 23H1V7.783h6.783v8.434h8.434V7.783H7.783L1 1h22z" fill={a.fill} />
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id={a.id} x1="1" x2="23" y1="23" y2="1">
          <stop stopColor="#F0C64E" />
          <stop offset=".5" stopColor="#E6AC23" />
          <stop offset="1" stopColor="#D98E04" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Icon;
