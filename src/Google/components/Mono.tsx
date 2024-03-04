import { forwardRef } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M0 12c0-1.933.476-3.76 1.306-5.387l.144-.271C3.512 2.569 7.567 0 12.245 0c3.306 0 6.068 1.187 8.19 3.12L16.98 6.427c-.885-.814-2.436-1.787-4.735-1.787-3.238 0-5.986 2.093-6.98 4.987A7.622 7.622 0 004.871 12c0 .709.11 1.398.304 2.05l.104.323a7.358 7.358 0 006.966 4.987c1.823 0 3.21-.493 4.245-1.2l.238-.172c1.466-1.113 2.136-2.67 2.265-3.721h-6.748V9.813h11.497c.176.747.258 1.467.258 2.454 0 3.653-1.333 6.733-3.646 8.826C18.326 22.933 15.55 24 12.244 24c-4.788 0-8.924-2.693-10.938-6.613A11.816 11.816 0 010 12z"></path>
    </svg>
  );
});

export default Icon;
