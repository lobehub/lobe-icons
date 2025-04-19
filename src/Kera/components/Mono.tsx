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
      <path d="M7.421.017c1.956-.137 3.68 1.224 3.932 3.103.24 1.784-.982 3.51-2.818 3.915-.46.102-.97.073-1.458.135a5.126 5.126 0 00-3.042 1.483l-.01.005-.01-.001-.007-.006-.003-.01a.03.03 0 01.005-.017.044.044 0 00.008-.025 485.376 485.376 0 01-.011-5.028C4.01 1.711 5.478.155 7.42.017z" />
      <path d="M7.627 15.562c-2.488-.02-4.271-2.47-3.405-4.761a3.665 3.665 0 013.052-2.336c.425-.045.936-.034 1.345-.109 2.104-.39 3.73-2 4.058-4.049.073-.454.034-.996.142-1.478.497-2.232 3.055-3.484 5.203-2.476 1.119.527 1.87 1.522 2.056 2.71.037.243.05.545.037.905-.243 6.468-5.768 11.647-12.488 11.592m3.135 1.03a.044.044 0 01-.024-.022v-.007l.002-.006c0-.003 0-.004.003-.005l.006-.003c2.553-.585 4.764-1.76 6.635-3.526.033-.031.064-.029.092.007.299.396.613.82.863 1.225a11.736 11.736 0 011.755 5.414c.027.391.036.693.026.907-.093 1.888-1.672 3.41-3.665 3.421-1.763.011-3.313-1.192-3.647-2.875-.08-.399-.056-.95-.122-1.371-.208-1.295-.841-2.344-1.899-3.144l-.025-.015zm-3.73 7.352c-1.498-.26-2.703-1.424-2.972-2.871a5.537 5.537 0 01-.055-.905V15.38c0-.016.005-.018.017-.008.979.87 2.009 1.402 3.353 1.49l.36.011c1.751.057 3.234 1.204 3.576 2.87.506 2.464-1.724 4.645-4.28 4.2z" />
    </svg>
  );
});

export default Icon;
