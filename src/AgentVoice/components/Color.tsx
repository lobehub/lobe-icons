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
      <path
        d="M23.696 12.056h-8.825a.283.283 0 01-.246-.425l4.413-7.643a.283.283 0 00-.246-.425l-9.018.005a.567.567 0 00-.49.283L.037 19.863a.283.283 0 00.246.425h9.015c.203 0 .39-.108.491-.284l4.325-7.49a.283.283 0 01.49 0l4.413 7.644c.11.188.382.188.491 0l4.433-7.677a.283.283 0 00-.246-.425z"
        fill="#0F6FFF"
      />
    </svg>
  );
});

export default Icon;
