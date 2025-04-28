'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 97 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M15.49 2H2v4.616h11.597a1.539 1.539 0 010 3.076H2v4.616h11.597a1.54 1.54 0 010 3.076H2V22h13.49a6.151 6.151 0 004.802-10A6.154 6.154 0 0015.49 2zM95.362 2h-6.965v20h6.965V2zM73.42 2h-6.966l-8.562 20h6.963l5.086-11.876L75.026 22h6.965L73.427 2h-.008zM43.706 2h-6.965l-8.564 20h6.965l5.085-11.876L45.313 22h6.965L43.713 2h-.007z" />
    </svg>
  );
});

export default Icon;
