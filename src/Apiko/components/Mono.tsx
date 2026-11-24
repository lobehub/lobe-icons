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
      <path d="M0.94 20.54L10.44 1.873A1.75 1.75 0 0 1 13.56 3.46L4.06 22.127A1.75 1.75 0 0 1 0.94 20.54zM13.56 1.873L23.06 20.54A1.75 1.75 0 0 1 19.94 22.127L10.44 3.46A1.75 1.75 0 0 1 13.56 1.873zM7.333 12.083L16.667 12.083A1.583 1.583 0 0 1 16.667 15.25L7.333 15.25A1.583 1.583 0 0 1 7.333 12.083zM0 21.333A2.5 2.5 0 1 1 5 21.333A2.5 2.5 0 1 1 0 21.333zM9.5 2.667A2.5 2.5 0 1 1 14.5 2.667A2.5 2.5 0 1 1 9.5 2.667zM19 21.333A2.5 2.5 0 1 1 24 21.333A2.5 2.5 0 1 1 19 21.333z" />
    </svg>
  );
});

export default Icon;
