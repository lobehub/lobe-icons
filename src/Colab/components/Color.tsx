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
      <g fill="none" fillRule="nonzero">
        <path
          d="M4.426 9.444L2.046 7.07a6.988 6.988 0 000 9.879l2.38-2.381a3.637 3.637 0 010-5.123z"
          fill="#E8710A"
        />
        <path
          d="M11.947 7.069a6.988 6.988 0 000 9.879l2.425-2.381a3.638 3.638 0 015.098-5.123l2.381-2.381a6.987 6.987 0 00-9.883-.032l-.02.02v.018zM11.287 17.52l-1.765-2.954a3.637 3.637 0 01-5.122 0L2.043 16.95a6.989 6.989 0 009.127.654l.115-.084M2.043 7.068l2.381 2.376a3.637 3.637 0 015.098 0l1.727-2.959-.103-.079a6.988 6.988 0 00-9.103.662z"
          fill="#F9AB00"
        />
        <path
          d="M21.85 7.069l-2.382 2.375a3.638 3.638 0 01-5.098 5.123l-2.425 2.383a6.988 6.988 0 009.88-9.881h.024z"
          fill="#E8710A"
        />
      </g>
    </svg>
  );
});

export default Icon;
