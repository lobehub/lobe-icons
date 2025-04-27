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
      viewBox="0 0 85 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M8.147 2c1.438 0 2.75.225 3.937.676 1.186.45 2.21 1.099 3.074 1.946a8.625 8.625 0 011.927 3.094c.44 1.198.66 2.527.66 3.987s-.22 2.788-.66 3.986a8.625 8.625 0 01-1.927 3.095 8.778 8.778 0 01-3.074 1.946c-1.187.45-2.499.675-3.937.675H2V2h6.147zm19.898 0l7.469 19.405h-2.615l-1.969-5.108H22.25l-1.942 5.108H17.72L25.187 2h2.858zM8.12 4.243H4.534v14.92h3.613c2.175 0 3.896-.672 5.164-2.014 1.267-1.343 1.9-3.158 1.9-5.446 0-2.289-.633-4.104-1.9-5.446-1.268-1.343-2.998-2.014-5.19-2.014zm18.442.676l-3.45 9.108h6.956l-3.506-9.108zm23.215 16.486H37.536V2h2.588v17.135h9.653v2.27zM54.414 2v17.135h9.653v2.27H51.826V2h2.588zm12.619 9.946v3.19h-3.074v-3.19h3.074zm2.965 9.46V2h12.646v2.27H72.56v5.973h8.547v2.27H72.56v6.622h10.084v2.27H69.998z" />
    </svg>
  );
});

export default Icon;
