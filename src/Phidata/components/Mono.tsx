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
        d="M2.692 3.752C2 4.769 2 6.193 2 9.04v5.92c0 2.847 0 4.27.692 5.288a4 4 0 001.06 1.06C4.769 22 6.193 22 9.04 22h5.92c2.847 0 4.27 0 5.288-.692a4 4 0 001.06-1.06C22 19.231 22 17.807 22 14.96V9.04c0-2.847 0-4.27-.692-5.288a4 4 0 00-1.06-1.06C19.231 2 17.807 2 14.96 2H9.04c-2.847 0-4.27 0-5.288.692a4 4 0 00-1.06 1.06zm16.57 11.478a.755.755 0 10-1.51.032c.029 1.305-.304 1.912-.725 2.21-.468.334-1.288.473-2.635.272a.755.755 0 00-.222 1.493c1.445.215 2.769.15 3.731-.534 1.01-.718 1.393-1.94 1.36-3.473z"
      />
    </svg>
  );
});

export default Icon;
