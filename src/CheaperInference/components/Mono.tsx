'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      fill="currentColor"
      fillRule="nonzero"
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M15.579 2.877H9.488C4.25 2.877 0 6.964 0 12s4.222 9.123 9.46 9.123l6.119-6.007h-5.446c-1.74 0-3.144-1.392-3.144-3.116a3.14 3.14 0 0 1 3.144-3.144h5.446zM17.347 8.379l4.346-4.547c.831-.871 2.307-.281 2.307.92V19.68c0 .797-.646 1.443-1.443 1.443h-5.21z" />
    </svg>
  );
});

export default Icon;
