'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      fill="none"
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 48 48"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path
        d="M16.559 6a2 2 0 0 1 1.897 1.367l1.088 3.266A2 2 0 0 0 21.44 12h5.118a2 2 0 0 0 1.897-1.367l1.088-3.266A2 2 0 0 1 31.44 6h3.118a2 2 0 0 1 1.897 1.367l1.196 3.591c.217.649.75 1.143 1.413 1.309l5.42 1.354A2 2 0 0 1 46 15.561v16.877a2 2 0 0 1-1.515 1.94l-5.42 1.355a2 2 0 0 0-1.413 1.309l-1.196 3.59A2 2 0 0 1 34.56 42h-3.12a2 2 0 0 1-1.897-1.367l-.666-2A2 2 0 0 1 30.774 36H36a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v14a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V14a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h5.226a2 2 0 0 1 1.896 2.633l-.666 2A2 2 0 0 1 16.56 42h-3.12a2 2 0 0 1-1.897-1.367l-1.196-3.591a2 2 0 0 0-1.413-1.309l-5.42-1.354A2 2 0 0 1 2 32.439V15.561a2 2 0 0 1 1.515-1.94l5.42-1.355a2 2 0 0 0 1.413-1.309l1.196-3.59A2 2 0 0 1 13.44 6z"
        fill="#99d52a"
      />
    </svg>
  );
});

export default Icon;
