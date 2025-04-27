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
        d="M2 13.08C2 9.182 4.772 6.367 9.32 2.122c-.65 7.883 6.41 8.272 5.023 12.214-.99 2.815-4.244 1.949-4.59 1.342 0 0 1.212.347 1.385-.866.174-1.213-2.252-1.862-3.81-4.937-2.6 2.988-.954 9.008 4.2 9.008 4.764 0 6.583-4.937 4.894-8.099 0 0 4.071.693 4.418 3.811.346 3.119-3.638 8.533-9.095 8.403C6.288 22.868 2 18.84 2 13.08z"
        fill="#3DC8F9"
      />
      <path
        d="M17.852 6.107L11.615 0c-.52 5.933.866 8.374 4.894 9.485 2.729.753 3.307 1.04 4.504 2.772-.338-2.407-.78-3.812-3.161-6.15z"
        fill="#EA0100"
      />
      <path
        clipRule="evenodd"
        d="M9.033 18.323c.709.354 1.542.56 2.495.56 4.764 0 6.583-4.937 4.894-8.099 0 0 4.071.693 4.418 3.811.156 1.403-.565 3.27-1.902 4.89-3.458 1.57-7.29.84-9.905-1.162z"
        fill="#1652D8"
        fillRule="evenodd"
      />
    </svg>
  );
});

export default Icon;
