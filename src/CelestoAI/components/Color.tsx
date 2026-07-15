'use client';

import { memo } from 'react';

import { useFillId } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  const { id, fill } = useFillId(TITLE);
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
        d="M11.77.194c.044-.259.416-.259.46 0l1.081 6.45a.989.989 0 001.55.641l5.325-3.795c.213-.153.477.11.324.324L16.715 9.14a.989.989 0 00.641 1.549l6.45 1.082c.259.043.259.415 0 .458l-6.45 1.082a.989.989 0 00-.641 1.55l3.795 5.325c.153.213-.11.477-.324.324l-5.326-3.795a.989.989 0 00-1.549.641l-1.082 6.45c-.043.259-.415.259-.458 0l-1.082-6.45a.989.989 0 00-1.55-.641L3.815 20.51c-.214.153-.477-.11-.324-.324l3.795-5.326a.989.989 0 00-.641-1.549L.194 12.23c-.259-.043-.259-.415 0-.458l6.45-1.082a.989.989 0 00.641-1.55L3.49 3.815c-.153-.214.11-.477.324-.324L9.14 7.285a.989.989 0 001.549-.641L11.77.194z"
        fill={fill}
      />
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id={id} x1="0" x2="24" y1="12" y2="12">
          <stop stopColor="#FD2A26" />
          <stop offset="1" stopColor="#FFBE46" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Icon;
