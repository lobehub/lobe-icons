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
      viewBox="0 0 72 72"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M11.98 47.092c-.065-7.122-.25-14.245-.163-21.365.102-8.36 4.775-14.263 11.909-17.345C31.419 5.058 38.86 6.8 44.596 13.79c.05 4.09.25 7.665.198 11.581-7.86.59-15.654.33-21.078 7.677-4.149 4.682-7.943 9.363-11.736 14.044z"></path><path d="M61.16 29.99c4.873 2.688 4.483 7.445 1.578 13.39-5.277 10.8-15.207 16.26-26.158 20.3.554-1.78 1.43-3.245 2.462-5.029 1.44-2.732 3.447-5.024 3.874-7.58 1.389-8.31 2.2-16.718 3.624-25.086 5.135 1.337 9.877 2.67 14.62 4.005z"></path><path d="M38.885 58.97c-.876 1.465-1.751 2.93-2.674 4.72-5.717 4.51-11.739 4.59-17.75 1.396-5.572-2.96-7.998-7.847-7.154-14.764.34-1.203.382-1.803.424-2.403 0 0 .116-.417.182-.622 3.86-4.886 7.654-9.567 11.784-13.866-3.151 5.832-3.072 11.951-2.585 17.997.339 4.209 2.752 7.752 7.038 8.378 3.464.505 7.148-.5 10.735-.835zM61.014 29.68c-4.597-1.024-9.34-2.358-14.576-3.94-.795-.403-1.094-.557-1.394-.71-.199-3.575-.398-7.15-.285-10.944 5.578 4.947 10.843 10.116 16.255 15.594z"></path><path d="M71.318 46.092c-.033-.56.098-.959.23-1.357.11.108.329.241.311.32-.092.408-.245.801-.54 1.037z"></path>
    </svg>
  );
});

export default Icon;
