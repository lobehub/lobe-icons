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
      viewBox="0 0 135 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M11.96 15.469H6.414L5.26 19.015c-.048.144-.144.192-.288.192H2.186c-.168 0-.216-.072-.168-.24L6.822 5.14c.095-.24.192-.528.216-1.439 0-.12.072-.167.168-.167h3.819c.12 0 .167.024.191.12l5.476 15.338c.05.144.025.216-.143.216h-3.123c-.12 0-.192-.048-.264-.144l-1.2-3.595-.001.001zm-4.682-2.972h3.77c-.456-1.582-1.416-4.483-1.896-6.208h-.025c-.384 1.63-1.225 4.266-1.85 6.208zm15.81 6.949c-3.554 0-6.268-1.99-6.268-6.063 0-3.451 2.57-6.303 6.965-6.303.192 0 .409 0 .768.024V2.383c0-.12.072-.168.168-.168h3.05c.097 0 .12.048.12.144v14.163c0 .577.048 1.294.097 1.75 0 .144-.024.192-.144.24a12.15 12.15 0 01-4.756.935v-.001zm1.465-2.971v-6.52c-.24-.07-.552-.095-.888-.095-1.826 0-3.41 1.103-3.41 3.355 0 2.372 1.368 3.403 3.17 3.403.408 0 .793-.048 1.128-.143zM35.452 7.08c3.842 0 5.836 2.9 5.836 6.11 0 3.764-2.426 6.257-5.908 6.257-4.084 0-5.909-3.068-5.909-6.16 0-3.403 2.258-6.208 5.982-6.208l-.001.001zm-.144 2.78c-1.417 0-2.473 1.222-2.473 3.38 0 2.084.983 3.426 2.617 3.426 1.393 0 2.45-1.174 2.45-3.379 0-1.893-.793-3.427-2.594-3.427zm7.727-7.645h2.907c.191 0 .24.048.24.216l.023 4.914c.6-.193 1.297-.265 2.018-.265 3.53 0 5.764 2.492 5.764 5.704 0 4.457-3.554 6.662-7.23 6.662-1.248 0-2.546-.144-3.746-.551a.23.23 0 01-.168-.216V2.407c0-.144.072-.192.192-.192zm7.541 10.88c0-2.18-1.272-3.21-2.977-3.21-.746 0-1.081.119-1.394.214v6.495c.289.048.578.072.89.072 1.8 0 3.481-1.102 3.481-3.57zM63.08 14.15h-4.707c.12 1.366 1.104 2.492 3.433 2.492a7.814 7.814 0 002.955-.551c.096-.048.168-.024.168.095v2.278c0 .191-.048.24-.168.311-.961.432-2.018.67-3.7.67-4.49 0-6.075-3.09-6.075-6.038 0-3.331 2.017-6.328 5.788-6.328 3.65 0 5.092 2.781 5.092 5.177 0 .72-.048 1.343-.12 1.582-.024.12-.072.168-.193.193-.336.071-1.249.12-2.473.12zm-4.707-2.348h3.121c.769 0 1.13-.025 1.201-.049.024-.024.024-.12.024-.143 0-.6-.48-1.918-2.066-1.918-1.512 0-2.137 1.127-2.281 2.109zm17.467 1.342v5.87c0 .145-.072.193-.193.193H72.67c-.12 0-.168-.072-.168-.192V3.7c0-.12.048-.167.192-.167h9.51c.145 0 .193.048.217.191l.263 2.589c.024.143-.047.192-.191.192H75.84v3.642h5.98c.144 0 .216.048.216.193v2.611c0 .145-.072.193-.192.193H75.84zm8.016 5.847V7.511c0-.144.072-.191.217-.191h2.953c.144 0 .193.023.193.19v11.481c0 .168-.049.216-.217.216h-2.906c-.143 0-.24-.048-.24-.216zM85.562 6.05c-1.13 0-1.874-.768-1.874-1.87 0-1.103.793-1.87 1.898-1.87 1.153 0 1.849.791 1.849 1.87 0 1.126-.768 1.87-1.873 1.87zm3.84 1.27h2.617c.145 0 .217.047.29.19.14.435.22.887.239 1.344.793-.935 2.137-1.774 3.819-1.774.169 0 .216.048.216.192v2.924c0 .144-.047.168-.24.168-1.73-.048-3.098.454-3.626 1.054v7.597c0 .168-.072.192-.217.192h-2.906c-.168 0-.24-.048-.24-.216v-8.245c0-1.054-.025-2.42-.12-3.283 0-.12.047-.143.168-.143zm15.756 6.83h-4.708c.12 1.366 1.105 2.492 3.434 2.492a7.818 7.818 0 002.955-.551c.096-.048.168-.024.168.095v2.278c0 .191-.048.24-.168.311-.96.432-2.018.67-3.699.67-4.49 0-6.076-3.09-6.076-6.038 0-3.331 2.017-6.328 5.787-6.328 3.651 0 5.093 2.781 5.093 5.177 0 .72-.048 1.343-.12 1.582-.024.12-.072.168-.193.193-.335.071-1.248.12-2.473.12zm-4.708-2.348h3.123c.768 0 1.128-.025 1.2-.049.024-.024.024-.12.024-.143 0-.6-.48-1.918-2.065-1.918-1.514 0-2.138 1.127-2.282 2.109zm9.523-1.703h-1.442c-.096-.023-.144-.071-.144-.215V7.463c0-.12.048-.143.144-.143h1.442v-.384c0-1.127.167-1.99.504-2.707.624-1.343 1.777-2.229 3.747-2.229.48 0 .936.047 1.224.142.144.073.168.12.168.265v2.372c0 .095-.048.168-.192.144-.216-.072-.504-.072-.696-.072-.889 0-1.417.479-1.417 1.822v.647h2.042c.167 0 .191.047.191.167v2.397c0 .144-.048.192-.191.215h-2.042v8.892c0 .144-.024.216-.24.216h-2.883c-.168 0-.215-.048-.215-.216v-8.893.001zm6.453 6.04V2.429c0-.142.072-.214.24-.214h2.882c.144 0 .216.072.216.216v13.42c0 .671.216.91.792.91.193 0 .24 0 .433-.022.096 0 .12.023.12.143v2.085c0 .168-.024.216-.144.287-.312.12-.744.193-1.514.193-1.705 0-3.025-.648-3.025-3.308zm4.928-8.82h3.218c.12 0 .192.024.24.168 1.37 4.075 2.113 6.591 2.426 7.813.792-2.516 1.537-4.817 2.45-7.813.047-.12.144-.167.264-.167h2.882c.168 0 .193.071.144.215-1.705 5.344-4.371 11.984-6.172 16.057-.048.12-.096.168-.313.192l-3.026.216c-.167 0-.217-.072-.144-.216.72-1.414 1.44-3.02 2.21-4.817.048-.144.072-.216.024-.383-.673-1.654-2.955-7.31-4.371-11.073-.048-.12.024-.191.168-.191z"></path>
    </svg>
  );
});

export default Icon;
