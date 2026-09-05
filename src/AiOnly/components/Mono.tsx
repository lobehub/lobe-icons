'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';
import Logo from './Logo';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      fill="currentColor"
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 40 40"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <Logo mono />
    </svg>
  );
});

export default Icon;
