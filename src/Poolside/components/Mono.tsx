'use client';

import { memo } from 'react';

import { useFillIds } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  const [a, b, c, d, e] = useFillIds(TITLE, 5);
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <g clipPath={a.fill}>
        <mask
          height="24"
          id={e.id}
          maskUnits="userSpaceOnUse"
          style={{ maskType: 'alpha' }}
          width="24"
          x="0"
          y="0"
        >
          <path d="M24 0H0v24h24V0z" fill={b.fill} />
          <path d="M24 0H0v24h24V0z" fill={c.fill} />
          <path d="M24 0H0v24h24V0z" fill={d.fill} />
        </mask>
        <g mask={e.fill}>
          <path d="M6.742 22.786a11.93 11.93 0 01-5.232-4.963 11.98 11.98 0 01-1.463-6.886.975.975 0 011.943.173c-.178 2.005.246 4 1.226 5.769a9.968 9.968 0 003.526 3.685l4.586-9.405c-1.795-.598-3.29-.338-3.425-.312l-.058.012a.972.972 0 01-1.054-.576c-.24-.448-.96-1.544-1.834-1.97-.873-.426-2.218-.289-2.651-.195a.977.977 0 01-1.087-1.38C4.117.792 11.315-1.686 17.262 1.215c5.946 2.9 8.422 10.093 5.529 16.038l-.01.02c-2.903 5.94-10.095 8.414-16.039 5.514zm6.338-10.773l-4.586 9.405c4.629 1.73 9.896-.192 12.304-4.558-.338-.524-.932-1.275-1.62-1.61-.888-.434-2.19-.292-2.637-.198a.989.989 0 01-.616-.055.984.984 0 01-.49-.473c-.028-.058-.739-1.438-2.355-2.51zM5.81 6.56c.747.365 1.356.944 1.81 1.49 1.406-2.15 3.314-3.774 4.787-4.82a20.81 20.81 0 011.66-1.067A10.078 10.078 0 003.882 6.077c.617.042 1.297.174 1.929.482zm12.671-2.243c.09.624.152 1.294.182 1.965.083 1.801-.021 4.296-.844 6.722.686.018 1.484.14 2.214.495.652.318 1.198.8 1.628 1.28a10.082 10.082 0 00-3.18-10.462zm-5.394 5.46a9.522 9.522 0 012.984 2.287c1.075-3.493.606-7.402.215-8.85-1.381.584-4.75 2.62-6.84 5.618a9.515 9.515 0 013.64.944z" />
        </g>
      </g>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={b.id}
          x1="6.75"
          x2="5.625"
          y1="20.55"
          y2="20.55"
        >
          <stop stopColor="currentColor" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={c.id}
          x1="6.825"
          x2="7.2"
          y1="11.85"
          y2="11.137"
        >
          <stop stopColor="currentColor" stopOpacity="0" />
          <stop offset="1" stopColor="currentColor" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={d.id}
          x1=".975"
          x2=".975"
          y1="20.512"
          y2="10.912"
        >
          <stop stopColor="currentColor" />
          <stop offset=".105" stopColor="currentColor" stopOpacity=".9" />
          <stop offset=".904" stopColor="currentColor" stopOpacity=".04" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
        <clipPath id={a.id}>
          <path d="M0 0h24v24H0z" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
});

export default Icon;
