'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { COLOR_PRIMARY, TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
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
      <g fill={COLOR_PRIMARY} transform="scale(0.133333)">
        <path d="M90 178.2v-34.2c36.2 0 64.3-35.9 50.4-74-5.1-14.1-16.4-25.4-30.5-30.5-38.1-13.8-74 14.2-74 50.4H2c0-57.7 55.8-102.7 116.3-83.8 26.4 8.3 47.5 29.3 55.7 55.7C192.7 122.4 147.8 178.2 90 178.2z" />
        <polygon points="90.1,144.1 56.1,144.1 56.1,110.1 90.1,110.1" />
        <polygon points="56.1,170.3 29.9,170.3 29.9,144.1 56.1,144.1" />
        <path d="M29.9 144.1H8v-21.9h21.9z" />
      </g>
    </svg>
  );
});

export default Icon;
