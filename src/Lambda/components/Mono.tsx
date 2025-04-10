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
      <path d="M2 2h20v20H2V2zm1.768 18.237h16.459V3.761H3.768v16.476zm3.515-14.91l3.479 6.176-3.871 7.154h2.493l2.58-4.883 2.747 4.883h2.54L9.82 5.324l-2.538.002z" />
    </svg>
  );
});

export default Icon;
