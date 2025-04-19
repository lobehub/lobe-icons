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
      viewBox="0 0 147 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M97.953 15.439a3.721 3.721 0 01-7.437 0V6.485a3.721 3.721 0 017.436 0v.139h2.847v-.107a6.568 6.568 0 00-13.129 0v8.922a6.56 6.56 0 1013.122 0v-.12h-2.846l.007.12zm14.784-9.64a5.617 5.617 0 00-5.667 5.32v5.497a5.665 5.665 0 009.44 3.637 5.665 5.665 0 001.837-3.637v-5.503a5.603 5.603 0 00-5.61-5.314zm2.789 10.496a2.79 2.79 0 01-5.579 0v-4.854a2.79 2.79 0 015.579 0v4.854zM105.042 0h-2.833v21.584h2.833V0zM26.878 5.8h-2.834v15.784h2.834V5.8zM21.21 0h-2.833v21.584h2.834V0zm-9.986 0H7.73L2 21.553h2.827l1.524-5.73h6.296l1.518 5.667h2.827L11.224.013V0zm.63 13.046h-4.76l2.38-8.94 2.38 8.94zm117.002 3.545a2.797 2.797 0 01-5.592 0V5.8h-2.839v11.258A4.878 4.878 0 00122.408 21a4.888 4.888 0 004.351.736c.271-.078.533-.186.781-.32.433-.223.83-.51 1.177-.85l.126-.12v1.158h2.859V5.8h-2.846v10.792zM26.878 0h-2.834v2.84h2.834V0zm9.205 5.78a4.861 4.861 0 00-3.413 1.398l-.12.12V0h-2.84v21.584h2.84v-1.158l.12.12a4.887 4.887 0 008.3-3.489v-6.39a4.893 4.893 0 00-4.887-4.887zm2.084 5.403v5.358a2.802 2.802 0 01-5.604 0v-5.358a2.802 2.802 0 015.604 0zM62.503 5.78a4.86 4.86 0 00-3.419 1.398l-.12.12V0h-2.833v21.584h2.834v-1.158l.12.12a4.887 4.887 0 008.298-3.489v-6.39a4.893 4.893 0 00-4.88-4.887zm2.078 5.403v5.352a2.802 2.802 0 11-5.604 0v-5.352a2.802 2.802 0 015.604 0zM142.173 0v7.298l-.12-.12a4.877 4.877 0 00-5.31-1.017 4.884 4.884 0 00-2.989 4.505v6.41a4.89 4.89 0 005.803 4.772 4.883 4.883 0 002.496-1.302l.12-.12v1.158h2.84V0h-2.84zm0 11.183v5.352a2.81 2.81 0 01-2.802 2.802 2.8 2.8 0 01-2.802-2.802v-5.352a2.798 2.798 0 012.802-2.802 2.8 2.8 0 012.802 2.802zm-88.082-.044a4.722 4.722 0 00-.057-.555v-.075a5.793 5.793 0 00-.97-2.368 5.535 5.535 0 00-4.212-2.348h-.327a5.667 5.667 0 00-5.579 4.609h2.783a2.803 2.803 0 012.74-2.26 2.808 2.808 0 012.77 2.694v1.322h-4.024a4.88 4.88 0 00-1.26 9.603h.077l.27.063.34.05h.07c.244.026.49.038.736.038a5.35 5.35 0 001.706-.246 4.792 4.792 0 001.934-1.165l.126-.12v1.16h2.833v-1.89l.044-8.512zm-6.334 3.148h3.482v1.996a3.148 3.148 0 01-2.576 3.098 2.817 2.817 0 01-.63.075 2.847 2.847 0 01-1.435-.403 3.015 3.015 0 01-.365-.233 2.829 2.829 0 01-.434-.434l-.032-.038a2.519 2.519 0 012.009-4.061h-.02zm32.786-3.136a4.722 4.722 0 00-.057-.554v-.075a5.766 5.766 0 00-.97-2.362 5.572 5.572 0 00-4.212-2.355h-.327a5.667 5.667 0 00-5.58 4.597h2.778a2.79 2.79 0 015.528.428v1.322h-4.03a4.88 4.88 0 00-1.228 9.603h.076l.27.063.34.05h.07c.245.028.49.043.737.044a5.35 5.35 0 001.706-.246 4.937 4.937 0 001.933-1.165l.126-.12v1.16h2.833v-1.89l.007-8.5zM74.208 14.3h3.476v2.022a3.149 3.149 0 01-2.575 3.098 2.811 2.811 0 01-.63.075 2.846 2.846 0 01-1.436-.403 2.404 2.404 0 01-.365-.233 2.879 2.879 0 01-.44-.434v-.038a2.48 2.48 0 01-.523-1.524 2.518 2.518 0 012.493-2.537V14.3z" />
    </svg>
  );
});

export default Icon;
