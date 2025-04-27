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
      viewBox="0 0 76 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M59.292 22h-4.53l6.904-20h5.449l6.894 20h-4.531l-5.01-15.43h-.156L59.292 22zm-.283-7.861h10.703v3.3H59.01v-3.3zM39.007 22V2h13.476v3.486h-9.248v4.766h8.555v3.486h-8.555v4.776h9.288V22H39.007zM20.96 22V2h7.89c1.511 0 2.8.27 3.868.81 1.074.534 1.891 1.293 2.45 2.276.567.976.85 2.126.85 3.447 0 1.328-.286 2.47-.859 3.428-.573.95-1.403 1.68-2.49 2.187-1.08.508-2.39.762-3.926.762H23.46v-3.398h4.6c.807 0 1.477-.111 2.011-.332.534-.222.931-.554 1.192-.996.267-.443.4-.993.4-1.65 0-.665-.133-1.225-.4-1.68-.26-.456-.661-.801-1.202-1.036-.533-.24-1.207-.361-2.021-.361h-2.851V22H20.96zm10.8-9.102L36.732 22h-4.668L27.2 12.898h4.56zM2 22V2h4.229v8.818h.263L13.69 2h5.068l-7.422 8.955L18.846 22h-5.059L8.31 13.777l-2.08 2.54V22H2z" />
    </svg>
  );
});

export default Icon;
