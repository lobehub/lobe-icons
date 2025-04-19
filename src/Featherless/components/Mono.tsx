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
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M22.724 3.088C21.527 2.376 19.91 2 18.044 2c-2.854 0-6 .877-8.826 2.403l-.02-.007-.004.021c-.855.464-1.684.981-2.462 1.558C2.147 9.376.863 13.412 1.947 15.57.76 17.542.03 19.583 0 22c2.28-4.233 3.648-7.663 11.076-13.438-2.122.443-5.79 2.545-8.258 5.735-.233-1.866 1.28-4.879 4.65-7.379.428-.316.871-.612 1.324-.893-.354 1.071-.24.805-.975 2.307 1.086-1.001 1.8-1.62 2.873-3.335a18.995 18.995 0 014.276-1.465c-.238.767-.69 2.067-1.302 3.095 0 0 1.553-.324 2.837-.25-.701.753-1.333 1.569-1.973 2.403-.876 1.142-1.782 2.322-2.943 3.421-.14.133-.273.253-.408.377-1.784-.167-2.961.483-4.065 1.63.87-.395 2.04-.72 2.772-.524-1.35 1.073-3.477 2.487-5.224 2.37-.332.492-.353.507-.717 1.1 2.835.688 6.395-2.118 8.49-4.103 1.229-1.164 2.165-2.383 3.07-3.56 1.862-2.427 3.471-4.523 7.04-5.32L24 3.846l-1.276-.758z" />
    </svg>
  );
});

export default Icon;
