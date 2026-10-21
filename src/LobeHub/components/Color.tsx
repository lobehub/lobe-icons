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
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path
        d="M22.05 12.939c0 5.674-4.458 9.637-10.05 9.637-5.592 0-10.05-4.038-10.05-9.712 0-1.688 0.375-2.411 2.363-2.675 3.563-0.475 5.441-0.287 7.687-0.288 2.247 0 5.442-0.095 7.688 0.288 1.837 0.313 2.25 0.65 2.362 2.75z"
        fill={a.fill}
      />
      <path
        d="M11.981 18.188c-2.119 0-2.681 0.263-2.681 0.263s0.263 2.025 2.681 2.025 2.681-2.025 2.681-2.025-0.563-0.263-2.681-0.263z"
        fill="#972021"
      />
      <path
        d="M20.4 11.139c0 0.476-3.744 0.862-8.363 0.862s-8.362-0.386-8.362-0.862c0-0.476 3.744-0.862 8.362-0.863s8.362 0.386 8.363 0.863z"
        fill={b.fill}
      />
      <path
        d="M10.163 12.001c0.047-1.123-0.036-1.709-0.413-2.733 0 0 0.713-0.904 2.025-0.904s2.25 0.23 2.25 0.229c-0.227 1.259-0.239 2.019-0.187 3.408h-3.675z"
        fill={c.fill}
      />
      <path
        d="M8.939 17.572c1.106-0.531 1.861-1.613 1.861-2.945 0-1.905-1.545-3.6-3.45-3.6s-3.525 1.47-3.525 3.375c0 1.049 0.491 2.011 1.25 2.664 0.442-0.168 0.949-0.264 1.488-0.264 0.953 0 1.806 0.299 2.376 0.77zM15.061 17.572c-1.106-0.531-1.861-1.613-1.861-2.945 0-1.905 1.545-3.6 3.45-3.6s3.525 1.47 3.525 3.375c0 1.049-0.491 2.011-1.25 2.664-0.442-0.168-0.949-0.264-1.487-0.264-0.953 0-1.806 0.299-2.377 0.77z"
        fill="#fff"
      />
      <path
        d="M7.575 16.576c1.16 0 2.1-0.94 2.1-2.1s-0.94-2.1-2.1-2.1-2.1 0.94-2.1 2.1 0.94 2.1 2.1 2.1z"
        fill={d.fill}
      />
      <path
        d="M16.425 16.576c-1.16 0-2.1-0.94-2.1-2.1s0.94-2.1 2.1-2.1 2.1 0.94 2.1 2.1-0.94 2.1-2.1 2.1z"
        fill={e.fill}
      />
      <g filter={f.fill}>
        <path
          d="M12.975 1.426c-1.052 0-1.462-0.862-3.075-0.825-1.755 0-2.55 0.975-3.413 1.725-0.147 0.128-0.862 0.525-1.2 0.675-1.476 0.656-2.587 1.613-2.587 3.038 0 1.553 1.31 2.813 2.925 2.812 0.265 0 0.522-0.034 0.766-0.097 0.652 0.79 1.663 1.249 2.796 1.297 1.762 0.075 2.325-1.144 3.338-0.637 0.694 0.347 1.037 0.637 2.137 0.637 1.283 0 1.879-0.392 2.25-0.825 0.675-0.787 1.716-0.3 2.363-0.3 1.408 0 2.55-1.091 2.55-2.437 0-1.346-1.142-2.438-2.55-2.438-0.386 0-1.114 0.095-1.275-0.525-0.263-1.012-1.511-2.175-3.3-2.175-0.699 0-1.327 0.075-1.725 0.075z"
          fill={g.fill}
        />
      </g>
      <path d="M6.225 1.539a0.713 0.713 0 1 1-1.425 0 0.713 0.713 0 0 1 1.425 0z" fill={h.fill} />
      <path
        d="M5.325 8.102c0 0.663-0.537 1.2-1.2 1.2s-1.2-0.537-1.2-1.2c0-0.663 0.537-1.2 1.2-1.2s1.2 0.537 1.2 1.2z"
        fill={i.fill}
      />
      <path
        d="M21.15 3.714c0 0.642-0.52 1.162-1.162 1.162-0.642 0-1.162-0.52-1.163-1.162 0-0.642 0.52-1.162 1.163-1.163 0.642 0 1.162 0.52 1.162 1.163z"
        fill={j.fill}
      />
      <path
        d="M9.917 18.308c0.411-0.062 1.064-0.12 2.064-0.12 0.916 0 1.541 0.049 1.955 0.105-0.116 0.44-0.972 0.608-2.011 0.608-1.027 0-1.876-0.164-2.008-0.593z"
        fill="#fff"
      />
      <path
        d="M12 21.751c1.507 0 1.748-1.537 1.795-1.921 0.036-0.311-0.126-0.468-0.302-0.574-0.176-0.106-0.703-0.205-1.493-0.205-0.79 0-1.314 0.099-1.493 0.205-0.179 0.106-0.341 0.263-0.301 0.574 0.047 0.384 0.287 1.921 1.794 1.921z"
        fill={k.fill}
      />
      <g filter={l.fill}>
        <path
          d="M12.877 9.731c-0.429-0.292-1.047-0.319-1.484-0.04-0.579 0.37-1.273 0.585-2.018 0.585-2.03 0-3.675-1.595-3.675-3.562 0-1.968 1.645-3.563 3.675-3.563 1.022 0 1.947 0.404 2.613 1.057 0.371 0.364 0.982 0.468 1.462 0.271a3.188 3.188 0 0 1 1.212-0.237c1.719 0 3.112 1.351 3.113 3.017 0 1.666-1.393 3.017-3.113 3.017-0.664 0-1.28-0.202-1.785-0.545z"
          fill={m.fill}
        />
      </g>
      <path
        d="M16.425 7.988c0 0.559-0.453 1.012-1.012 1.013s-1.012-0.453-1.013-1.013 0.453-1.012 1.013-1.012 1.012 0.453 1.012 1.012z"
        fill={n.fill}
      />
      <defs>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="matrix(9.75014 -15.03745 23.77779 15.4173 7.72487 22.57481)"
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
          gradientTransform="matrix(0 .7125 -.7125 0 5.51227 1.53877)"
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
          gradientTransform="matrix(0 1.2 -1.2 0 4.12515 8.10158)"
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
          gradientTransform="matrix(0 1.1625 -1.1625 0 19.98765 3.7137)"
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
          gradientTransform="matrix(0 -3.3 4.4 0 12 21.75)"
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
          gradientTransform="matrix(1.1625 -4.6125 6.17541 1.55641 11.7 8.25)"
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
          gradientTransform="matrix(0 1.0125 -1.0125 0 15.41265 7.98825)"
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
          x1="3.6749"
          x2="20.3999"
          y1="11.1388"
          y2="11.1388"
        >
          <stop stopColor="#EB791E" />
          <stop offset="1" stopColor="#DB694E" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={c.id}
          x1="10.1625"
          x2="14.025"
          y1="11.0625"
          y2="11.0625"
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
          x1="5.475"
          x2="18.525"
          y1="14.4759"
          y2="14.4759"
        >
          <stop stopColor="#2A0B39" />
          <stop offset=".322" stopColor="#42180E" />
          <stop offset=".678" stopColor="#483A00" />
          <stop offset="1" stopColor="#310D1D" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={e.id}
          x1="5.475"
          x2="18.525"
          y1="14.4759"
          y2="14.4759"
        >
          <stop stopColor="#2A0B39" />
          <stop offset=".322" stopColor="#42180E" />
          <stop offset=".678" stopColor="#483A00" />
          <stop offset="1" stopColor="#310D1D" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={g.id}
          x1="3.3375"
          x2="21.825"
          y1="6.3"
          y2="6.15"
        >
          <stop stopColor="#342FBD" />
          <stop offset=".188" stopColor="#733CC0" />
          <stop offset=".375" stopColor="#8748C2" />
          <stop offset=".654" stopColor="#7C80DE" />
          <stop offset="1" stopColor="#4A306D" />
        </linearGradient>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="9.4546"
          id={f.id}
          width="19.125"
          x="2.6998"
          y=".6"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation=".9" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.764536 0 0 0 0 0.896726 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_1562_736" />
        </filter>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="7.125"
          id={l.id}
          width="12.075"
          x="5.6999"
          y="3.1512"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation=".9" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.824669 0 0 0 0 0.923101 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_1562_736" />
        </filter>
      </defs>
    </svg>
  );
});

export default Icon;
