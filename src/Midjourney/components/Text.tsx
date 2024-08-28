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
      style={{ flex: 'none', lineHeight: 1, width: 'fit-content', ...style }}
      viewBox="0 0 134 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M2 19.87V3.125h3.217l2.068 7.226 2.16-7.226h3.239v16.747h-2.183v-7.685c0-.811.016-1.71.046-2.696.03-.986.073-1.973.127-2.96l.083-1.407c.029-.446.058-.867.089-1.265l-2.62 8.58h-1.93L3.77 4.065c.138 1.116.238 2.359.299 3.727.061 1.37.092 2.834.092 4.394v7.685H2zm13.556 0v-2.064h4.434V9.318h-3.974V7.253h6.25v10.553h4.158v2.065H15.556zM20.91 5.029c-.521 0-.935-.134-1.241-.401-.307-.268-.46-.631-.46-1.09 0-.474.153-.849.46-1.124.306-.275.72-.413 1.24-.413.521 0 .935.138 1.241.413.307.275.46.65.46 1.124 0 .459-.153.822-.46 1.09-.306.267-.72.401-1.24.401zM32.926 20.1c-1.271 0-2.282-.424-3.033-1.273-.75-.849-1.126-2-1.126-3.453V11.75c0-1.453.376-2.604 1.126-3.453.75-.849 1.762-1.273 3.033-1.273.934 0 1.712.237 2.332.711.564.431.929 1.008 1.094 1.73l.044.22-.046-2.936V3.124h2.274v16.747h-2.251v-2.455c-.138.841-.514 1.499-1.126 1.973-.613.474-1.387.711-2.32.711zm.781-1.973c.812 0 1.455-.252 1.93-.757.475-.505.713-1.216.713-2.133v-3.35c0-.917-.238-1.628-.713-2.133-.475-.505-1.118-.757-1.93-.757-.842 0-1.497.218-1.964.654-.467.436-.7 1.143-.7 2.122v3.578c0 .98.233 1.687.7 2.122.467.436 1.122.654 1.964.654zM42.094 24v-2.065h2.964c.903 0 1.604-.248 2.102-.745.498-.497.747-1.19.747-2.076V9.318h-5.928V7.253h8.202v11.884c0 1.483-.46 2.665-1.378 3.544-.92.88-2.152 1.319-3.7 1.319h-3.01zm6.755-18.972c-.521 0-.935-.134-1.241-.401-.306-.268-.46-.631-.46-1.09 0-.474.154-.849.46-1.124.306-.275.72-.413 1.24-.413.522 0 .935.138 1.241.413.307.275.46.65.46 1.124 0 .459-.153.822-.46 1.09-.306.267-.72.401-1.24.401zm11.327 15.026c-1.547 0-2.776-.443-3.688-1.33-.911-.887-1.367-2.126-1.367-3.717v-2.89c0-1.59.456-2.83 1.367-3.717.912-.887 2.141-1.33 3.688-1.33 1.547 0 2.776.443 3.688 1.33.911.887 1.367 2.126 1.367 3.717v2.89c0 1.59-.456 2.83-1.367 3.717-.912.887-2.14 1.33-3.688 1.33zm0-1.996c.858 0 1.536-.24 2.033-.722.498-.482.747-1.19.747-2.122V11.91c0-.933-.249-1.64-.747-2.122-.497-.481-1.175-.722-2.033-.722-.858 0-1.536.24-2.033.722-.498.482-.747 1.19-.747 2.122v3.304c0 .933.249 1.64.747 2.122.497.482 1.175.722 2.033.722zM73.364 20.1c-1.485 0-2.672-.436-3.56-1.308-.89-.871-1.334-2.057-1.334-3.555V7.253h2.275v7.984c0 .887.234 1.586.7 2.099.468.512 1.108.768 1.92.768.827 0 1.478-.256 1.952-.768.475-.513.713-1.212.713-2.1V7.254h2.274v7.984c0 1.498-.448 2.684-1.344 3.555-.896.872-2.094 1.308-3.596 1.308zm8.823-.23V7.254h2.252v2.432h.023c.123-.826.479-1.476 1.068-1.95.59-.474 1.375-.711 2.355-.711 1.302 0 2.313.401 3.033 1.204.72.803 1.08 1.931 1.08 3.384v1.101h-2.274v-1.078c0-1.759-.866-2.638-2.597-2.638-.873 0-1.535.252-1.987.757-.452.505-.678 1.223-.678 2.156v7.96h-2.275zm12.752 0V7.254h2.252v2.41h.023c.107-.827.456-1.473 1.045-1.94.59-.466 1.367-.699 2.332-.699 1.256 0 2.26.398 3.01 1.193s1.126 1.866 1.126 3.212v8.442h-2.275v-8.075c0-.918-.23-1.622-.689-2.11-.46-.49-1.087-.735-1.884-.735-.827 0-1.478.256-1.953.768-.475.513-.712 1.228-.712 2.145v8.007h-2.275zm18.083.23c-1.517 0-2.738-.451-3.665-1.353-.927-.903-1.39-2.134-1.39-3.694v-2.982c0-1.56.463-2.791 1.39-3.694.927-.902 2.148-1.353 3.665-1.353 1.01 0 1.895.203 2.653.608a4.396 4.396 0 011.77 1.698c.42.726.631 1.57.631 2.534v2.272h-7.88v1.1c0 .918.252 1.637.758 2.157.505.52 1.194.78 2.068.78.735 0 1.34-.138 1.815-.413.475-.275.758-.657.85-1.147h2.274c-.153 1.07-.681 1.92-1.585 2.547-.904.627-2.022.94-3.354.94zm-2.827-8.236v.597h5.653v-.597c0-.963-.245-1.705-.736-2.225-.49-.52-1.187-.78-2.09-.78-.904 0-1.601.26-2.091.78-.49.52-.736 1.262-.736 2.225zM123.361 24l1.838-4.886-4.71-11.86h2.412l2.85 7.455c.122.321.245.665.367 1.032.123.367.207.689.253.964a8.49 8.49 0 01.23-.964c.107-.367.222-.71.344-1.032l2.642-7.456H132L125.727 24h-2.366z"></path>
    </svg>
  );
});

export default Icon;