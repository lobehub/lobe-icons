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
      viewBox="0 0 156 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <g>
        <path d="M23.093 9.894l-9.939 5.595L2.512 9.511 2 9.787v4.34l11.154 6.256 9.94-5.574v2.297l-9.94 5.596-10.642-5.979L2 17v.745L13.154 24l11.133-6.255v-4.34l-.511-.277-10.622 5.957-9.96-5.574v-2.298l9.96 5.574 11.133-6.255V6.255l-.554-.319-10.579 5.936-9.448-5.276 9.448-5.298 7.764 4.362.682-.383v-.532L13.154 0 2 6.255v.681l11.154 6.255 9.94-5.595z" />
        <path d="M45.123 20.451V1.345H42.18v7.149c0 .106-.064.191-.17.234a.26.26 0 01-.278-.064c-1.002-1.17-2.559-1.83-4.265-1.83-3.647 0-6.505 3.064-6.505 6.98 0 1.914.661 3.68 1.877 4.978a6.268 6.268 0 004.628 2c1.685 0 3.242-.702 4.265-1.915.064-.085.192-.106.278-.085.106.042.17.127.17.234v1.425h2.943zm-7.016-2.319c-2.346 0-4.18-1.893-4.18-4.319 0-2.425 1.834-4.319 4.18-4.319 2.346 0 4.18 1.894 4.18 4.32 0 2.425-1.834 4.318-4.18 4.318zm22.757 2.299V7.154h-2.922v1.34c0 .107-.064.192-.17.235a.226.226 0 01-.235-.04l-.043-.045c-.981-1.17-2.517-1.83-4.266-1.83-3.647 0-6.505 3.064-6.505 6.979s2.858 6.978 6.505 6.978c1.685 0 3.242-.702 4.266-1.936.064-.085.192-.106.277-.085.107.043.17.128.17.234v1.447h2.923zm-6.975-2.298c-2.346 0-4.18-1.894-4.18-4.319s1.834-4.32 4.18-4.32c2.347 0 4.18 1.895 4.18 4.32 0 2.425-1.833 4.32-4.18 4.32zm31.991 2.32V7.153h-2.922v1.34c0 .107-.064.192-.17.235a.226.226 0 01-.235-.04l-.043-.045c-.98-1.17-2.516-1.83-4.265-1.83-3.669 0-6.505 3.064-6.505 7s2.858 6.979 6.505 6.979c1.685 0 3.241-.702 4.265-1.936.064-.086.192-.107.277-.086.107.043.171.128.171.235v1.446h2.922zm-6.974-2.32c-2.346 0-4.18-1.894-4.18-4.319s1.834-4.32 4.18-4.32c2.346 0 4.18 1.895 4.18 4.32 0 2.425-1.834 4.32-4.18 4.32zm12.328.744l.085-.021c.064 0 .15.042.192.085 1.003 1.17 2.56 1.83 4.266 1.83 3.647 0 6.505-3.064 6.505-6.98 0-1.914-.661-3.68-1.877-4.978a6.268 6.268 0 00-4.628-2c-1.685 0-3.242.702-4.266 1.915-.064.085-.17.106-.277.085-.107-.042-.17-.128-.17-.234V1.345H88.12v19.106h2.943v-1.34c0-.106.064-.192.171-.234zm-.298-5.064c0-2.425 1.834-4.319 4.18-4.319 2.346 0 4.18 1.894 4.18 4.32 0 2.425-1.834 4.318-4.18 4.318-2.346 0-4.18-1.915-4.18-4.319zm19.856-3.933c.277 0 .533.022.704.064V6.923l-.164-.024a3.043 3.043 0 00-.327-.019c-1.535 0-2.943.788-3.69 2.043-.063.106-.17.149-.277.106a.25.25 0 01-.192-.234V7.157h-2.922v13.32h2.944v-5.873c0-2.915 1.493-4.724 3.924-4.724zm5.545-2.724h-2.986v13.319h2.986V7.155zm-1.536-5.79a1.81 1.81 0 100 3.617 1.81 1.81 0 100-3.617zm10.28 5.448c-4.094 0-7.06 2.936-7.06 7 0 1.979.706 3.745 1.963 5.021 1.28 1.277 3.071 1.979 5.076 1.979 1.664 0 2.943-.32 5.375-2.106l-1.684-1.766c-1.196.787-2.305 1.17-3.392 1.17-2.474 0-4.33-1.851-4.33-4.298s1.856-4.298 4.33-4.298c1.173 0 2.26.383 3.349 1.17l1.876-1.766c-2.196-1.872-4.18-2.106-5.502-2.106zm23.97-.021c2.09 0 3.905 1.106 4.779 2.893l-2.368 1.277c-.555-1.107-1.429-1.745-2.41-1.745-1.024 0-1.75.553-1.75 1.362 0 .702.513 1.213 1.6 1.574l1.6.532c2.346.766 3.498 2.022 3.498 3.851 0 2.788-2.453 4.256-4.863 4.256-2.367 0-4.308-1.256-5.097-3.277l2.41-1.277c.512 1.256 1.578 2.022 2.772 2.022.896 0 1.942-.405 1.942-1.532 0-.701-.435-1.157-1.446-1.51l-1.84-.597c-2.28-.723-3.39-1.957-3.39-3.808 0-2.32 1.919-4.021 4.564-4.021zM135 1.366v10.469c0 .106.064.19.15.234.106.02.212 0 .277-.064l4.84-4.851h3.605l-5.609 5.595c-.107.085-.107.234-.02.34l6.099 7.362h-3.626l-4.713-5.83c-.065-.042-.128-.084-.193-.084h-.02a.244.244 0 00-.172.063l-.554.49c-.064.042-.085.127-.085.191v5.192h-2.943V1.366h2.964zM69.054 20.665c.938 0 1.77-.085 2.24-.15v-2.552a16.55 16.55 0 01-1.472.085l-.221-.003c-1.085-.033-1.89-.371-1.89-2.785V9.792c0-.149.106-.255.255-.255h2.88V7.133h-2.88a.246.246 0 01-.256-.256v-3.83h-2.943V6.9a.246.246 0 01-.256.255h-2.048v2.404h2.048c.15 0 .256.107.256.256v6.191c0 4.66 3.114 4.66 4.287 4.66z" />
      </g>
    </svg>
  );
});

export default Icon;
