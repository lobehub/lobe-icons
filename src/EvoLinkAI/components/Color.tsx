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
        d="M2 7.168a2 2 0 0 1 .586-1.414l3.168-3.168A2 2 0 0 1 7.168 2h7.546l-2.829 2.829H8.34a1 1 0 0 0-.707.293L4.829 7.925v8.15l2.804 2.803a1 1 0 0 0 .707.293h3.544L14.714 22H7.168a2 2 0 0 1-1.414-.586l-3.168-3.168A2 2 0 0 1 2 16.832V7.168Z"
        fill="#000000"
      />
      <path d="M9.964 10.096h4.123l1.739-1.739H11.75l-1.786 1.74Zm0 5.547 1.786-1.739h4.075l-1.739 1.739H9.964Z" fill="#000000" />
      <path
        d="M14.871 10.498 18.043 7.326a1 1 0 0 1 1.414 0l2.164 2.164a1 1 0 0 1 0 1.414l-3.578 3.579 3.578 3.578a1 1 0 0 1 0 1.414l-2.164 2.164a1 1 0 0 1-1.414 0l-3.172-3.171 1.9-1.9 2.465 2.464 1.457-1.457-3.579-3.578a1.5 1.5 0 0 1 0-2.122l3.579-3.579-1.457-1.457-2.464 2.465-1.901-1.9Z"
        fill="#000000"
      />
    </svg>
  );
});

export default Icon;
