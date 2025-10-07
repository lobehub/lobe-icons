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
        d="M12 0v12L1.598 18.006a.742.742 0 01-.1-.371V6.365c0-.265.142-.51.371-.642L11.592.109A.816.816 0 0112 0z"
        fillOpacity=".36"
      />
      <path
        d="M11.935 12.037a.483.483 0 01.065.241v10.777c0 .127.169.173.232.062l4.755-8.237 5.415 3.126a.742.742 0 01-.271.271l-9.723 5.614a.817.817 0 01-.816 0l-9.723-5.614a.74.74 0 01-.271-.271l10.337-5.969z"
        fillOpacity=".5"
      />
      <path
        d="M21.674 6.415a.344.344 0 010 .348l-9.442 16.354c-.063.11-.232.065-.232-.062V12.278a.48.48 0 00-.065-.241l9.74-5.623z"
        fillOpacity=".83"
      />
      <path
        d="M12 0c.14 0 .282.036.408.11l9.723 5.613a.741.741 0 01.218.19l.053.081c.065.111.1.238.1.371v11.27c0 .132-.036.26-.1.37l-5.415-3.125 4.688-8.117a.345.345 0 00-.001-.349L12 12V0z"
        fillOpacity=".24"
      />
      <path d="M21.674 6.414l-9.739 5.623a.48.48 0 00-.176-.176L2.426 6.472c-.11-.063-.065-.232.062-.232h18.885c.134 0 .243.073.301.174z" />
    </svg>
  );
});

export default Icon;
