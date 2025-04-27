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
      viewBox="0 0 60 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path
        clipRule="evenodd"
        d="M15.476 6.599H10.02v11.23h5.455V6.599zm-2.246 8.984h-1.177V8.738h1.177v6.845z"
      />
      <path d="M2 22h2.139V4.246h2.246l-1.283 5.882v2.14h1.283v4.705c0 .321-.214.535-.535.535h-.534v2.14h1.069a2.145 2.145 0 002.14-2.14v-7.487H7.24L8.524 4.14V2H2v20z" />
      <path
        clipRule="evenodd"
        d="M31.733 17.508h6.738v-2.139h-6.845v-2.14h6.63V2.108h-15.4V13.23h6.63v2.139h-6.844v2.139h6.845v2.353h-7.38V22h17.005v-2.139h-7.38v-2.353zm.107-13.262h4.492v2.353H31.84V4.246zm0 4.492h4.492v2.246H31.84V8.738zm-2.14 2.246H25.21V8.738H29.7v2.246zm0-4.385H25.21V4.246H29.7v2.353z"
      />
      <path d="M16.866 4.246h-7.38v-2.14h10.375v2.14h-.749v14.332c0 1.925-1.604 3.422-3.422 3.422h-2.246v-2.139h1.604c1.07 0 1.818-.856 1.818-1.818V4.246zM57.401 2.214H42v2.139h15.401v-2.14zM58.257 10.235v2.14H47.989l-3.422 7.486H54.94l-1.604-3.422h2.353l1.818 4.064c.107.107.107.214.107.427 0 .535-.428 1.07-1.07 1.07H42.107v-2.139l3.422-7.487h-4.278v-2.139h17.006z" />
    </svg>
  );
});

export default Icon;
