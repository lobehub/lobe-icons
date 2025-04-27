'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

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
      <path d="M0 4.973h9.324V23L0 4.973z" fill="#FDB515" />
      <path d="M13.986 4.351L22.378 0l-6.216 23H9.324l4.662-18.649z" fill="#30A2FF" />
    </svg>
  );
});

export default Icon;
