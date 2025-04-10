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
      viewBox="0 0 97 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M13.623 20.222c-3.417 0-5.753-1.901-6.855-4.827a12.992 12.992 0 01-.838-4.772c0-4.907 2.206-8.315 7.08-8.315 3.275 0 5.297 1.425 6.448 4.826h1.402l-.19-4.69C18.709 1.18 16.258.543 13.276.543c-4.2 0-7.775 1.874-9.763 5.254a11.357 11.357 0 00-1.511 5.872c0 3.753 1.777 7.08 5.113 8.926a11.95 11.95 0 005.943 1.398c3.254 0 5.835-.617 8.122-1.697l.593-5.172h-1.43c-.858 2.362-1.88 3.78-3.574 4.534-.831.373-1.88.564-3.146.564zm14.74-17.914L28.499 0h-.967L23.23 1.29v.699l1.907.882v16.142c0 1.1-.565 1.344-2.043 1.528v1.18h7.319v-1.18c-1.484-.184-2.042-.428-2.042-1.528V2.315l-.007-.007zm29.104 19.685h.565l4.95-.937v-1.208l-.695-.054c-1.157-.109-1.457-.346-1.457-1.29V9.897l.137-2.763h-.783l-4.678.672v1.181l.457.082c1.266.183 1.64.536 1.64 1.419v7.67c-1.212.937-2.369 1.527-3.744 1.527-1.525 0-2.471-.774-2.471-2.58V9.905l.136-2.763h-.804l-4.684.672v1.181l.484.082c1.266.183 1.64.536 1.64 1.418v7.08c0 3 1.703 4.426 4.412 4.426 2.07 0 3.765-1.1 5.038-2.627L57.474 22l-.007-.007zm-13.602-9.55c0-3.836-2.043-5.309-5.733-5.309-3.254 0-5.616 1.344-5.616 3.57 0 .666.238 1.175.721 1.528l2.478-.326c-.109-.746-.163-1.201-.163-1.391 0-1.263.674-1.901 2.042-1.901 2.022 0 3.044 1.419 3.044 3.7v.746l-5.106 1.527c-1.702.462-2.67.863-3.316 1.8a3.386 3.386 0 00-.476 1.9c0 2.172 1.497 3.706 4.057 3.706 1.852 0 3.493-.835 4.922-2.416.51 1.581 1.294 2.416 2.69 2.416 1.13 0 2.15-.455 3.063-1.344l-.272-.937a4.363 4.363 0 01-1.178.163c-.783 0-1.157-.617-1.157-1.826v-5.607zm-6.536 7.378c-1.396 0-2.26-.808-2.26-2.226 0-.964.456-1.528 1.43-1.854l4.139-1.31v3.965c-1.321.997-2.097 1.425-3.31 1.425zm43.095 1.235v-1.208l-.701-.054c-1.158-.109-1.45-.346-1.45-1.29V2.308L78.409 0h-.974l-4.302 1.29v.699l1.906.882V8.18a6.024 6.024 0 00-3.656-1.046c-4.276 0-7.612 3.245-7.612 8.098 0 3.998 2.397 6.761 6.346 6.761 2.042 0 3.819-.99 4.922-2.525l-.136 2.525h.571l4.95-.937zm-8.96-12.313c2.043 0 3.575 1.181 3.575 3.353v6.11a4.91 4.91 0 01-3.547 1.425c-2.928 0-4.412-2.308-4.412-5.39 0-3.462 1.695-5.498 4.385-5.498zm19.424 3.055c-.381-1.792-1.484-2.81-3.016-2.81-2.288 0-3.874 1.717-3.874 4.18 0 3.646 1.934 6.008 5.059 6.008a5.858 5.858 0 005.03-2.953l.913.245c-.408 3.163-3.281 5.525-6.808 5.525-4.14 0-6.992-3.054-6.992-7.399 0-4.378 3.098-7.46 7.237-7.46 3.09 0 5.27 1.853 5.97 5.07l-10.783 3.3V14.05l7.264-2.247v-.006z" />
    </svg>
  );
});

export default Icon;
