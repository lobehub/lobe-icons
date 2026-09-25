'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      fill="currentColor"
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M18.507 7.468c-.653 1.96-2.152 4.815-4.876 6.026-1.316.584-2.734.719-4.233.365.913 1.362 1.856 2.498 2.803 3.271 1.1.9 2.015 1.164 2.823 1.019.853-.153 2.088-.85 3.608-2.992l2.935 2.084c-1.78 2.508-3.732 4.061-5.907 4.452-2.22.398-4.175-.5-5.736-1.775-1.552-1.267-2.903-3.05-4.047-4.871-1.155-1.839-2.165-3.823-3.001-5.572l2.896-2.049c3.361 3.361 5.36 3.239 6.396 2.778 1.326-.589 2.378-2.234 2.924-3.874l3.415 1.138Z" />
      <path d="M7.2 1.801h3.6l-2.4 19.8H4.8l2.4-19.8Z" />
    </svg>
  );
});

export default Icon;
