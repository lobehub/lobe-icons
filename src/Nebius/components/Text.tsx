'use client';

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
      viewBox="0 0 137 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M82.404 2.286h-3.97V21.71h3.97V2.286z" />
      <path
        clipRule="evenodd"
        d="M50.337 5.96V2.287H30.083v19.426h20.254V18.04H34.051v-4.218h14.52v-3.675h-14.52V5.961h16.286zm15.554-3.658l-.005-.013H54.395v19.423h12.69v.005c5.852 0 7.763-2.234 7.763-5.502 0-2.807-2.106-4.293-3.163-4.609 1.062-.698 1.942-2.035 1.942-4.019 0-4.513-4.345-5.264-7.734-5.285h-.002zm.704 3.654h-8.23v4.276h8.774c1.075-.012 2.678-.385 2.678-1.997s-1.4-2.28-3.22-2.28l-.002.001zm.487 7.719h-8.72v4.363h8.774c1.835-.005 3.605-.315 3.605-2.15 0-1.834-1.95-2.203-3.66-2.203v-.01z"
      />
      <path d="M133.692 12.39c-1.996-1.597-3.7-1.732-7.06-2.074-.387-.032-5.854-.486-6.267-.523-3.738-.344-3.47-2.032-3.47-2.032 0-1.866 3.775-2.015 3.775-2.015 3.133-.313 9.265-.223 9.648 2.533h4.341v-.002c-.389-5.438-7.152-6.222-11.492-6.277-2.876.072-6.008.245-8.497 1.855-2.789 1.832-2.514 5.481-.766 7.117.681.59 1.713 1.397 3.832 1.792.975.179 2.572.416 4.761.571 0 0 3.496.213 4.245.272 1.115.087 3.746.226 3.959 2.14.227 2.042-3.302 2.633-6.926 2.633-1.587-.011-3.204-.07-4.874-.537-1.413-.402-2.224-1.228-2.359-2.605h-4.292c-.006 5.853 6.676 6.76 11.342 6.76 3.178-.076 6.623-.298 9.378-2.056 3.033-1.98 2.717-5.825.719-7.555l.003.002zM91.034 2.285h-4.202v9.896c0 2.739 2.211 4.179 4.66 4.937-.367-1.918-.46-4.229-.46-5.42V2.285h.002zm18.038 9.896V2.286h-4.202v9.412c0 1.194-.094 3.503-.461 5.421 2.45-.758 4.661-2.2 4.661-4.937h.002zm-11.13 5.764c-4.13 0-6.45-.827-6.45-.827a10.9 10.9 0 00.4 1.553c.703 2.014 2.573 3.291 6.059 3.291s5.355-1.277 6.059-3.29c.161-.458.292-.99.399-1.554 0 0-2.286.827-6.467.827zM21.712 2.3v16.555s3.943-.238 3.943-4.745V2.3h-3.943zM5.942 21.712V5.157S2 5.395 2 9.903v11.809h3.943z" />
      <path d="M18.084 16.3l-4.96-11.403c-.813-1.845-2.138-2.884-4.019-2.884-1.88 0-3.165 1.518-3.165 3.144 0 0 2.371-.329 3.628 2.556l4.963 11.403c.81 1.842 2.137 2.884 4.017 2.884 1.877 0 3.165-1.519 3.165-3.145 0 0-2.372.329-3.63-2.556z" />
    </svg>
  );
});

export default Icon;
