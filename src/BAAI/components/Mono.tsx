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
      <path
        clipRule="evenodd"
        d="M0 4.68L8.61 0l3.583 2.004 3.1-1.735L24 5.14v8.701l-3.582 2.004v3.469L12.038 24l-8.482-4.52v-3.847L0 13.9V4.68zm1.284 1.472v2.934l7.936 4.098-.032 1.419-7.904-4.08v2.658l10.043 5.303V11.77L1.284 6.152zm10.741 4.532l9.791-5.33-2.63-1.47-7.398 4.137-1.251-.736 7.366-4.12-2.61-1.46-9.806 5.34 6.538 3.64zM4.2 6.328l6.709-3.606L8.61 1.436l-6.714 3.61L4.2 6.327zm11.04 14.444l-2.618 1.465V11.94l6.512-3.642v10.298l-2.61 1.46v-8.241l-1.283.682v8.277zm-10.4-4.42l6.487 3.568v2.23L4.84 18.763v-2.41zm17.876-3.23v-6.83L20.418 7.58v6.829l2.298-1.286z"
      />
    </svg>
  );
});

export default Icon;
