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
      <path d="M11.999 3.14C5.372 3.14 0 8.588 0 15.312v5.828h2.212v-.58c0-2.728 2.178-4.938 4.866-4.938 2.688 0 4.866 2.21 4.866 4.937v.581h2.212v-.58c0-3.967-3.17-7.18-7.078-7.18a6.966 6.966 0 00-4.086 1.318C4.2 12.262 6.687 10.59 9.56 10.59c4.057 0 7.347 3.338 7.347 7.453v3.097h2.212v-3.097c0-5.355-4.28-9.698-9.56-9.698a9.438 9.438 0 00-6.217 2.332C4.984 7.528 8.244 5.383 12 5.383c5.406 0 9.788 4.446 9.788 9.93v5.827H24v-5.828C23.999 8.588 18.627 3.14 11.999 3.14z" />
    </svg>
  );
});

export default Icon;
