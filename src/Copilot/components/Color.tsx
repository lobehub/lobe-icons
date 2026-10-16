'use client';

import { memo } from 'react';

import { useFillIds } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  const [b, c, d, e] = useFillIds(TITLE, 4);
  return (
    <svg
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 23"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path
        d="m16.295 4.79-.242.986h-2.32c-1.721 0-3.22 1.197-3.638 2.902l-2.101 8.593H3.798c-2.44 0-4.229-2.342-3.637-4.761l2.106-8.612c.557-2.274 2.556-3.87 4.85-3.87h5.54c2.44 0 4.23 2.343 3.638 4.761"
        fill={b.fill}
      />
      <path
        d="m16.295 4.79-.242.986h-2.32c-1.721 0-3.22 1.197-3.638 2.902l-2.101 8.593H3.798c-2.44 0-4.229-2.342-3.637-4.761l2.106-8.612c.557-2.274 2.556-3.87 4.85-3.87h5.54c2.44 0 4.23 2.343 3.638 4.761"
        fill={c.fill}
      />
      <path
        d="m7.752 18.258.242-.986h2.321c1.72 0 3.22-1.197 3.637-2.903l2.102-8.593h4.196c2.439 0 4.228 2.343 3.637 4.762l-2.107 8.611c-.556 2.274-2.555 3.87-4.85 3.87h-5.54c-2.44 0-4.229-2.342-3.638-4.761"
        fill={d.fill}
      />
      <path
        d="m7.752 18.258.242-.986h2.321c1.72 0 3.22-1.197 3.637-2.903l2.102-8.593h4.196c2.439 0 4.228 2.343 3.637 4.762l-2.107 8.611c-.556 2.274-2.555 3.87-4.85 3.87h-5.54c-2.44 0-4.229-2.342-3.638-4.761"
        fill={e.fill}
      />
      <defs>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="matrix(-9.77133 19.8405 38.9403 15.7727 12.674 .087)"
          gradientUnits="userSpaceOnUse"
          id={b.id}
          r="1"
        >
          <stop offset=".25" stopColor="#109df2" />
          <stop offset=".72" stopColor="#aad445" />
          <stop offset=".97" stopColor="#ffd400" />
        </radialGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="matrix(-9.94414 20.7959 24.6537 12.5336 21.948 4.256)"
          gradientUnits="userSpaceOnUse"
          id={d.id}
          r="1"
        >
          <stop offset=".07" stopColor="#8c48ff" />
          <stop offset=".5" stopColor="#f2598a" />
          <stop offset=".9" stopColor="#ffb152" />
        </radialGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={c.id}
          x1="8.275"
          x2="8.177"
          y1=".034"
          y2="17.276"
        >
          <stop stopColor="#3dcbff" />
          <stop offset=".25" stopColor="#0588f7" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={e.id}
          x1="15.839"
          x2="15.829"
          y1="4.711"
          y2="9.407"
        >
          <stop offset=".06" stopColor="#f8adfa" />
          <stop offset=".71" stopColor="#a86edd" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Icon;
