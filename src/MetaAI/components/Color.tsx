'use client';

import { memo } from 'react';

import { useFillIds } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  const [a, b, c] = useFillIds(TITLE, 3);
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
      <g clipPath={a.fill} filter={b.fill}>
        <path
          clipRule="evenodd"
          d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 3.627a8.373 8.373 0 100 16.746 8.373 8.373 0 000-16.746z"
          fill={c.fill}
          fillRule="evenodd"
        />
      </g>
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id={c.id} x1="24" x2="0" y1="0" y2="24">
          <stop offset=".13" stopColor="#FF97E3" />
          <stop offset=".18" stopColor="#D14FE1" />
          <stop offset=".338" stopColor="#0050E2" />
          <stop offset=".666" stopColor="#0050E2" />
          <stop offset=".809" stopColor="#00DDF4" />
          <stop offset=".858" stopColor="#23F8CC" />
        </linearGradient>
        <clipPath id={a.id}>
          <path d="M0 0h24v24H0z" fill="#fff" />
        </clipPath>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="24"
          id={b.id}
          width="24"
          x="0"
          y="0"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation=".75" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend in2="shape" result="effect1_innerShadow_674_237" />
        </filter>
      </defs>
    </svg>
  );
});

export default Icon;
