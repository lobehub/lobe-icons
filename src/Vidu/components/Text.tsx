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
      viewBox="0 0 63 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path
        clipRule="evenodd"
        d="M25.642 2.186a1.986 1.986 0 11-3.972 0 1.986 1.986 0 013.972 0zm9.416 4.509c-3.673 0-6.55 3.476-6.55 7.752 0 4.492 2.69 7.753 6.55 7.753 1.953 0 3.994-.99 5.202-2.52l.197-.25v2.25h3.289V1.602h-3.29v8.104c-1.694-1.96-3.31-3.011-5.398-3.011zm5.408 6.34v2.993c0 .873-1.336 3.17-4.342 3.17-2.328 0-4.082-2.055-4.082-4.782 0-2.698 1.794-4.812 4.082-4.812 2.85.002 4.342 2.551 4.342 3.432zm-31.76 8.612L2 2.155h3.427l5.28 15.273 5.277-15.273h3.429l-6.706 19.492h-4zm48.931.06l3.291-.005-.018-14.654h-3.273v10.268c0 .544-2.503 1.922-4.079 1.922-1.996 0-2.966-1.41-2.966-4.306V7.045h-3.28l.007 8.004c0 4.934 1.683 6.303 3.762 6.9 2.114.608 4.871-.35 6.554-2.508v2.264h.002zM25.298 7.047h-3.287v14.644h3.287V7.048z"
      />
    </svg>
  );
});

export default Icon;
