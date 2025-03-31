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
      viewBox="0 0 140 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M137.271 21.657h-3.314v-2.486h-.057c-1.067 1.886-2.71 2.829-4.929 2.829-1.8 0-3.242-.652-4.328-1.957-1.076-1.314-1.614-3.1-1.614-5.357 0-2.42.595-4.357 1.785-5.815 1.2-1.457 2.796-2.185 4.786-2.185 1.971 0 3.405.79 4.3 2.371h.057V0h3.314v21.657zM134 14.971v-1.914c0-1.038-.338-1.919-1.014-2.643-.676-.724-1.538-1.085-2.586-1.085-1.238 0-2.214.461-2.929 1.385-.704.924-1.057 2.205-1.057 3.843 0 1.486.338 2.662 1.015 3.529.685.857 1.604 1.285 2.757 1.285 1.133 0 2.052-.414 2.757-1.242.705-.838 1.057-1.89 1.057-3.158zM119.643 21.657h-3.314v-2.314h-.058c-.962 1.771-2.457 2.657-4.485 2.657-3.457 0-5.186-2.076-5.186-6.228V7.029h3.314v8.4c0 2.628 1.015 3.943 3.043 3.943.981 0 1.786-.362 2.414-1.086.638-.724.958-1.672.958-2.843V7.03h3.314v14.628zM95.886 22c-2.257 0-4.062-.681-5.415-2.043-1.342-1.372-2.014-3.186-2.014-5.443 0-2.457.7-4.376 2.1-5.757 1.41-1.381 3.305-2.071 5.686-2.071 2.286 0 4.067.671 5.343 2.014 1.276 1.343 1.914 3.205 1.914 5.586 0 2.333-.69 4.204-2.071 5.614-1.372 1.4-3.22 2.1-5.543 2.1zm.157-12.672c-1.295 0-2.32.453-3.072 1.357-.752.905-1.128 2.153-1.128 3.743 0 1.534.38 2.743 1.143 3.629.762.876 1.78 1.314 3.057 1.314 1.305 0 2.305-.433 3-1.3.705-.866 1.057-2.1 1.057-3.7 0-1.61-.352-2.852-1.057-3.728-.695-.877-1.695-1.315-3-1.315zM85.072 21.657h-3.33V0h3.33v21.657zM78.228 20.8c-1.542.8-3.461 1.2-5.757 1.2-2.971 0-5.352-.938-7.142-2.814-1.79-1.876-2.686-4.338-2.686-7.386 0-3.276 1.005-5.924 3.014-7.943C67.677 1.838 70.224.83 73.3.83c1.98 0 3.624.28 4.928.842v3.372c-1.38-.82-2.904-1.229-4.57-1.229-2.22 0-4.02.71-5.4 2.129-1.372 1.419-2.058 3.314-2.058 5.686 0 2.257.643 4.057 1.928 5.4 1.286 1.333 2.977 2 5.072 2 1.933 0 3.61-.457 5.028-1.372V20.8zM42.157 14.229v7.428h-3.385V1.171h6.214c2.352 0 4.176.548 5.471 1.643S52.4 5.452 52.4 7.443c0 1.99-.676 3.619-2.029 4.886-1.352 1.266-3.18 1.9-5.485 1.9h-2.729zm0-10.258v7.486h2.2c1.457 0 2.567-.338 3.329-1.014.762-.676 1.143-1.629 1.143-2.857 0-2.41-1.4-3.615-4.2-3.615h-2.472zM35.8 21.657H24.457V1.171h3.4v17.615H35.8v2.871zM19.371 21.657h-3.714L5.871 6.6a6.677 6.677 0 01-.614-1.186h-.086c.077.438.115 1.376.115 2.815v13.428H2V1.171h3.957l9.457 14.7c.4.61.657 1.029.772 1.257h.057c-.095-.542-.143-1.461-.143-2.757v-13.2h3.271v20.486z" />
    </svg>
  );
});

export default Icon;
