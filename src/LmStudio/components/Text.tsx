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
      viewBox="0 0 138 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M115.208 5.9V21.63h2.417V5.9h-2.417zM115.219 2.796c.341.321.747.481 1.218.481.472 0 .874-.16 1.209-.48.341-.322.512-.708.512-1.158 0-.45-.171-.837-.512-1.158A1.684 1.684 0 00116.437 0c-.471 0-.877.16-1.218.481-.335.321-.502.707-.502 1.158 0 .45.167.836.502 1.157z" />
      <path
        clipRule="evenodd"
        d="M124.705 20.945c1.072.676 2.318 1.014 3.739 1.014 1.42 0 2.663-.338 3.728-1.014 1.072-.676 1.905-1.622 2.499-2.837.601-1.215.901-2.636.901-4.26 0-1.64-.3-3.07-.901-4.292-.594-1.222-1.427-2.171-2.499-2.847-1.065-.676-2.308-1.014-3.728-1.014-1.421 0-2.667.338-3.739 1.014-1.065.676-1.898 1.625-2.499 2.847-.594 1.222-.891 2.653-.891 4.291 0 1.625.297 3.046.891 4.261.601 1.215 1.434 2.161 2.499 2.837zm6.402-1.987c-.697.553-1.585.83-2.663.83-1.079 0-1.967-.277-2.663-.83-.697-.553-1.212-1.28-1.547-2.181a8.365 8.365 0 01-.502-2.93c0-1.051.168-2.031.502-2.94.335-.907.85-1.641 1.547-2.201.696-.56 1.584-.84 2.663-.84 1.078 0 1.966.28 2.663.84.696.56 1.212 1.294 1.546 2.202.335.908.502 1.888.502 2.94 0 1.05-.167 2.027-.502 2.928-.334.902-.85 1.629-1.546 2.182zM103.235 21.959c-1.311 0-2.468-.331-3.472-.994-1.003-.669-1.789-1.61-2.355-2.826-.567-1.223-.85-2.667-.85-4.333 0-1.652.283-3.086.85-4.301.566-1.216 1.355-2.155 2.365-2.817 1.011-.662 2.179-.993 3.503-.993 1.025 0 1.834.17 2.428.512.601.334 1.058.717 1.372 1.147.321.423.57.771.748 1.044h.205V.655h2.417v20.976h-2.335v-2.417h-.287c-.178.287-.43.649-.758 1.086-.328.43-.796.816-1.403 1.157-.608.335-1.417.502-2.428.502zm.328-2.171c.97 0 1.789-.253 2.458-.758.669-.512 1.178-1.219 1.526-2.12.348-.909.523-1.957.523-3.145 0-1.174-.171-2.202-.512-3.083-.342-.887-.847-1.577-1.516-2.068-.669-.499-1.496-.748-2.479-.748-1.024 0-1.878.263-2.56.789-.676.518-1.185 1.225-1.526 2.12-.335.887-.502 1.884-.502 2.99 0 1.12.17 2.137.512 3.052.348.909.86 1.632 1.536 2.172.683.532 1.53.799 2.54.799z"
      />
      <path d="M90.45 5.9v9.3c0 .983-.214 1.792-.645 2.427-.423.635-.949 1.106-1.577 1.413-.621.307-1.232.46-1.833.46-1.004 0-1.83-.34-2.479-1.023-.642-.683-.962-1.598-.962-2.745V5.899h-2.418v9.997c0 1.338.219 2.448.656 3.328.437.874 1.038 1.53 1.802 1.967.765.43 1.64.645 2.622.645 1.189 0 2.172-.276 2.95-.83.778-.56 1.352-1.239 1.72-2.038h.165v2.663h2.417V5.9H90.45zM76.9 5.9v2.048h-3.359v9.177c0 .683.099 1.195.297 1.536.205.335.464.56.778.676.321.11.66.164 1.014.164.267 0 .485-.014.656-.041l.41-.082.491 2.171a4.923 4.923 0 01-.686.185 5.05 5.05 0 01-1.117.102 4.865 4.865 0 01-2.007-.44 3.987 3.987 0 01-1.618-1.342c-.424-.6-.635-1.359-.635-2.274V7.948h-2.376V5.899h2.376V2.13h2.417V5.9h3.36zM61.97 3.482c.874.574 1.372 1.38 1.495 2.417h2.458a4.898 4.898 0 00-.983-2.837c-.614-.833-1.447-1.488-2.499-1.966C61.39.61 60.188.369 58.836.369c-1.338 0-2.55.246-3.636.737-1.079.485-1.94 1.168-2.581 2.049-.635.874-.953 1.898-.953 3.072 0 1.414.478 2.557 1.434 3.431.956.874 2.254 1.547 3.892 2.018l2.581.737c.738.205 1.424.444 2.059.717.635.273 1.147.628 1.536 1.065.39.438.584 1.004.584 1.7 0 .765-.225 1.435-.676 2.008-.45.567-1.062 1.01-1.833 1.332-.772.314-1.642.47-2.612.47a7.215 7.215 0 01-2.335-.368c-.717-.253-1.311-.635-1.782-1.147-.465-.519-.73-1.175-.8-1.966h-2.621c.082 1.147.433 2.154 1.055 3.02.628.868 1.488 1.544 2.58 2.029 1.1.485 2.4.727 3.903.727 1.611 0 2.98-.27 4.107-.81 1.134-.539 1.994-1.266 2.581-2.18.594-.916.891-1.94.891-3.073 0-.983-.201-1.813-.604-2.49a5.266 5.266 0 00-1.536-1.658 8.417 8.417 0 00-1.936-1.035c-.67-.252-1.277-.45-1.823-.594l-2.13-.573c-.39-.103-.816-.236-1.28-.4a7.482 7.482 0 01-1.332-.645 3.543 3.543 0 01-1.045-.994c-.266-.402-.4-.884-.4-1.444 0-.669.192-1.266.574-1.792.39-.526.929-.939 1.618-1.24.697-.3 1.51-.45 2.438-.45 1.27 0 2.342.287 3.216.86zM18.224.655h3.031l7.129 17.412h.245L35.758.655h3.032v20.976h-2.377V5.695h-.204L29.654 21.63h-2.295L20.804 5.695H20.6V21.63h-2.377V.655zM2 .655v20.976h12.29v-2.253H4.54V.655H2z" />
    </svg>
  );
});

export default Icon;
