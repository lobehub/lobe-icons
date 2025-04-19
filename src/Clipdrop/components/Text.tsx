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
      viewBox="0 0 97 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M16.792 8.694h-3.515a3.437 3.437 0 00-.393-1.212 3.081 3.081 0 00-.763-.915 3.354 3.354 0 00-1.075-.578 4.112 4.112 0 00-1.309-.2c-.85 0-1.592.21-2.223.633-.631.418-1.12 1.028-1.469 1.83-.348.798-.521 1.766-.521 2.906 0 1.172.173 2.156.521 2.954.353.797.846 1.399 1.477 1.806.632.406 1.362.61 2.191.61.466 0 .897-.062 1.293-.185a3.397 3.397 0 001.067-.538 3.1 3.1 0 00.77-.875 3.41 3.41 0 00.434-1.171l3.515.016a6.558 6.558 0 01-2.135 4.053 6.835 6.835 0 01-2.167 1.3c-.834.316-1.779.474-2.833.474-1.466 0-2.777-.332-3.933-.996-1.15-.663-2.06-1.624-2.729-2.881C2.332 14.467 2 12.945 2 11.158c0-1.793.337-3.318 1.011-4.575.675-1.257 1.59-2.215 2.745-2.873 1.156-.664 2.456-.996 3.901-.996a8.43 8.43 0 012.649.402 6.716 6.716 0 012.175 1.171 6.029 6.029 0 011.54 1.87c.402.739.659 1.584.771 2.537zM22.64 2.939v16.438h-3.42V2.939h3.42zM25.378 19.377V7.049h3.42v12.328h-3.42zm1.718-13.918c-.508 0-.944-.168-1.308-.505a1.64 1.64 0 01-.538-1.228c0-.471.18-.875.538-1.212.364-.343.8-.514 1.308-.514s.942.171 1.3.514c.364.337.546.74.546 1.212 0 .476-.182.885-.546 1.228a1.83 1.83 0 01-1.3.505zM31.537 24V7.048h3.37V9.12h.153c.15-.331.367-.669.65-1.011a3.426 3.426 0 011.124-.867c.465-.235 1.043-.353 1.734-.353.899 0 1.728.235 2.488.706.76.466 1.367 1.17 1.822 2.111.455.937.682 2.111.682 3.524 0 1.375-.222 2.536-.666 3.483-.439.942-1.038 1.656-1.798 2.143-.755.482-1.6.723-2.536.723-.664 0-1.228-.11-1.694-.33a3.5 3.5 0 01-1.132-.826 4.198 4.198 0 01-.674-1.02h-.104V24h-3.42zm3.347-10.787c0 .733.101 1.372.305 1.918.203.546.497.971.883 1.276.385.3.853.45 1.404.45.557 0 1.028-.153 1.413-.458.385-.31.677-.738.875-1.284.203-.551.305-1.185.305-1.902 0-.712-.1-1.338-.297-1.878-.198-.541-.49-.964-.875-1.269-.386-.305-.859-.457-1.42-.457-.557 0-1.028.147-1.413.441-.38.295-.672.712-.875 1.252-.204.54-.305 1.178-.305 1.91zM50.382 19.577c-.936 0-1.784-.24-2.544-.722-.754-.487-1.354-1.201-1.798-2.143-.439-.947-.658-2.108-.658-3.483 0-1.413.227-2.587.682-3.524.455-.942 1.06-1.645 1.814-2.11a4.648 4.648 0 012.496-.707c.69 0 1.266.118 1.726.353.465.23.84.52 1.124.867.289.342.508.68.658 1.011h.104V2.94h3.411v16.438h-3.37v-1.975h-.145c-.16.343-.388.682-.682 1.02a3.388 3.388 0 01-1.132.826c-.46.22-1.022.33-1.686.33zm1.084-2.72c.551 0 1.017-.15 1.396-.45.386-.305.68-.73.883-1.276.209-.546.313-1.185.313-1.918 0-.733-.101-1.37-.305-1.91-.203-.541-.497-.958-.883-1.253-.385-.294-.853-.441-1.404-.441-.562 0-1.035.152-1.42.457-.386.305-.678.728-.876 1.268-.198.54-.297 1.167-.297 1.879 0 .717.1 1.35.297 1.902.204.546.495.974.875 1.284.386.305.859.457 1.42.457zM60.209 19.377V7.049h3.314v2.15h.128c.226-.765.603-1.342 1.132-1.733a2.975 2.975 0 011.83-.594 5.127 5.127 0 011.076.12v3.034a4.493 4.493 0 00-.666-.128 5.997 5.997 0 00-.779-.056c-.503 0-.952.11-1.349.329-.39.214-.7.514-.93.899-.225.385-.337.83-.337 1.332v6.975h-3.42zM74.454 19.618c-1.247 0-2.326-.265-3.236-.795a5.437 5.437 0 01-2.094-2.231c-.492-.958-.739-2.068-.739-3.331 0-1.274.247-2.387.739-3.34a5.372 5.372 0 012.094-2.23c.91-.535 1.989-.803 3.236-.803 1.246 0 2.322.268 3.226.803.909.53 1.61 1.273 2.102 2.23.492.953.74 2.066.74 3.34 0 1.263-.248 2.373-.74 3.33a5.422 5.422 0 01-2.102 2.232c-.904.53-1.98.795-3.227.795zm.015-2.65c.567 0 1.041-.16 1.42-.48.38-.327.667-.771.86-1.333.198-.562.297-1.201.297-1.918 0-.717-.1-1.357-.298-1.919-.192-.561-.478-1.005-.858-1.332-.38-.326-.854-.49-1.42-.49-.573 0-1.055.164-1.445.49-.386.326-.678.77-.875 1.332-.193.562-.29 1.202-.29 1.919 0 .717.097 1.356.29 1.918.197.562.49 1.006.875 1.332.39.321.872.482 1.444.482zM82.744 24V7.048h3.37V9.12h.154c.15-.331.366-.669.65-1.011.289-.348.663-.637 1.123-.867.466-.235 1.044-.353 1.735-.353.898 0 1.727.235 2.488.706.76.466 1.367 1.17 1.821 2.111.455.937.683 2.111.683 3.524 0 1.375-.222 2.536-.666 3.483-.44.942-1.038 1.656-1.798 2.143-.755.482-1.6.723-2.537.723-.663 0-1.227-.11-1.693-.33a3.501 3.501 0 01-1.132-.826 4.207 4.207 0 01-.674-1.02h-.104V24h-3.42zm3.347-10.787c0 .733.102 1.372.305 1.918.203.546.498.971.883 1.276.386.3.853.45 1.405.45.557 0 1.027-.153 1.412-.458.386-.31.677-.738.875-1.284.203-.551.306-1.185.306-1.902 0-.712-.1-1.338-.298-1.878-.198-.541-.49-.964-.874-1.269-.386-.305-.86-.457-1.421-.457-.557 0-1.027.147-1.413.441-.38.295-.672.712-.875 1.252-.203.54-.305 1.178-.305 1.91z" />
    </svg>
  );
});

export default Icon;
