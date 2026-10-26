'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      fill="currentColor"
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M12 .494C13.513 6.567 17.902 10.679 24 12c-6.098 1.321-10.487 5.433-12 11.506C10.487 17.433 6.098 13.321 0 12 6.098 10.679 10.487 6.567 12 .494" />
    </svg>
  );
});

export default Icon;
