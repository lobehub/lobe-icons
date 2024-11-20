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
      viewBox="0 0 60 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M46.461 2.48h2.294v11.093l6.453-5.84h2.8l-4.933 4.614 5.466 9.173h-2.64l-4.56-7.813-2.586 2.32v5.493H46.46V2.48zM36.632 21.947c-1.049 0-1.982-.17-2.8-.507a5.75 5.75 0 01-2.08-1.44c-.569-.622-1.004-1.387-1.306-2.293-.303-.907-.454-1.92-.454-3.04s.16-2.133.48-3.04c.32-.907.774-1.68 1.36-2.32A5.85 5.85 0 0133.94 7.84c.836-.355 1.76-.533 2.773-.533 1.031 0 1.956.169 2.774.506a5.602 5.602 0 012.08 1.467c.586.622 1.03 1.378 1.333 2.267.302.889.453 1.893.453 3.013 0 1.138-.16 2.16-.48 3.067-.302.907-.746 1.68-1.333 2.32a5.826 5.826 0 01-2.107 1.493c-.835.338-1.769.507-2.8.507zm.027-1.92c.747 0 1.387-.134 1.92-.4.533-.267.969-.64 1.307-1.12.355-.48.613-1.05.773-1.707a9.6 9.6 0 00.24-2.213c0-.782-.08-1.502-.24-2.16-.16-.658-.418-1.218-.773-1.68a3.467 3.467 0 00-1.307-1.12c-.533-.267-1.173-.4-1.92-.4-.747 0-1.387.133-1.92.4a3.76 3.76 0 00-1.307 1.12c-.338.462-.586 1.022-.746 1.68a9.257 9.257 0 00-.24 2.187c0 .8.08 1.528.24 2.186.16.658.408 1.227.746 1.707s.774.853 1.307 1.12c.533.267 1.173.4 1.92.4zM21.435 7.733h2.294v2.134c.515-.765 1.12-1.351 1.813-1.76a4.287 4.287 0 012.213-.614c.48 0 .89.036 1.227.107l-.293 2.16a5.521 5.521 0 00-.534-.08 2.997 2.997 0 00-.586-.053c-.427 0-.863.08-1.307.24a3.406 3.406 0 00-1.253.746 3.945 3.945 0 00-.934 1.174c-.213.444-.32.96-.32 1.546v8.187h-2.32V7.733zM11.013 11.733h7.12v7.627a8.826 8.826 0 01-1.6 1.173c-.569.32-1.173.596-1.813.827-.622.213-1.271.373-1.947.48-.657.107-1.306.16-1.946.16-1.405 0-2.658-.222-3.76-.667a7.754 7.754 0 01-2.774-1.973c-.746-.853-1.315-1.893-1.706-3.12C2.196 14.996 2 13.591 2 12.027c0-1.6.213-3.023.64-4.267.427-1.244 1.013-2.293 1.76-3.147a7.581 7.581 0 012.72-1.946C8.169 2.222 9.316 2 10.56 2c1.067 0 2.009.133 2.827.4.817.249 1.51.613 2.08 1.093a5.912 5.912 0 011.44 1.734c.373.657.657 1.395.853 2.213l-2.373.4a6.753 6.753 0 00-.587-1.52 3.71 3.71 0 00-.907-1.173c-.373-.338-.835-.596-1.386-.774-.534-.177-1.183-.266-1.947-.266-.996 0-1.867.195-2.613.586a5.051 5.051 0 00-1.867 1.6c-.498.694-.88 1.53-1.147 2.507-.249.96-.373 2.027-.373 3.2s.124 2.249.373 3.227c.25.96.631 1.786 1.147 2.48a5.385 5.385 0 001.973 1.6c.783.373 1.707.56 2.774.56.96 0 1.857-.116 2.693-.347a6.842 6.842 0 002.293-1.093v-4.56h-4.8v-2.134z"></path>
    </svg>
  );
});

export default Icon;
