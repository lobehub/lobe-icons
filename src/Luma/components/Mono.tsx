'use client';

import { forwardRef } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M12.393 24L2 17.998l10.393-6 10.392 6-10.393 6z" fillOpacity=".66" />
      <path d="M2 5.999L12.393 0v24L2 18V5.999z" fillOpacity=".66" />
    </svg>
  );
});

export default Icon;
