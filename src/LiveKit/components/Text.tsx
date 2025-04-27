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
      viewBox="0 0 100 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M5.693 0H2v21.686h13.357v-3.143H5.693V0zm15.793 9.821H17.95v11.786h3.536V9.821zm10.528 11.393L27.457 6.286H24l4.714 15.4h6.757l4.715-15.4H36.57l-4.557 14.928zM48.986 5.971c-4.636 0-7.543 3.3-7.543 8.015C41.443 18.7 44.27 22 48.986 22c3.614 0 6.285-1.571 7.228-4.871H52.6c-.55 1.492-1.571 2.357-3.536 2.357-2.2 0-3.693-1.572-3.928-4.479H56.45l.079-1.1c0-4.793-2.986-7.936-7.543-7.936zm-3.929 6.6c.393-2.828 1.886-4.085 3.929-4.085 2.278 0 3.693 1.571 3.928 4.085h-7.857zM77.43 0h-4.636l-8.957 9.9V0h-3.693v21.686h3.693v-11l9.9 11h4.714L68.079 10.214 77.507 0h-.078zm6.285 6.286H80.1V18.07h3.536V6.286h.078zm-65.764 0h-3.614V9.82h3.614V6.286zm69.3 11.785h-3.614v3.615h3.614V18.07zm10.607 0h-3.536v3.615h3.615V18.07h-.079zm0-8.25V6.286h-3.536V0h-3.535v6.286H87.17V9.82h3.615v8.25h3.535v-8.25h3.615-.079z" />
    </svg>
  );
});

export default Icon;
