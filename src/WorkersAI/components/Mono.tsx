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
      <path d="M-89.28 1.5H9.265v3.198l1.455.004V1.5zM7.36 3.347l1.516 1.517-1.032 1.025-1.513-1.513 1.03-1.029zM4.485 6.28h3.202l-.005 1.455H4.485V6.28zm1.848 3.36 1.515-1.516 1.026 1.032-1.512 1.512-1.03-1.029zm2.932 2.875V9.313l1.455.005v3.197H9.265zm3.36-1.845-1.517-1.517 1.032-1.026 1.514 1.514-1.03 1.029zM15.5 7.735h-3.202l.005-1.455H15.5v1.455zm-1.847-3.359-1.516 1.516-1.025-1.032 1.513-1.513 1.028 1.03zM2 1.829v.82h-.822v1.315H2v.821h1.314v-.82h.821V2.65h-.821v-.821H2zm0 12.842v-1.5H.5v-1.314H2v-1.499h1.314v1.499h1.5v1.314h-1.5v1.5H2z"></path>
    </svg>
  );
});

export default Icon;
