'use client';

import { memo } from 'react';

import { useFillIds } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  const [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A] =
    useFillIds(TITLE, 27);
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
      <path d="M15.271 16.555l5.72 4.877s-3.276 3.125-7.223-2.866l1.503-2.01z" fill={a.fill} />
      <path d="M15.4 16.523l4.596 5.947s-3.85 2.39-6.477-4.293l1.882-1.654z" fill={b.fill} />
      <path
        d="M13.833 21.043h-3.72a.44.44 0 01-.41-.27L2.024 2.94c-.087-.194.065-.421.28-.421H6.07c.184 0 .346.108.41.27l7.635 17.831c.076.205-.065.422-.281.422z"
        fill={c.fill}
      />
      <path
        d="M7.637 3.547c-2.087.562-2.855 2.465-2.855 2.465s1.33-.465 3.18-.876a30.14 30.14 0 012.551-.421c-.043-.617-1.276-1.6-2.876-1.168z"
        fill={d.fill}
      />
      <path
        d="M6.664 5.05c-1.644 1.416-1.6 3.46-1.6 3.46s.94-.908 2.357-2.163c.951-.843 2.032-1.6 2.032-1.6-.335-.519-1.47-.833-2.79.303z"
        fill={e.fill}
      />
      <path
        d="M6.307 7.18c-1.363 1.665-1.05 3.385-1.05 3.385s.801-.768 2.001-2.217a31.1 31.1 0 011.763-1.892C8.61 6 7.388 5.872 6.307 7.18z"
        fill={f.fill}
      />
      <path
        d="M14.957 4.141s-.41-1.07-1.254-1.535c-.822-.454-3.028-.552-4.585.616-2.065 1.536-2.768 4.044-2.92 4.64-1.492 5.795 1.558 9.06 4.942 10.64l3.817-14.36z"
        fill={g.fill}
      />
      <path
        d="M4.912 11.246a7.404 7.404 0 007.558 7.245l-.313-14.814c-4.088.097-7.332 3.481-7.245 7.569z"
        fill={h.fill}
      />
      <path
        d="M6.296 12.62c.443 4.032 4.087 6.941 8.12 6.498l-1.621-14.62a7.366 7.366 0 00-6.499 8.121z"
        fill={i.fill}
      />
      <path
        d="M9.313 3.785a3.107 3.107 0 00-.097 4.195 3.126 3.126 0 004.174.487L9.313 3.785z"
        fill={j.fill}
      />
      <path d="M11.79 8.077a2.909 2.909 0 100-5.817 2.909 2.909 0 000 5.817z" fill={k.fill} />
      <path
        d="M8.729 13.625c1.016 3.233 4.466 5.039 7.699 4.022L12.751 5.926a6.138 6.138 0 00-4.022 7.699z"
        fill={l.fill}
      />
      <path
        d="M9.562 12.079a5.306 5.306 0 006.239 4.173L13.725 5.84c-2.866.563-4.736 3.363-4.163 6.24z"
        fill={m.fill}
      />
      <path
        d="M11.075 2.822s-.648 1.125-.291 2.38c.443 1.556 2.097 1.783 2.8 1.61l1.006-2.108-1.763-2.358-1.752.476z"
        fill={n.fill}
      />
      <path
        d="M12.903 5.807s-.54.162-.887.81c-.292.541-.205 1.287-.205 1.287l2.195-1.686-1.103-.411z"
        fill={o.fill}
      />
      <path
        d="M15.325 9.97S13.465 9.948 13 8.218c-.313-1.178.249-1.99.249-1.99l1.211-.356.865 4.098z"
        fill={p.fill}
      />
      <path
        d="M7.02.757s.4 1.849 2.412 2.595c1.524.562 4.076-.973 4.076-.973s-1.34-.552-3.33-.552C8.686 1.827 7.02.757 7.02.757z"
        fill={q.fill}
      />
      <path
        d="M16.904 4.671s.238-1.243-.552-2.4c-.605-.887-2.12-1.882-4.93-1.265C9.053 1.525 8.697 0 8.697 0c-.076.39.183 2.92 2.649 2.552 3.027-.454 2.768 2.509 3.838 3.006.887.39 1.72-.887 1.72-.887z"
        fill={r.fill}
      />
      <path d="M13.757 6.412a1.492 1.492 0 100-2.984 1.492 1.492 0 000 2.984z" fill={s.fill} />
      <path
        d="M10.059 21.043h3.828a.44.44 0 00.41-.27L21.976 2.94c.087-.194-.065-.421-.28-.421h-3.872a.44.44 0 00-.411.27L9.778 20.62c-.076.205.065.422.281.422z"
        fill={t.fill}
      />
      <path
        d="M10.059 21.043h3.828a.439.439 0 00.41-.27l6.1-14.144c.086-.195-.065-.422-.282-.422h-3.87a.44.44 0 00-.412.27L9.778 20.621c-.076.205.065.422.281.422z"
        fill={u.fill}
      />
      <path
        d="M16.071 4.888s.054-1.795-1.806-2.736c-2.595-1.309-4.974 1.795-7.699 0 0 0 .552 2.768 6.11 1.72 1.373-.26 1.979.172 2.281.67.26.421.238.789.238 1.005l.876-.66z"
        fill={v.fill}
      />
      <path
        d="M15.671 5.223s.14-.973-.67-1.568c-.876-.638-1.58-.508-1.58-.508s.498-.303 1.212-.303c.379 0 .508-.054.508-.054s.054-.173-.184-.444c2.033.898 1.503 2.433 1.503 2.433l-.789.444z"
        fill={w.fill}
      />
      <path
        d="M16.352 6.856s-.8.746-1.946.356c-.076-.021-.065-.475 0-.767.065-.336.292-.703.476-.93 1.243.108 1.47 1.34 1.47 1.34z"
        fill={x.fill}
      />
      <path
        d="M16.904 4.596s.616.962.432 2.054c-.216 1.265-1.416 1.86-1.416 1.86s.573-2.206-1.05-2.995c0 0 .336-.368.823-.595.713-.324 1.21-.324 1.21-.324z"
        fill={y.fill}
      />
      <path d="M13.52 5.504a.724.724 0 100-1.449.724.724 0 000 1.449z" fill={z.fill} />
      <path
        d="M13.357 5.169c.257 0 .465-.223.465-.498 0-.274-.208-.497-.465-.497s-.465.223-.465.497c0 .275.208.498.465.498z"
        fill={A.fill}
      />
      <path d="M13.681 4.423a.108.108 0 100-.217.108.108 0 000 .217z" fill="#fff" />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={a.id}
          x1="14.07"
          x2="20.313"
          y1="18.852"
          y2="20.083"
        >
          <stop offset=".006" stopColor="#E8096A" />
          <stop offset="1" stopColor="#00AFFF" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={c.id}
          x1="11.764"
          x2="3.911"
          y1="20.533"
          y2="1.932"
        >
          <stop stopColor="#412DF5" />
          <stop offset=".691" stopColor="#0606B6" />
          <stop offset="1" stopColor="#4B00B4" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={d.id}
          x1="5.23"
          x2="8.449"
          y1="4.866"
          y2="4.518"
        >
          <stop stopColor="#E60030" />
          <stop offset="1" stopColor="#690040" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={e.id}
          x1="5.359"
          x2="7.933"
          y1="6.753"
          y2="6.013"
        >
          <stop stopColor="#FF6500" />
          <stop offset="1" stopColor="#EE182C" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={f.id}
          x1="5.528"
          x2="8.59"
          y1="8.108"
          y2="8.699"
        >
          <stop stopColor="#EA4D07" />
          <stop offset="1" stopColor="#C5171E" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={g.id}
          x1="12.023"
          x2="7.057"
          y1="3.007"
          y2="18.02"
        >
          <stop stopColor="#0091FF" />
          <stop offset=".005" stopColor="#0292FC" />
          <stop offset=".126" stopColor="#37A5C2" />
          <stop offset=".249" stopColor="#65B58E" />
          <stop offset=".372" stopColor="#8CC363" />
          <stop offset=".496" stopColor="#ACCF3F" />
          <stop offset=".62" stopColor="#C4D823" />
          <stop offset=".745" stopColor="#D6DE10" />
          <stop offset=".871" stopColor="#E1E204" />
          <stop offset="1" stopColor="#E4E300" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={h.id}
          x1="6.803"
          x2="13.616"
          y1="4.807"
          y2="18.4"
        >
          <stop offset=".006" stopColor="#DE003B" />
          <stop offset=".241" stopColor="#D976FF" />
          <stop offset="1" stopColor="#00A4EA" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={l.id}
          x1="11.435"
          x2="12.609"
          y1="7.86"
          y2="16.15"
        >
          <stop stopColor="#FF9500" />
          <stop offset="1" stopColor="#F7FF2B" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={m.id}
          x1="15.495"
          x2="10.596"
          y1="13.571"
          y2="8.476"
        >
          <stop offset=".207" stopColor="#FF8E00" />
          <stop offset="1" stopColor="#F41B56" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={o.id}
          x1="12.031"
          x2="12.816"
          y1="7.438"
          y2="6.584"
        >
          <stop stopColor="#FFB41F" />
          <stop offset="1" stopColor="#F42A56" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={p.id}
          x1="13.472"
          x2="14.931"
          y1="9.574"
          y2="6.928"
        >
          <stop stopColor="#FFB900" />
          <stop offset="1" stopColor="#F41880" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={r.id}
          x1="8.686"
          x2="16.938"
          y1="2.816"
          y2="2.816"
        >
          <stop stopColor="#FF6500" />
          <stop offset="1" stopColor="#EE182C" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={t.id}
          x1="10.556"
          x2="21.346"
          y1="21.192"
          y2="2.03"
        >
          <stop stopColor="#008DFF" />
          <stop offset=".181" stopColor="#331DEA" />
          <stop offset=".833" stopColor="#39C3FE" />
          <stop offset="1" stopColor="#60F5A9" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={w.id}
          x1="14.947"
          x2="15.001"
          y1="2.631"
          y2="4.948"
        >
          <stop stopColor="#E60030" />
          <stop offset="1" stopColor="#690040" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={x.id}
          x1="15.335"
          x2="15.426"
          y1="7.144"
          y2="5.699"
        >
          <stop stopColor="#FFD71F" />
          <stop offset="1" stopColor="#DD001B" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={y.id}
          x1="15.25"
          x2="17.127"
          y1="6.472"
          y2="6.603"
        >
          <stop offset="0" stopColor="#FF4C00" />
          <stop offset="1" stopColor="#FFFF1E" />
        </linearGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="rotate(5.75 -186.105 166.894) scale(6.42878)"
          gradientUnits="userSpaceOnUse"
          id={b.id}
          r="1"
        >
          <stop stopColor="#00CAFF" />
          <stop offset="1" stopColor="#38E700" />
        </radialGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="rotate(-6.338 87.254 -95.948) scale(11.4818)"
          gradientUnits="userSpaceOnUse"
          id={i.id}
          r="1"
        >
          <stop stopColor="#00DFFF" />
          <stop offset="1" stopColor="#ABE700" />
        </radialGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="rotate(-40.957 13.589 -11.156) scale(2.76891)"
          gradientUnits="userSpaceOnUse"
          id={j.id}
          r="1"
        >
          <stop stopColor="#0068FF" />
          <stop offset="1" stopColor="#9CE830" />
        </radialGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="translate(11.79 5.169) scale(2.91494)"
          gradientUnits="userSpaceOnUse"
          id={k.id}
          r="1"
        >
          <stop stopColor="#008A43" />
          <stop offset="1" stopColor="#A3E830" />
        </radialGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="translate(13.404 4.87) scale(2.39805)"
          gradientUnits="userSpaceOnUse"
          id={n.id}
          r="1"
        >
          <stop stopColor="red" />
          <stop offset="1" stopColor="#FF0" />
        </radialGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="rotate(-9.492 18.79 -57.53) scale(3.31553)"
          gradientUnits="userSpaceOnUse"
          id={q.id}
          r="1"
        >
          <stop offset=".001" stopColor="#72003F" />
          <stop offset="1" stopColor="#CA1D67" />
        </radialGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="translate(13.777 4.91) scale(1.18046)"
          gradientUnits="userSpaceOnUse"
          id={s.id}
          r="1"
        >
          <stop offset="0" stopColor="#D1DEE7" />
          <stop offset="1" stopColor="#fff" />
        </radialGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="rotate(-156.16 9.63 6.572) scale(2.7555 7.64116)"
          gradientUnits="userSpaceOnUse"
          id={u.id}
          r="1"
        >
          <stop offset=".001" stopColor="#7F06FB" />
          <stop offset="1" stopColor="#7A10FB" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="translate(7.1 2.821) scale(8.64049)"
          gradientUnits="userSpaceOnUse"
          id={v.id}
          r="1"
        >
          <stop offset=".001" stopColor="#FF0042" />
          <stop offset=".422" stopColor="#0068FF" />
          <stop offset=".659" stopColor="#1877E2" />
          <stop offset="1" stopColor="#4EEFBE" />
        </radialGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="matrix(.9051 0 0 .9051 13.173 4.8)"
          gradientUnits="userSpaceOnUse"
          id={z.id}
          r="1"
        >
          <stop stopColor="#FF9100" />
          <stop offset=".226" stopColor="#FF9500" />
          <stop offset=".443" stopColor="#FEA000" />
          <stop offset=".657" stopColor="#FCB400" />
          <stop offset=".867" stopColor="#F9CF00" />
          <stop offset="1" stopColor="#F7E400" />
        </radialGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="matrix(.97336 0 0 .97336 13.13 4.64)"
          gradientUnits="userSpaceOnUse"
          id={A.id}
          r="1"
        >
          <stop />
          <stop offset=".092" stopColor="#000004" />
          <stop offset=".177" stopColor="#01000F" />
          <stop offset=".258" stopColor="#020021" />
          <stop offset=".338" stopColor="#03003C" />
          <stop offset=".417" stopColor="#05005D" />
          <stop offset=".494" stopColor="#080087" />
          <stop offset=".571" stopColor="#0A00B8" />
          <stop offset=".645" stopColor="#0E00F0" />
          <stop offset=".654" stopColor="#0E00F7" />
        </radialGradient>
      </defs>
    </svg>
  );
});

export default Icon;
