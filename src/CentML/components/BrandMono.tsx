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
      viewBox="0 0 69 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M45.279 4.528v12l.014.015h2.214v-4.515c0-1.114-.014-2.071-.071-2.871a29.438 29.438 0 00-.076-.879l3.161 4.993h1.13l3.256-5.035c-.034.334-.062.67-.085 1.007a52.973 52.973 0 00-.072 2.771v4.514h2.214v-12h-2l-3.81 6.121-3.761-6.12h-2.114zM59.207 4.528v12h7.772v-2.057h-5.543V4.528h-2.229zM14 3.429c2.114 0 4.057.771 5.543 2.042l2.214-2.614A11.918 11.918 0 0014 0C7.386 0 2 5.386 2 12s5.386 12 12 12c2.957 0 5.657-1.071 7.757-2.843l-1.964-2.614c-1.5 1.271-3.679 2.028-5.793 2.028-4.729 0-8.571-3.842-8.571-8.571 0-4.729 3.842-8.571 8.571-8.571z" />
      <path d="M37.95 9.457V7.5h1.786V5.2h2.114v2.3h1.957v1.957H41.85v7.071h-2.114V9.457H37.95z" />
      <path
        clipRule="evenodd"
        d="M20.264 16.1c.729.4 1.572.6 2.515.6l-.015-.014a4.97 4.97 0 001.286-.172 6.548 6.548 0 001.243-.471c.4-.2.743-.443 1.057-.729l-1.043-1.457c-.4.357-.786.6-1.143.743-.357.129-.743.2-1.171.2-.6 0-1.143-.129-1.586-.357a2.514 2.514 0 01-1.043-1 2.922 2.922 0 01-.332-.986h6.69v-.743a4.76 4.76 0 00-.286-1.771c-.2-.543-.5-1-.872-1.4a4.426 4.426 0 00-1.343-.929 4.001 4.001 0 00-1.657-.343c-.671 0-1.285.115-1.857.358a4.208 4.208 0 00-1.457 1 4.484 4.484 0 00-.957 1.514 5.284 5.284 0 00-.343 1.943c0 .886.214 1.685.614 2.371.415.7.972 1.243 1.7 1.643zm-.19-5.086c.046-.226.113-.432.204-.614.2-.4.486-.714.872-.928.386-.215.857-.329 1.414-.329.357 0 .7.071 1 .228.3.143.543.358.743.63.2.256.314.57.343.928v.085h-4.576z"
      />
      <path d="M28.535 7.5v9.015h2.115v-5.457c0-.271.043-.529.157-.757.1-.229.257-.443.443-.615.186-.185.414-.314.671-.414.257-.1.529-.143.843-.143.371-.014.7.058.957.2.272.143.457.372.586.672.128.3.186.686.186 1.143v5.371h2.114v-5.514c0-.829-.129-1.514-.357-2.057-.229-.543-.586-.957-1.043-1.229-.471-.271-1.043-.414-1.729-.414-.471 0-.943.114-1.4.314-.457.2-.857.471-1.185.814-.104.108-.198.22-.28.334l-.02-1.262h-2.058zM11.621 16.271c.7.429 1.5.643 2.386.643h.014c.786 0 1.529-.171 2.243-.5a4.91 4.91 0 001.129-.714l-1.243-1.472c-.043.043-.1.086-.157.129-.257.2-.529.343-.829.443a2.39 2.39 0 01-.9.157c-.514 0-.986-.143-1.4-.4a2.738 2.738 0 01-1-1.057 3.072 3.072 0 01-.371-1.5c0-.557.114-1.072.357-1.515.228-.442.557-.8.971-1.057a2.626 2.626 0 011.415-.385c.3 0 .614.071.928.185.3.115.6.286.872.486.028.014.1.071.1.071l1.271-1.5a4.473 4.473 0 00-1.086-.714c-.7-.328-1.428-.486-2.314-.486-.886 0-1.686.215-2.386.643-.714.429-1.257 1.015-1.671 1.757-.414.743-.614 1.572-.614 2.515 0 .943.2 1.771.614 2.514a4.707 4.707 0 001.671 1.757z" />
    </svg>
  );
});

export default Icon;
