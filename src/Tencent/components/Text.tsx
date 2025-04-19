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
      viewBox="0 0 109 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M23.587 7.91c5.127 0 6.172 3.607 5.66 6.56-.11.635-.262 1.144-.39 1.434h-10.55c-.318 2.448 1.711 3.514 4.265 3.514 1.831 0 3.994-.683 5.693-1.904l-.54 3.084c-1.74.97-3.88 1.402-6.169 1.402-5.121 0-7.651-3.027-6.937-7.161.645-3.723 3.893-6.929 8.968-6.929zm47.887 0c5.13 0 6.174 3.607 5.665 6.56-.078.491-.209.972-.39 1.434H66.198c-.317 2.448 1.71 3.514 4.263 3.514 1.833 0 3.995-.683 5.694-1.904l-.54 3.084c-1.74.97-3.881 1.402-6.169 1.402-5.12 0-7.652-3.027-6.937-7.161.645-3.723 3.892-6.929 8.965-6.929zm-13.732.007c1.46-.01 2.91.263 4.267.803l-.619 3.67c-1.06-1.4-2.74-1.817-3.981-1.817-3.043 0-5.377 1.902-5.791 4.373-.48 2.767 1.578 4.354 4.295 4.354 1.332 0 3.213-.31 4.6-1.806l-.646 3.605c-.888.33-3.237.898-5.203.898-4.947 0-7.867-3.03-7.145-7.219.7-4.037 4.674-6.86 10.223-6.86zm-16.524-.005c2.75 0 5.364 1.515 4.625 5.78l-1.406 8.015h-3.99l1.334-7.614c.333-1.935-.259-3.41-2.439-3.41-1.586 0-2.836.96-3.432 2.002-.172.28-.304.693-.37 1.082l-1.389 7.94h-3.99l1.638-9.48c.204-1.172.352-2.361.468-3.376l.105-.94 3.515 2.084h.093c.879-1.047 2.746-2.083 5.238-2.083zm47.889 0c2.75 0 5.364 1.515 4.625 5.78l-1.404 8.015h-3.992l1.334-7.614c.335-1.935-.257-3.41-2.439-3.41-1.585 0-2.836.96-3.432 2.002-.172.28-.305.693-.37 1.082l-1.389 7.94h-3.992l1.639-9.48c.229-1.319.389-2.659.511-3.748l.063-.567 3.515 2.083h.092c.85-1.011 2.618-2.012 4.982-2.08l.257-.003zM20.633 2l-.494 2.866h-7.105l-2.949 16.84h-3.99l2.948-16.84H2L2.498 2h18.135zm78.69 2.414l7.861 6.344h-4.978l-1.92 10.949h-3.992l1.915-10.949H95.93l-1.768-2.543h4.495l.666-3.801zm-76.389 5.825c-2.456 0-3.805 1.906-4.221 3.287h6.943c.233-1.248-.05-3.287-2.722-3.287zm47.888 0c-2.453 0-3.803 1.906-4.219 3.287h6.943l.028-.175c.175-1.255-.199-3.112-2.752-3.112z" />
    </svg>
  );
});

export default Icon;
