'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 444 211"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path
        d="M248.4 33.3h-38.9V5.5h38.9zm-30.3 23.1h-23.4v29.2h20.4c3.4 0 6.2 2.8 6.2 6.2v118.9h30.8V89.6c0-21.5-13.9-33.2-33.9-33.2zM124 5.5l76.2 205.1h-32.4l-20.2-54.5H52.3l-20.2 54.5H0L76.2 5.5zm14.1 125.1L100 28 61.9 130.6zm186.7 54.5 62.6-49.4c36.4-28.7 52.4-48.7 52.4-76.2S421.6 0 366.7 0s-88.2 44.6-88.2 85.6h33.3c0-37 16.4-59.4 54.9-59.4s39.8 16.5 39.8 33.6-4.6 25.9-22.5 40.4L279.1 185v25.6h164.4V185H324.7z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Icon;
