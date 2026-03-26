'use client';

import { memo } from 'react';

import { useFillIds } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  const [a, b, c, d] = useFillIds(TITLE, 4);
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

      <g opacity=".45">
        <path d="M3.474 24l3.943-8.21H9.34L3.474 24z" fill={a.fill} />
        <path d="M24 24h-4.895l-3.882-8.362 1.356-3.164H9.01L15 0l9 24z" fill={b.fill} />
      </g>
      <path d="M15.743 12.474H7.737l-1.263 3.315L0 24 10.737 0l5.006 12.474z" fill={c.fill} />
      <path d="M16.146 13.48L20.369 24h-5.21l-3.473-8.21h3.473l.989-2.31z" fill={d.fill} />
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id={a.id} x1="12" x2="12" y1="0" y2="24">
          <stop stopColor="#14B8A6" />
          <stop offset=".5" stopColor="#0D7D72" />
          <stop offset="1" stopColor="#044F47" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id={b.id} x1="12" x2="12" y1="0" y2="24">
          <stop stopColor="#14B8A6" />
          <stop offset=".5" stopColor="#0D7D72" />
          <stop offset="1" stopColor="#044F47" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id={c.id} x1="0" x2="0" y1="0" y2="24">
          <stop stopColor="#5EEAD4" />
          <stop offset=".25" stopColor="#2DD4BF" />
          <stop offset=".65" stopColor="#0D9488" />
          <stop offset="1" stopColor="#0A7A6F" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id={d.id} x1="0" x2="0" y1="0" y2="24">
          <stop stopColor="#5EEAD4" />
          <stop offset=".25" stopColor="#2DD4BF" />
          <stop offset=".65" stopColor="#0D9488" />
          <stop offset="1" stopColor="#0A7A6F" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Icon;
