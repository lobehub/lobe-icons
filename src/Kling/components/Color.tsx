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

      <path
        d="M5.412 13.775A23.193 23.193 0 017.41 9.32c3.17-5.492 7.795-8.757 10.33-7.294C12.038-1.266 4.598.944 1.122 6.964A13.378 13.378 0 00.085 9.22c-.259.739.092 1.534.77 1.926l4.557 2.63z"
        fill={a.fill}
      />
      <path
        d="M18.588 10.164a23.188 23.188 0 01-1.999 4.455c-3.17 5.492-7.795 8.758-10.33 7.294 5.703 3.293 13.143 1.082 16.619-4.938a13.392 13.392 0 001.037-2.255c.259-.738-.092-1.534-.77-1.925l-4.557-2.63z"
        fill={b.fill}
      />
      <path
        d="M16.59 14.62c3.17-5.492 3.686-11.13 1.15-12.594C15.207.563 10.582 3.83 7.41 9.32c2.074-3.59 5.809-5.315 8.344-3.852 2.534 1.464 2.908 5.56.835 9.151z"
        fill={c.fill}
      />
      <path
        d="M7.41 9.32c-3.17 5.492-3.686 11.13-1.15 12.593 2.534 1.464 7.159-1.802 10.33-7.294-2.074 3.591-5.809 5.316-8.344 3.852-2.534-1.463-2.908-5.56-.835-9.15z"
        fill={d.fill}
      />

      <defs>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="matrix(7.47772 -12.51022 17.14368 10.24728 5.173 13.637)"
          gradientUnits="userSpaceOnUse"
          id={a.id}
          r="1"
        >
          <stop offset=".095" stopColor="#FFF959" />
          <stop offset=".326" stopColor="#0DF35E" />
          <stop offset=".64" stopColor="#0BF2F9" />
          <stop offset="1" stopColor="#04A6F0" />
        </radialGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="rotate(120.868 6.491 10.491) scale(14.5747 19.9728)"
          gradientUnits="userSpaceOnUse"
          id={b.id}
          r="1"
        >
          <stop offset=".095" stopColor="#FFF959" />
          <stop offset=".326" stopColor="#0DF35E" />
          <stop offset=".64" stopColor="#0BF2F9" />
          <stop offset="1" stopColor="#04A6F0" />
        </radialGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={c.id}
          x1="15.578"
          x2="18.062"
          y1="1.798"
          y2="9.861"
        >
          <stop stopColor="#003EFF" />
          <stop offset="1" stopColor="#0BFFE7" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={d.id}
          x1="8.422"
          x2="5.938"
          y1="22.142"
          y2="14.079"
        >
          <stop stopColor="#003EFF" />
          <stop offset="1" stopColor="#0BFFE7" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Icon;
