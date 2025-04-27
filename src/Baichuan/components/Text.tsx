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
      viewBox="0 0 45 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M2 2v2.712h8.136L9.57 7.198H4.26v14.576h2.712v-1.356h9.717v1.356h2.938V7.198H12.51l.677-2.486h8.362V2H2zm4.972 16.045v-2.938h9.717v2.825l-9.717.113zm0-8.361v2.937l9.717-.113V9.684H6.972zm21.921-7.571h-2.825v10.735c0 1.92-1.133 4.988-2.712 7.231L25.729 22c1.873-2.578 3.164-6.667 3.164-8.927V2.113zm4.067.904h2.712v16.61h-2.711l-.001-16.61zM42.452 2H39.74v19.661h2.712V2z" />
    </svg>
  );
});

export default Icon;
