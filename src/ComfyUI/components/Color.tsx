'use client';

import { memo } from 'react';

import { useFillIds } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  const [a, b, c, d, e, f, g, h, i, j, k, l, m] = useFillIds(TITLE, 13);
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M10.311 16.46L8.495 8.078a.398.398 0 01.575-.437l7.29 3.843a.375.375 0 01-.064.69l-3.346 1.033a.493.493 0 00-.29.24l-1.65 3.11a.375.375 0 01-.699-.097z" />
      <path
        d="M17.087 1.153C13.825-.336 10.665-.148 8.72.414c1.008.13 2.602.375 3.692.868.905.408 4.102 2.12 4.876 2.484.773.363 3.035 1.196 3.867 1.64.666.357 1.442 1.173 1.746 1.536-.613-1.238-2.191-4.137-5.813-5.79z"
        fill={a.fill}
      />
      <circle cx="8.438" cy="2.578" fill={b.fill} r="1.57" />
      <circle cx="21.939" cy="13.384" fill={c.fill} r=".633" />
      <circle cx="20.275" cy="11.532" fill={d.fill} r=".492" />
      <circle cx="18.47" cy="16.619" fill={e.fill} r="1.219" />
      <circle cx="14.579" cy="18.447" fill={f.fill} r=".797" />
      <circle cx="15.341" cy="21.506" fill={g.fill} r="1.113" />
      <circle cx="4.278" cy="14.966" fill={h.fill} r="1.254" />
      <circle cx="4.981" cy="8.895" fill={i.fill} r="1.629" />
      <path
        d="M16.795 16.82l-.974.604-.175.108-.18.112a1.195 1.195 0 11-1.996 1.247c-.268.17-.498.319-.672.435-1.389.93-2.817 1.858-4.676 1.945-2.42.114-5.91-2.203-6.446-7.676-.41-4.196 2.836-8.122 5.098-9.587l.112-.07a2.055 2.055 0 01-.51-1.36c0-.478.162-.918.435-1.267-.567.098-.952.362-1.615.843C3.239 3.572 2.126 4.45.613 8.27c-1.512 3.82.047 8.392 1.7 10.9 1.652 2.508 5.485 4.078 6.375 4.313.891.234 3.505.796 4.583.117.352-.222.641-.536.894-.901a1.676 1.676 0 011.443-2.849c.315-.589.672-1.09 1.155-1.372.247-.144.517-.291.797-.439a1.687 1.687 0 01-.765-1.22z"
        fill={j.fill}
      />
      <path
        d="M10.468 2.56c0 .338-.081.657-.225.938.998.246 2.006.598 3.612 1.606.414.26 1.346.727 2.195 1.153.449.225.874.438 1.186.603.898.386 1.854.797 2.596 1.15 2.14 1.02 2.693 2.605 2.442 4.448a.985.985 0 11-.718 1.833c-.488.498-1.212.836-1.926 1.116a1.683 1.683 0 01.487 1.359l.118-.055.026-.012a29.518 29.518 0 001.08-.514l.015-.008c.21-.11.533-.281.882-.548-.14.354-.6 1.222-1.312 1.86-.89.796-1.57.972-2.485 1.16-.715.147-1.728 1.016-2.174 1.46a1.674 1.674 0 01.47 2.323c-.029.113-.064.22-.1.327a5.074 5.074 0 00-.094.308l.136-.04c.601-.177 1.772-.52 4.247-3.089 2.678-2.78 2.945-6.016 3.059-7.723.199-2.743-1.588-4.48-2.444-5.101-.445-.323-1.685-.866-2.905-1.4l-.2-.089-.775-.335c-.773-.332-1.473-.633-1.88-.869l-.041-.024c-1.197-.692-3.07-1.775-4.63-2.264a3.4 3.4 0 00-.376-.073 3.005 3.005 0 01-.345-.068c.051.18.079.371.079.569z"
        fill={k.fill}
      />
      <path
        clipRule="evenodd"
        d="M13.886 6.476c-1.426-.827-3.247-1.882-5.075-1.882-1.334 0-2.826.919-4.033 2.213a2.095 2.095 0 011.914.875c.23-.375.496-.762.773-1.025.554-.525 1.329-.75 1.594-.75 1.149 0 2.591.75 4.692 2.086.636.404 1.26.735 1.83 1.038 1.482.787 2.6 1.38 2.6 2.548 0 1.324-.473 1.711-1.105 2.074-.123.07-.336.199-.615.366-.887.533-2.433 1.461-3.78 2.166a17.9 17.9 0 00-1.076.628c-1.353.833-2.638 1.625-4.089.602-1.828-1.289-1.621-3.574-1.176-4.781.13-.35.274-.678.408-.981.328-.743.59-1.335.39-1.727a1.475 1.475 0 00-.197-.281 2.1 2.1 0 01-1.628 1.322c-.162.635-.299 1.252-.34 1.667-.023.23-.052.465-.084.696a1.747 1.747 0 11-1.643 3.045c.587 1.302 1.401 2.36 2.236 2.892 1.897 1.21 3.818.56 4.415.358h.001a8.28 8.28 0 01.087-.03c.404-.131 2.473-1.508 4.235-2.681l.814-.542c1.468-.974 3.315-1.747 4.156-2.099.22-.092.372-.156.429-.186l.014-.007c.399-.213 1.496-.798 1.612-2.466.102-1.467-1.478-2.244-2.325-2.66-.127-.063-.238-.117-.323-.164-.27-.15-.744-.363-1.326-.626-.653-.296-1.444-.653-2.237-1.05-.342-.171-.728-.395-1.148-.638zm6.39 5.783a.727.727 0 100-1.453.727.727 0 000 1.453z"
        fill={l.fill}
        fillRule="evenodd"
      />
      <path
        d="M4.082 11.684a6.337 6.337 0 00-.046 1.552 1.748 1.748 0 00-1.431 1.228c-.316-1.383-.345-2.869.088-4.221.078-.245.172-.491.28-.736a2.103 2.103 0 001.314 1.368c-.09.248-.161.518-.205.81z"
        fill={m.fill}
      />
      <defs>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="rotate(90 3.246 5.192) scale(2.20332)"
          gradientUnits="userSpaceOnUse"
          id={b.id}
          r="1"
        >
          <stop offset=".592" stopColor="#fff" />
          <stop offset=".62" stopColor="#8BEBFF" />
        </radialGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="matrix(0 .8879 -.8879 0 21.94 13.129)"
          gradientUnits="userSpaceOnUse"
          id={c.id}
          r="1"
        >
          <stop offset=".592" stopColor="#fff" />
          <stop offset=".62" stopColor="#8BEBFF" />
        </radialGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="rotate(90 4.47 15.805) scale(.69059)"
          gradientUnits="userSpaceOnUse"
          id={d.id}
          r="1"
        >
          <stop offset=".592" stopColor="#fff" />
          <stop offset=".62" stopColor="#8BEBFF" />
        </radialGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="rotate(90 1.171 17.299) scale(1.71004)"
          gradientUnits="userSpaceOnUse"
          id={e.id}
          r="1"
        >
          <stop offset=".592" stopColor="#fff" />
          <stop offset=".62" stopColor="#8BEBFF" />
        </radialGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="rotate(90 -1.773 16.353) scale(1.1181)"
          gradientUnits="userSpaceOnUse"
          id={f.id}
          r="1"
        >
          <stop offset=".592" stopColor="#fff" />
          <stop offset=".62" stopColor="#8BEBFF" />
        </radialGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="rotate(90 -2.858 18.2) scale(1.56205)"
          gradientUnits="userSpaceOnUse"
          id={g.id}
          r="1"
        >
          <stop offset=".592" stopColor="#fff" />
          <stop offset=".62" stopColor="#8BEBFF" />
        </radialGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="rotate(90 -5.091 9.37) scale(1.75937)"
          gradientUnits="userSpaceOnUse"
          id={h.id}
          r="1"
        >
          <stop offset=".592" stopColor="#fff" />
          <stop offset=".62" stopColor="#8BEBFF" />
        </radialGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="rotate(90 -1.629 6.61) scale(2.28553)"
          gradientUnits="userSpaceOnUse"
          id={i.id}
          r="1"
        >
          <stop offset=".592" stopColor="#fff" />
          <stop offset=".62" stopColor="#8BEBFF" />
        </radialGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={a.id}
          x1="12.388"
          x2="22.49"
          y1="0"
          y2="6.469"
        >
          <stop stopColor="#83FFFF" />
          <stop offset="1" stopColor="#01F9FD" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={j.id}
          x1="6.926"
          x2="15.165"
          y1="1.313"
          y2="23.111"
        >
          <stop stopColor="#0CD7FE" />
          <stop offset=".5" stopColor="#03ACFF" />
          <stop offset="1" stopColor="#0272E1" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={k.id}
          x1="6.926"
          x2="15.165"
          y1="1.313"
          y2="23.111"
        >
          <stop stopColor="#0CD7FE" />
          <stop offset=".5" stopColor="#03ACFF" />
          <stop offset="1" stopColor="#0272E1" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={l.id}
          x1="21.26"
          x2="2.367"
          y1="10.747"
          y2="13.595"
        >
          <stop stopColor="#1BE8F9" />
          <stop offset=".5" stopColor="#05C3FD" />
          <stop offset="1" stopColor="#0047CB" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={m.id}
          x1="21.26"
          x2="2.367"
          y1="10.747"
          y2="13.595"
        >
          <stop stopColor="#1BE8F9" />
          <stop offset=".5" stopColor="#05C3FD" />
          <stop offset="1" stopColor="#0047CB" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Icon;
