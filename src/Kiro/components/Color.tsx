'use client';

import { memo } from 'react';

import { useFillId } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { COLOR_PRIMARY, TITLE } from '../style';

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
      <g clipPath={fill}>
        <path
          d="M18.8 0H5.2A5.2 5.2 0 000 5.2v13.6A5.2 5.2 0 005.2 24h13.6a5.2 5.2 0 005.2-5.2V5.2A5.2 5.2 0 0018.8 0z"
          fill={COLOR_PRIMARY}
         />
        <mask
          height="16"
          id={id}
          maskUnits="userSpaceOnUse"
          style={{ maskType: 'luminance' }}
          width="14"
          x="5"
          y="4"
        >
          <path d="M18.532 4.055H5.453v15.901h13.079V4.055z" fill="#fff" />
        </mask>
        <g mask={fill}>
          <path
            d="M7.97 16.376c-1.644 3.642 1.86 4.556 4.443 2.424.76 2.39 3.608.607 4.631-1.247 2.251-4.084 1.342-8.249 1.108-9.108-1.6-5.859-9.6-5.869-10.976.03-.323 1.033-.328 2.206-.507 3.423-.09.617-.16 1.009-.393 1.655-.139.373-.323.7-.62 1.257-.458.865-.264 2.53 2.101 1.665l.224-.1h-.01z"
            fill="#fff"
           />
          <path
            d="M12.722 10.985c-.656 0-.755-.785-.755-1.252 0-.423.074-.756.218-.97a.61.61 0 01.537-.283c.229 0 .428.095.567.289.159.218.243.551.243.964 0 .785-.303 1.252-.805 1.252h-.005zM15.425 10.985c-.656 0-.755-.785-.755-1.252 0-.423.074-.756.219-.97a.61.61 0 01.536-.283c.229 0 .428.095.567.289.159.218.243.551.243.964 0 .785-.303 1.252-.805 1.252h-.005z"
            fill="#000"
           />
        </g>
      </g>
      <defs>
        <clipPath id={id}>
          <path d="M0 0h24v24H0z" fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
});

export default Icon;
