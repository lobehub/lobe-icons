'use client';

import { memo } from 'react';

import { useFillIds } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  const [a, b, c, d, e] = useFillIds(TITLE, 5);
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
      <path d="M2 5.999L12.392 0v24L2 18V5.999z" fill="#000" />
      <path d="M12.392 24L2 18l10.392-6 10.393 6-10.393 6z" fill={a.fill} />
      <path d="M12.392 24L2 18l10.392-6 10.393 6-10.393 6z" fill={b.fill} />
      <path
        d="M2 5.999L12.392 0v24L2 18V5.999z"
        fill={c.fill}
        style={{
          mixBlendMode: 'screen',
        }}
      />
      <path
        d="M12.392 24L2 18l10.392-6 10.393 6-10.393 6z"
        fill={d.fill}
        style={{
          mixBlendMode: 'overlay',
        }}
      />
      <path
        d="M2 5.999L12.392 0v24L2 18V5.999z"
        fill={e.fill}
        style={{
          mixBlendMode: 'overlay',
        }}
      />
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id={a.id} x1="2" x2="22.785" y1="18" y2="18">
          <stop stopColor="#00A" />
          <stop offset="1" stopColor="#A78DFF" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id={b.id} x1="2" x2="22.785" y1="18" y2="18">
          <stop stopColor="#00A" />
          <stop offset="1" stopColor="#A78DFF" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={c.id}
          x1="13.748"
          x2="4.672"
          y1="22.642"
          y2="3.745"
        >
          <stop stopColor="#004EFF" />
          <stop offset="1" stopColor="#0FF" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id={d.id} x1="2" x2="22.785" y1="18" y2="18">
          <stop stopColor="#00A" />
          <stop offset="1" stopColor="#A78DFF" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={e.id}
          x1="13.748"
          x2="4.672"
          y1="22.642"
          y2="3.745"
        >
          <stop stopColor="#004EFF" />
          <stop offset="1" stopColor="#0FF" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Icon;
