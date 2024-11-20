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
      viewBox="0 0 65 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M55.626 7.475c1.402 0 2.663.316 3.785.95 1.122.633 2 1.499 2.636 2.597.635 1.099.953 2.337.953 3.715 0 1.378-.318 2.617-.953 3.716a6.913 6.913 0 01-2.636 2.597c-1.122.633-2.383.95-3.785.95-1.42 0-2.692-.317-3.814-.95-1.121-.633-2-1.499-2.635-2.597-.636-1.1-.953-2.338-.953-3.716 0-1.378.317-2.616.953-3.715a6.913 6.913 0 012.635-2.597c1.122-.634 2.393-.95 3.814-.95zm0 2.96c-.767 0-1.449.187-2.047.56a3.655 3.655 0 00-1.402 1.508c-.318.652-.477 1.396-.477 2.234 0 .838.16 1.583.477 2.235a3.85 3.85 0 001.402 1.536c.598.354 1.28.531 2.047.531.766 0 1.44-.177 2.019-.53a3.658 3.658 0 001.374-1.537c.336-.652.504-1.397.504-2.235 0-.838-.168-1.582-.504-2.234a3.479 3.479 0 00-1.374-1.509 3.74 3.74 0 00-2.02-.558zm-18.42-2.737h-3.449v14.079h3.449v-7.682c0-.689.14-1.304.42-1.844.281-.54.664-.959 1.15-1.257a3.101 3.101 0 011.683-.474c.878 0 1.588.307 2.13.921.561.596.842 1.378.842 2.347v7.989h3.42V13.06c0-1.098-.215-2.067-.645-2.905a4.641 4.641 0 00-1.85-1.983c-.804-.465-1.72-.698-2.748-.698-1.01 0-1.907.214-2.692.642a3.9 3.9 0 00-1.71 1.76V7.698zm-5.83 14.078h-3.421v-2.178a4.226 4.226 0 01-1.738 1.787c-.767.41-1.655.615-2.664.615-1.047 0-1.972-.233-2.776-.698a4.921 4.921 0 01-1.85-1.956c-.43-.856-.645-1.834-.645-2.933V7.698h3.448v7.99c0 .967.271 1.759.814 2.373.542.596 1.252.894 2.13.894.636 0 1.197-.149 1.683-.447a3.258 3.258 0 001.177-1.285c.28-.54.421-1.154.421-1.843V7.698h3.42v14.078zm-25.703-.614c1.122.559 2.42.838 3.898.838 1.439 0 2.71-.233 3.813-.698 1.103-.485 1.962-1.164 2.58-2.04.616-.875.925-1.908.925-3.1 0-1.36-.309-2.42-.926-3.184-.617-.782-1.355-1.341-2.215-1.676-.84-.336-1.944-.661-3.308-.978-.991-.223-1.767-.428-2.328-.615-.542-.204-1-.484-1.373-.837-.356-.373-.533-.848-.533-1.425 0-.69.28-1.238.841-1.648.56-.41 1.327-.615 2.3-.615 1.027 0 1.86.261 2.495.782.654.522 1.018 1.21 1.093 2.068h3.533c-.056-1.21-.392-2.272-1.01-3.185-.598-.912-1.43-1.61-2.495-2.095C11.916 2.251 10.711 2 9.346 2c-1.308 0-2.477.233-3.505.698-1.028.447-1.832 1.09-2.411 1.928-.56.82-.841 1.76-.841 2.82 0 1.323.299 2.375.897 3.157.617.782 1.346 1.35 2.187 1.704.86.354 1.963.699 3.309 1.034.953.242 1.7.465 2.243.67.56.205 1.019.484 1.374.838.355.335.532.792.532 1.369 0 .838-.327 1.48-.98 1.927-.637.447-1.496.67-2.58.67-1.178 0-2.122-.325-2.832-.977-.692-.652-1.085-1.527-1.178-2.626H2c.056 1.36.402 2.551 1.037 3.576a6.614 6.614 0 002.636 2.374z"></path>
    </svg>
  );
});

export default Icon;
