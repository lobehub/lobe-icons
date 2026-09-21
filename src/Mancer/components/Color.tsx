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
      <g fill={COLOR_PRIMARY} transform="scale(0.75)">
        <path d="M17.978 13.7693L26.9933 16.1849L10.916 29.8218L14.0218 18.2307L5.00648 15.815L21.0838 2.17815L17.978 13.7693Z" />
      </g>
    </svg>
  );
});

export default Icon;
