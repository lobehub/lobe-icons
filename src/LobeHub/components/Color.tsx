'use client';

import { memo } from 'react';

import { useFillIds } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  const [a, b, c, d, e, f, g, h, i, j, k, l, m, n] = useFillIds(TITLE, 14);
  return (
    <svg
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 320 320"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path
        d="M294 172.519c0 75.655-59.442 128.5-134 128.5-74.558 0-134-53.845-134-129.5 0-22.5 5-32.141 31.5-35.671 47.5-6.329 72.542-3.829 102.5-3.829 29.959 0 72.556-1.27 102.5 3.829 24.5 4.171 30 8.671 31.5 36.671z"
        fill={a.fill}
      />
      <path
        d="M159.75 242.51c-28.25 0-35.75 3.5-35.75 3.5s3.5 27 35.75 27 35.75-27 35.75-27-7.5-3.5-35.75-3.5z"
        fill="#972021"
      />
      <path
        d="M271.999 148.517c0 6.351-49.92 11.5-111.5 11.5s-111.5-5.149-111.5-11.5c0-6.352 49.92-11.5 111.5-11.5s111.5 5.148 111.5 11.5z"
        fill={b.fill}
      />
      <path
        d="M135.503 160.013c.633-14.972-.483-22.788-5.5-36.443 0 0 9.5-12.056 27-12.056s30 3.064 30 3.064c-3.028 16.793-3.182 26.921-2.5 45.435h-49z"
        fill={c.fill}
      />
      <path
        d="M119.191 234.294c14.742-7.076 24.811-21.51 24.811-39.273 0-25.406-20.595-48-46-48s-47 19.594-47 45c0 13.983 6.542 26.812 16.662 35.521 5.893-2.245 12.652-3.521 19.838-3.521 12.705 0 24.077 3.989 31.689 10.273zM200.813 234.294c-14.742-7.076-24.811-21.51-24.811-39.273 0-25.406 20.595-48 46-48s47 19.594 47 45c0 13.983-6.543 26.812-16.662 35.521-5.893-2.245-12.652-3.521-19.838-3.521-12.705 0-24.077 3.989-31.689 10.273z"
        fill="#fff"
      />
      <path
        d="M101 221.012c15.464 0 28-12.536 28-28s-12.536-28-28-28-28 12.536-28 28 12.536 28 28 28z"
        fill={d.fill}
      />
      <path
        d="M219 221.012c-15.464 0-28-12.536-28-28s12.536-28 28-28 28 12.536 28 28-12.536 28-28 28z"
        fill={e.fill}
      />
      <g filter={f.fill}>
        <path
          d="M172.997 19.016c-14.027 0-19.5-11.5-41-11-23.394 0-34 13-45.5 23-1.958 1.702-11.5 7-16 9-19.683 8.748-34.5 21.5-34.5 40.5 0 20.711 17.461 37.5 39 37.5 3.536 0 6.963-.453 10.22-1.301 8.7 10.539 22.179 16.658 37.28 17.301 23.5 1 31-15.25 44.5-8.5 9.259 4.629 13.83 8.5 28.5 8.5 17.108 0 25.057-5.233 30-11 9-10.5 22.879-4 31.5-4 18.778 0 34-14.551 34-32.5 0-17.95-15.222-32.5-34-32.5-5.15 0-14.856 1.27-17-7-3.5-13.5-20.148-29-44-29-9.318 0-17.691 1-23 1z"
          fill={g.fill}
        />
      </g>
      <path d="M82.998 20.517a9.5 9.5 0 11-19 0 9.5 9.5 0 0119 0z" fill={h.fill} />
      <path
        d="M71.002 108.021c0 8.836-7.163 16-16 16s-16-7.164-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"
        fill={i.fill}
      />
      <path
        d="M282.002 49.516c0 8.56-6.94 15.5-15.5 15.5-8.56 0-15.5-6.94-15.5-15.5 0-8.56 6.94-15.5 15.5-15.5 8.56 0 15.5 6.94 15.5 15.5z"
        fill={j.fill}
      />
      <path
        d="M132.232 244.111c5.483-.823 14.191-1.601 27.515-1.601 12.212 0 20.546.654 26.073 1.396-1.542 5.861-12.963 8.104-26.823 8.104-13.698 0-25.013-2.191-26.765-7.899z"
        fill="#fff"
      />
      <path
        d="M160.006 290.016c20.099 0 23.305-20.488 23.927-25.61.478-4.146-1.675-6.244-4.02-7.659-2.345-1.414-9.379-2.731-19.907-2.731-10.527 0-17.514 1.317-19.906 2.731-2.393 1.415-4.546 3.513-4.02 7.659.622 5.122 3.828 25.61 23.926 25.61z"
        fill={k.fill}
      />
      <g filter={l.fill}>
        <path
          d="M171.694 129.744c-5.721-3.89-13.954-4.248-19.786-.526-7.724 4.929-16.971 7.798-26.91 7.798-27.062 0-49-21.267-49-47.5 0-26.234 21.938-47.5 49-47.5 13.628 0 25.956 5.392 34.838 14.097 4.948 4.85 13.088 6.24 19.498 3.609a42.502 42.502 0 0116.164-3.166c22.92 0 41.5 18.012 41.5 40.23 0 22.218-18.58 40.23-41.5 40.23-8.856 0-17.065-2.69-23.804-7.272z"
          fill={m.fill}
        />
      </g>
      <path
        d="M219.002 106.51c0 7.456-6.044 13.5-13.5 13.5s-13.5-6.044-13.5-13.5 6.044-13.5 13.5-13.5 13.5 6.044 13.5 13.5z"
        fill={n.fill}
      />
      <defs>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="rotate(-57.041 328.447 55.73) scale(238.957 377.848)"
          gradientUnits="userSpaceOnUse"
          id={a.id}
          r="1"
        >
          <stop stopColor="#FCBD72" />
          <stop offset=".255" stopColor="#FAC371" />
          <stop offset=".465" stopColor="#FFA14C" />
          <stop offset=".64" stopColor="#EB7A34" />
          <stop offset=".845" stopColor="#F0866D" />
        </radialGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="rotate(90 26.49 47.007) scale(9.5)"
          gradientUnits="userSpaceOnUse"
          id={h.id}
          r="1"
        >
          <stop offset=".62" stopColor="#58239F" />
          <stop offset=".822" stopColor="#8E3FE9" />
          <stop offset="1" stopColor="#AF6FEC" />
        </radialGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="matrix(0 16 -16 0 55.002 108.021)"
          gradientUnits="userSpaceOnUse"
          id={i.id}
          r="1"
        >
          <stop offset=".62" stopColor="#C32F45" />
          <stop offset=".822" stopColor="#F44341" />
          <stop offset="1" stopColor="#FC9D9B" />
        </radialGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="matrix(0 15.5 -15.5 0 266.502 49.516)"
          gradientUnits="userSpaceOnUse"
          id={j.id}
          r="1"
        >
          <stop offset=".385" stopColor="#4DA33C" />
          <stop offset=".822" stopColor="#63ED47" />
          <stop offset="1" stopColor="#70D775" />
        </radialGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="matrix(0 -44 58.6667 0 160 290)"
          gradientUnits="userSpaceOnUse"
          id={k.id}
          r="1"
        >
          <stop stopColor="#FD9B8B" />
          <stop offset=".5" stopColor="#F24F3A" />
          <stop offset="1" stopColor="#D93318" />
        </radialGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="matrix(15.5 -61.50002 82.33886 20.75208 156 110)"
          gradientUnits="userSpaceOnUse"
          id={m.id}
          r="1"
        >
          <stop offset=".26" stopColor="#FFC1A3" />
          <stop offset=".764" stopColor="#FD82AB" />
          <stop offset=".952" stopColor="#DF4FAA" />
        </radialGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="rotate(90 49.496 156.006) scale(13.5)"
          gradientUnits="userSpaceOnUse"
          id={n.id}
          r="1"
        >
          <stop offset=".572" stopColor="#4C86D3" />
          <stop offset=".822" stopColor="#72ADE2" />
          <stop offset="1" stopColor="#90BBE3" />
        </radialGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={b.id}
          x1="48.999"
          x2="271.999"
          y1="148.517"
          y2="148.517"
        >
          <stop stopColor="#EB791E" />
          <stop offset="1" stopColor="#DB694E" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={c.id}
          x1="135.5"
          x2="187"
          y1="147.5"
          y2="147.5"
        >
          <stop stopColor="#FCC659" />
          <stop offset=".183" stopColor="#FFE366" />
          <stop offset=".404" stopColor="#FECA50" />
          <stop offset=".702" stopColor="#FFE76C" />
          <stop offset="1" stopColor="#FCC553" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={d.id}
          x1="73"
          x2="247"
          y1="193.012"
          y2="193.012"
        >
          <stop stopColor="#2A0B39" />
          <stop offset=".322" stopColor="#42180E" />
          <stop offset=".678" stopColor="#483A00" />
          <stop offset="1" stopColor="#310D1D" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={e.id}
          x1="73"
          x2="247"
          y1="193.012"
          y2="193.012"
        >
          <stop stopColor="#2A0B39" />
          <stop offset=".322" stopColor="#42180E" />
          <stop offset=".678" stopColor="#483A00" />
          <stop offset="1" stopColor="#310D1D" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id={g.id} x1="44.5" x2="291" y1="84" y2="82">
          <stop stopColor="#342FBD" />
          <stop offset=".188" stopColor="#733CC0" />
          <stop offset=".375" stopColor="#8748C2" />
          <stop offset=".654" stopColor="#7C80DE" />
          <stop offset="1" stopColor="#4A306D" />
        </linearGradient>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="126.061"
          id={f.id}
          width="255"
          x="35.997"
          y="8"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="12" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.764536 0 0 0 0 0.896726 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_1562_736" />
        </filter>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="95"
          id={l.id}
          width="161"
          x="75.998"
          y="42.016"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="12" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.824669 0 0 0 0 0.923101 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_1562_736" />
        </filter>
      </defs>
    </svg>
  );
});

export default Icon;
