'use client';

import { memo } from 'react';

import { useFillIds } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  const [a, b, c, d, e, f] = useFillIds(TITLE, 6);
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
      <defs>
        <radialGradient
          cx="85.44%"
          cy="100.653%"
          fx="85.44%"
          fy="100.653%"
          gradientTransform="scale(-.8553 -1) rotate(50.927 2.041 -1.946)"
          id={a.id}
          r="105.116%"
        >
          <stop offset="9.6%" stopColor="#00AEFF" />
          <stop offset="77.3%" stopColor="#2253CE" />
          <stop offset="100%" stopColor="#0736C4" />
        </radialGradient>
        <radialGradient
          cx="18.143%"
          cy="32.928%"
          fx="18.143%"
          fy="32.928%"
          gradientTransform="scale(.8897 1) rotate(52.069 .193 .352)"
          id={b.id}
          r="95.612%"
        >
          <stop offset="0%" stopColor="#FFB657" />
          <stop offset="63.4%" stopColor="#FF5F3D" />
          <stop offset="92.3%" stopColor="#C02B3C" />
        </radialGradient>
        <radialGradient
          cx="82.987%"
          cy="-9.792%"
          fx="82.987%"
          fy="-9.792%"
          gradientTransform="scale(-1 -.9441) rotate(-70.872 .142 1.17)"
          id={e.id}
          r="140.622%"
        >
          <stop offset="6.6%" stopColor="#8C48FF" />
          <stop offset="50%" stopColor="#F2598A" />
          <stop offset="89.6%" stopColor="#FFB152" />
        </radialGradient>
        <linearGradient id={c.id} x1="39.465%" x2="46.884%" y1="12.117%" y2="103.774%">
          <stop offset="15.6%" stopColor="#0D91E1" />
          <stop offset="48.7%" stopColor="#52B471" />
          <stop offset="65.2%" stopColor="#98BD42" />
          <stop offset="93.7%" stopColor="#FFC800" />
        </linearGradient>
        <linearGradient id={d.id} x1="45.949%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#3DCBFF" />
          <stop offset="24.7%" stopColor="#0588F7" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={f.id} x1="83.507%" x2="83.453%" y1="-6.106%" y2="21.131%">
          <stop offset="5.8%" stopColor="#F8ADFA" />
          <stop offset="70.8%" stopColor="#A86EDD" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="nonzero">
        <path
          d="M17.533 1.829A2.528 2.528 0 0015.11 0h-.737a2.531 2.531 0 00-2.484 2.087l-1.263 6.937.314-1.08a2.528 2.528 0 012.424-1.833h4.284l1.797.706 1.731-.706h-.505a2.528 2.528 0 01-2.423-1.829l-.715-2.453z"
          fill={a.fill}
          transform="translate(0 1)"
        />
        <path
          d="M6.726 20.16A2.528 2.528 0 009.152 22h1.566c1.37 0 2.49-1.1 2.525-2.48l.17-6.69-.357 1.228a2.528 2.528 0 01-2.423 1.83h-4.32l-1.54-.842-1.667.843h.497c1.124 0 2.113.75 2.426 1.84l.697 2.432z"
          fill={b.fill}
          transform="translate(0 1)"
        />
        <path
          d="M15 0H6.252c-2.5 0-4 3.331-5 6.662-1.184 3.947-2.734 9.225 1.75 9.225H6.78c1.13 0 2.12-.753 2.43-1.847.657-2.317 1.809-6.359 2.713-9.436.46-1.563.842-2.906 1.43-3.742A1.97 1.97 0 0115 0"
          fill={c.fill}
          transform="translate(0 1)"
        />
        <path
          d="M15 0H6.252c-2.5 0-4 3.331-5 6.662-1.184 3.947-2.734 9.225 1.75 9.225H6.78c1.13 0 2.12-.753 2.43-1.847.657-2.317 1.809-6.359 2.713-9.436.46-1.563.842-2.906 1.43-3.742A1.97 1.97 0 0115 0"
          fill={d.fill}
          transform="translate(0 1)"
        />
        <path
          d="M9 22h8.749c2.5 0 4-3.332 5-6.663 1.184-3.948 2.734-9.227-1.75-9.227H17.22c-1.129 0-2.12.754-2.43 1.848a1149.2 1149.2 0 01-2.713 9.437c-.46 1.564-.842 2.907-1.43 3.743A1.97 1.97 0 019 22"
          fill={e.fill}
          transform="translate(0 1)"
        />
        <path
          d="M9 22h8.749c2.5 0 4-3.332 5-6.663 1.184-3.948 2.734-9.227-1.75-9.227H17.22c-1.129 0-2.12.754-2.43 1.848a1149.2 1149.2 0 01-2.713 9.437c-.46 1.564-.842 2.907-1.43 3.743A1.97 1.97 0 019 22"
          fill={f.fill}
          transform="translate(0 1)"
        />
      </g>
    </svg>
  );
});

export default Icon;
