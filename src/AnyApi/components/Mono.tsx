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
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <g transform="translate(0, 1.349) scale(0.071)">
        <path d="M230.448 83.0439L0 299.998L180.622 0L230.448 83.0439ZM249.405 150.521C251.167 150.521 252.799 151.448 253.701 152.962L337.643 293.863C338.436 295.196 337.475 296.887 335.924 296.887H248.86C247.098 296.887 245.466 295.959 244.564 294.445L158.822 150.521H249.405Z" />
      </g>
    </svg>
  );
});

export default Icon;
