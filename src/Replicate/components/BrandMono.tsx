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
      viewBox="0 0 108 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M26.621 8.045c2.832 0 5.224 1.829 5.348 5.231l.005.28c0 .237 0 .438-.025.801H23.21c.113 1.816 1.58 3.018 3.423 3.018 1.554 0 2.595-.714 3.171-1.69l1.868 1.327c-1.003 1.578-2.733 2.58-5.064 2.58-3.372 0-5.804-2.392-5.804-5.774.012-3.268 2.444-5.773 5.816-5.773zm-3.284 4.521h6.18c-.263-1.603-1.555-2.467-2.984-2.467s-2.87.827-3.196 2.467zM34.46 8.258h2.444v1.49c.627-.889 1.981-1.703 3.573-1.703 3.046 0 5.353 2.593 5.353 5.773 0 3.169-2.307 5.774-5.353 5.774-1.605 0-2.958-.827-3.573-1.716V24h-2.444V8.258zm5.578 2.004c-1.98 0-3.334 1.553-3.334 3.556 0 2.004 1.354 3.557 3.334 3.557 1.956 0 3.31-1.553 3.31-3.557 0-2.003-1.354-3.556-3.31-3.556zm10.726-7.56H48.32v16.644h2.445V2.703zm4.514 3.132c-.89 0-1.642-.727-1.642-1.64 0-.89.752-1.616 1.642-1.616.915 0 1.617.738 1.617 1.615 0 .914-.702 1.64-1.617 1.64zM54.063 8.25h2.444v11.095h-2.444V8.251zM64.85 19.576c-3.334 0-5.867-2.492-5.867-5.773 0-3.281 2.533-5.773 5.867-5.773 2.294 0 4.224 1.227 5.177 3.068l-2.13 1.152c-.54-1.127-1.618-1.954-3.047-1.954-1.98 0-3.372 1.528-3.372 3.507s1.404 3.506 3.372 3.506c1.416 0 2.507-.826 3.046-1.953l2.131 1.152c-.953 1.853-2.896 3.068-5.177 3.068zm11.97-11.53c1.605 0 2.934.826 3.56 1.702v-1.49h2.445v11.096H80.38v-1.49c-.626.889-1.955 1.715-3.56 1.715-3.046 0-5.352-2.592-5.352-5.773 0-3.168 2.306-5.76 5.352-5.76zm.452 2.216c-1.981 0-3.31 1.553-3.31 3.556 0 2.004 1.329 3.557 3.31 3.557 1.98 0 3.309-1.553 3.309-3.557 0-2.003-1.341-3.556-3.31-3.556zm9.741 9.098v-8.93h-2.319V8.253h2.32V5.17h2.444v3.08h4.212v2.18h-4.212v6.737h4.212v2.192h-6.657zM19.663 0v2.18H4.444V19.36H2V0h17.663zm.004 4.132v2.179H9.062v13.05H6.617V4.131h13.05zm-.004 4.116v2.192h-5.992v8.917h-2.444V8.248h8.436zm80.985-.203c2.832 0 5.224 1.829 5.348 5.231l.004.512a9.524 9.524 0 01-.024.569h-8.737c.113 1.816 1.58 3.018 3.422 3.018 1.554 0 2.595-.714 3.172-1.69l1.867 1.327c-1.003 1.578-2.732 2.58-5.064 2.58-3.372 0-5.804-2.392-5.804-5.774.025-3.268 2.444-5.773 5.816-5.773zm-3.284 4.521h6.18c-.263-1.603-1.554-2.467-2.983-2.467-1.417 0-2.858.827-3.197 2.467z" />
    </svg>
  );
});

export default Icon;
