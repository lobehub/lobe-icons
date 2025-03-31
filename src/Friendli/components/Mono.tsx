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
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M3.675 7.386A3.684 3.684 0 007.35 3.693 3.684 3.684 0 003.675 0 3.684 3.684 0 000 3.693a3.684 3.684 0 003.675 3.693zm0 16.614a3.683 3.683 0 003.675-3.693 3.684 3.684 0 00-3.675-3.693A3.683 3.683 0 000 20.307 3.684 3.684 0 003.675 24z" />
      <path d="M10.338 7.2a8.002 8.002 0 011.146-.114h2.037a2.14 2.14 0 002.136-2.139V2.44c0-1.179-.96-2.139-2.136-2.139h-2.484a2.14 2.14 0 00-2.136 2.14l-.08 1.487a8.001 8.001 0 01-.12.9 5.2 5.2 0 01-.487 1.38s-.327.627-.753 1.068a5 5 0 01-.327.306l-.219.18a4.4 4.4 0 01-1.779.786c-.285.06-.939.066-1.206.072H2.433c-1.179 0-2.136.96-2.136 2.148v2.5c0 1.187.96 2.147 2.136 2.147h2.544a2.15 2.15 0 002.136-2.148v-1.794c-.02-.62.021-1.773.567-2.547.34-.48.88-.906.972-.98a3.58 3.58 0 01.798-.487c.087-.039.36-.147.885-.246V7.2h.003z" />
      <path d="M21.897.3H19.28c-1.146 0-2.07.927-2.07 2.073V4.14s0 1.227-.3 2.14c-.321.905-1.131 1.727-1.944 2.027-.951.348-2.064.3-2.631.3h-1.59a2.07 2.07 0 00-2.064 2.073v2.634c0 1.146.924 2.073 2.064 2.073h2.622a2.07 2.07 0 002.064-2.073l.02-1.1c-.011-.409.028-1.249.226-1.86.072-.229.219-.649.552-1.108.24-.327.474-.534.71-.753.433-.387.799-.612.9-.666.22-.132.6-.36 1.138-.528.48-.147.84-.174 1.452-.213.36-.027.858-.039 1.458-.006 1.146 0 2.07-.927 2.07-2.073V2.373A2.07 2.07 0 0021.888.3h.009z" />
    </svg>
  );
});

export default Icon;
