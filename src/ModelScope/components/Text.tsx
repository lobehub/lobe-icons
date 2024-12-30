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
      viewBox="0 0 537.239990234375 83.32599639892578"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <g>
        <path d="M113.16 17.627H98.737V65.699h41.667V17.627H113.16zm.001 37.657h12.82V28.043h-12.82v27.241zM340.57 17.627V65.699h38.46V55.284H355V28.042h24.03V17.627H355zM403.44 17.627h-14.423V65.699h41.667V17.627H403.44zm0 37.657h12.821V28.043H403.44v27.241zM456.44 17.627h-14.423v65.699h14.423V65.699h27.244V17.627H456.44zm.001 37.657h12.82V28.043h-12.82v27.241zM179.7 17.627h-27.243v48.072h41.667V0H179.7v17.627zm-12.82 37.657h12.82V28.043h-12.82v27.241zM261.24 65.699h14.42V0h-14.42zM220.96 17.627h-14.423v48.474h41.667V55.284H220.96v-8.011h27.244V17.627H220.96zm0 19.23h12.82v-8.815h-12.82v8.815zM510 37.057h12.82v-9.014H510v9.014zm12.82-19.43h-27.244V65.7h41.667V55.284H510v-7.811h27.243V17.627H522.82zM288.03 7.157V40.558h27.25v14.726h-27.25v10.415h41.67V30.142h-27.25v-12.57h27.25V7.157h-27.25zM28.835 8.013H14.423v28.843H0v14.422h14.423V65.7h14.423V51.278H14.423V36.857h14.423V22.434h14.412V8.013H28.846zM43.266 36.856v14.421h14.423V22.435H43.266zM57.697 8.013v14.421H72.12V65.7h14.424V8.013H72.12z" />
      </g>
    </svg>
  );
});

export default Icon;
