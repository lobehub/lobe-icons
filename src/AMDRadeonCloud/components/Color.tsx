'use client';

import { memo } from 'react';

import { useFillId } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  const { fill, id } = useFillId(TITLE);
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
      <g clipPath={fill}>
        <path
          clipRule="evenodd"
          d="m.197 0 6.538 6.539h10.719v10.717L24 23.795V0zm6.53 7.85L0 14.57V24h9.419l6.726-6.736H6.727z"
          fill="#ed1c24"
          fillRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id={id}>
          <path d="M0 0h24v24H0z" fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
});

export default Icon;
