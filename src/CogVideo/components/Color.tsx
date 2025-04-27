'use client';

import { memo } from 'react';

import { useFillIds } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  const [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q] = useFillIds(TITLE, 17);
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
        d="M14.538 22.388H9.406a.306.306 0 01-.268-.146L.056 2.335a.329.329 0 01.268-.512h5.132c.11 0 .207.049.268.146l9.082 19.895c.146.232-.012.524-.268.524z"
        fill={a.fill}
      />
      <path
        d="M23.705 1.835H18.5a.281.281 0 00-.244.134L9.138 21.925a.298.298 0 00.243.463h5.206a.281.281 0 00.244-.134l9.118-19.956a.298.298 0 00-.244-.463z"
        fill={b.fill}
      />
      <path
        d="M21.596 2.932c-.878-.048-1.853.525-3.267 2.231-.329.403-1.572.403-1.414 1.256.744 4.218-3.157 13.056-2.292 13.104.866.05 3.06-1.62 3.828-2.596.768-.975 1.28-1.78 1.877-2.987.598-1.207 1.207-2.95 1.744-4.827.536-1.877.56-3.73.597-4.779.024-.317-.195-1.353-1.073-1.402z"
        fill="#191935"
      />
      <path
        d="M18.012 6.017c-.207-1.134-1.085-3.426-1.682-4.157-.597-.732-1.17-1.073-2.109-.72-.512.195-1.719.89-2.597 3.572-.28.853-.743 1.28-1.158 1.853-.414.56-1.072 1.341-1.072 2.414 0 1.085.438 1.999 1.036 2.694.597.695 3.145 2.743 3.681 3.303.549.561 2.036 2.048 2.426 2.719l.39.67s.732-1.694.963-2.243c.232-.536.659-3.389.695-5.01.037-1.61-.427-4.279-.573-5.095z"
        fill="#000"
      />
      <path
        d="M14.952 20.474c-.097.049-.158-.232.171-.707.33-.475.987-1.39 1.512-1.792C17.17 17.573 18.5 16.5 19 16.39c.5-.11.5.33.256.512-.464.354-.549.269-1.134.805-.585.536-1.305.817-1.743 1.219-.44.402-1.158 1.402-1.427 1.548z"
        fill="#000"
      />
      <path
        d="M10.174 12.392c-1.524-.439-3.999-.926-4.937 2.548 0 0-.67.292-1.17 1.438-.805 1.841.963 6.754 6.192 5.474 2.487-.61 4.56-1.926 5.169-2.524.926-.902 1.524-.95 1.524-.95-.415-1.317-3.39-4.999-6.778-5.986zM18.963 16.732c.5-.463 1.146-1.158 1.426-1.646.28-.487.561-1.17.61-1.365.049-.195-.073-.805.22-.768.292.036.109.512-.013.744-.17.304-.378.78-.512 1.109-.134.341-.622.95-1 1.39-.39.438-.768.743-.768.743l.037-.207z"
        fill="#000"
      />
      <path
        d="M18.817 16.89s.621-.366 1.121-.719c.5-.354 1.512-1.268 1.756-1.597.256-.33.292-.634.426-.56.232.146-.158.487-.317.645-.17.159-.743.72-1.182 1.085-.451.366-1.61 1.207-1.804 1.146z"
        fill="#000"
      />
      <path
        d="M17.256 17.183c.013.049.05.085.05.024.109-1.06.535-2.316.548-5.412.012-3.28 0-4.779-2.39-5.388-.158-.037-.304 0-.28.158.061.366.89 2.17 1.304 4.535.5 2.913.67 5.595.768 6.083z"
        fill={c.fill}
      />
      <path
        d="M6.907 15.72c-.817.232 1.146.634 3.023 1 1.28.256 5.315.877 6.68.95.025 0 .037-.036.012-.048-1.365-.89-4.388-2.829-5.254-2.829-1.56-.012-3.852.756-4.461.927z"
        fill={d.fill}
      />
      <path
        d="M11.588 9.393s.646 1.353 1.658 2.195c.877.719 1.646 1.182 1.926 1.523.963 1.134 1.34 3.121 1.816 4.06.073.134-3.498-3.401-5.315-6.425-.414-.694-.195-1.536-.085-1.353z"
        fill={e.fill}
      />
      <path
        d="M13.88 3.457c.378-.074 1.377.5 1.377.792 0 .134-1.438-.134-1.682-.256-.33-.17.06-.488.305-.536z"
        fill={f.fill}
      />
      <path
        d="M13.221 4.505c.183-.159.951.012 1.098.146.146.159-.756.256-1.049.293-.256.024-.231-.28-.049-.44z"
        fill={g.fill}
      />
      <path
        d="M14.99 2.14c.56.049 1.681 1.694 1.438 1.89-.134.097-1.878-.976-2.134-1.28-.22-.269.268-.647.695-.61z"
        fill={h.fill}
      />
      <path
        d="M20.56 4.688c.28.036.841.658.78.878-.024.097-.975-.427-1.121-.573-.195-.208.158-.33.34-.305z"
        fill={i.fill}
      />
      <path
        d="M19.853 5.334c.134-.085.683.22.695.366.012.122-.537-.013-.756-.05-.183-.024-.085-.219.06-.316z"
        fill={j.fill}
      />
      <path
        d="M21.486 4.017c.39.159.72 1.256.598 1.366-.134.121-1.11-.817-1.22-1.085-.097-.232.33-.39.622-.28z"
        fill={k.fill}
      />
      <path
        d="M16.074 13.27c-.122-.61-.317-3.133-.95-4.645-.464-1.097-1.72-3.133-1.976-2.438-.378 1.024-1.231 1.975-.938 2.73.292.757 1.28 1.793 2.023 2.439.72.634 1.853 1.975 1.84 1.914z"
        fill={l.fill}
      />
      <path
        d="M9.26 17.256c-.963-.134-2.438-.439-3.353-.622-.573-.11.098 1.475.878 1.89.67.353 3.694.158 5.693-.037 1.658-.17 4.193-.61 3.328-.621a62.933 62.933 0 01-6.546-.61z"
        fill={m.fill}
      />
      <path
        d="M16.025 18.268c.049-.025.11-.122.073-.098-.743.244-3.486 1-6.485 1.329-2.292.244-2.78.049-3.047.17-.317.135.56 1.33 2.523 1.22 2.243-.134 5.656-1.792 6.936-2.621z"
        fill={n.fill}
      />
      <path
        d="M7.114 14.586c-.146 0-.146-.426.33-.634 0 0 .536-.682 1.608-.475.744.146 1.926.817 1.768.78-.56-.134-2.999.33-3.706.33z"
        fill={o.fill}
      />
      <path
        d="M17.976 16.707c0-.048.475-.792 1.097-4.096.39-2.047.292-3.852.231-4.205-.036-.256.841.256.854 1.219.012.695-.147 3.474-1.402 5.973-.512 1.036-.78 1.17-.78 1.11z"
        fill={p.fill}
      />
      <path
        d="M19.792 14.135c-.012.025-.061.013-.049-.012.256-.56.951-2.95 1.097-4.766.061-.707.061-1.28.147-1.463.085-.22.621-.83.743-.902.256-.146.134 1.353-.439 3.218-.341 1.158-1.048 3.133-1.499 3.925z"
        fill={q.fill}
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={a.id}
          x1="2.173"
          x2="11.524"
          y1="3.299"
          y2="18.97"
        >
          <stop stopColor="#19D46A" />
          <stop offset="1" stopColor="#0D00B5" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={b.id}
          x1="12.793"
          x2="19.332"
          y1="20.54"
          y2="5.839"
        >
          <stop offset="0" stopColor="#D70066" />
          <stop offset="1" stopColor="#0D00B5" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={c.id}
          x1="16.291"
          x2="17.794"
          y1="6.499"
          y2="17.251"
        >
          <stop stopColor="#8890F4" />
          <stop offset=".283" stopColor="#FFCFFD" />
          <stop offset=".606" stopColor="#F4F0FE" />
          <stop offset=".734" stopColor="#EFFFFF" />
          <stop offset="1" stopColor="#75D9DD" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={d.id}
          x1="6.141"
          x2="17.226"
          y1="14.567"
          y2="17.611"
        >
          <stop offset=".005" stopColor="#6F69F4" />
          <stop offset=".415" stopColor="#FFCEAD" />
          <stop offset=".596" stopColor="#EFEFB9" />
          <stop offset=".673" stopColor="#E7FFBF" />
          <stop offset="1" stopColor="#75D9DD" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={e.id}
          x1="10.787"
          x2="18.484"
          y1="8.975"
          y2="18.179"
        >
          <stop offset=".005" stopColor="#6F69F4" />
          <stop offset=".382" stopColor="#FFAFFF" />
          <stop offset=".513" stopColor="#F5D1E4" />
          <stop offset=".673" stopColor="#E7FFBF" />
          <stop offset=".972" stopColor="#75D9DD" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={f.id}
          x1="15.002"
          x2="14.323"
          y1="4.818"
          y2="3.993"
        >
          <stop stopColor="#FFA2FF" />
          <stop offset=".557" stopColor="#FFFFB0" />
          <stop offset=".713" stopColor="#DDFFCA" />
          <stop offset="1" stopColor="#97FFFF" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={g.id}
          x1="14.063"
          x2="13.455"
          y1="5.228"
          y2="4.443"
        >
          <stop stopColor="#FFA2FF" />
          <stop offset=".557" stopColor="#FFFFB0" />
          <stop offset=".713" stopColor="#DDFFCA" />
          <stop offset="1" stopColor="#97FFFF" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={h.id}
          x1="16.294"
          x2="15.351"
          y1="4.635"
          y2="3.192"
        >
          <stop stopColor="#FFA2FF" />
          <stop offset=".557" stopColor="#FFFFB0" />
          <stop offset=".713" stopColor="#DDFFCA" />
          <stop offset="1" stopColor="#97FFFF" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={i.id}
          x1="21.017"
          x2="20.742"
          y1="5.909"
          y2="5.173"
        >
          <stop stopColor="#FFA2FF" />
          <stop offset=".557" stopColor="#FFFFB0" />
          <stop offset=".713" stopColor="#DDFFCA" />
          <stop offset="1" stopColor="#97FFFF" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={j.id}
          x1="20.281"
          x2="20.002"
          y1="6.032"
          y2="5.346"
        >
          <stop stopColor="#FFA2FF" />
          <stop offset=".557" stopColor="#FFFFB0" />
          <stop offset=".713" stopColor="#DDFFCA" />
          <stop offset="1" stopColor="#97FFFF" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={k.id}
          x1="21.792"
          x2="21.483"
          y1="5.765"
          y2="4.716"
        >
          <stop stopColor="#FFA2FF" />
          <stop offset=".557" stopColor="#FFFFB0" />
          <stop offset=".713" stopColor="#DDFFCA" />
          <stop offset="1" stopColor="#97FFFF" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={l.id}
          x1="16.535"
          x2="12.379"
          y1="11.909"
          y2="7.067"
        >
          <stop offset=".005" stopColor="#6F69F4" />
          <stop offset=".329" stopColor="#FFD9AD" />
          <stop offset=".635" stopColor="#EAFABD" />
          <stop offset=".673" stopColor="#E7FFBF" />
          <stop offset="1" stopColor="#75D9DD" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={m.id}
          x1="16.238"
          x2="5.74"
          y1="18.125"
          y2="17.604"
        >
          <stop offset=".005" stopColor="#6F69F4" />
          <stop offset=".33" stopColor="#FFECEC" />
          <stop offset=".591" stopColor="#EDFACB" />
          <stop offset=".673" stopColor="#E7FFBF" />
          <stop offset=".972" stopColor="#75D9DD" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={n.id}
          x1="6.495"
          x2="16.17"
          y1="19.842"
          y2="19.331"
        >
          <stop offset=".005" stopColor="#6F69F4" />
          <stop offset=".33" stopColor="#FFECEC" />
          <stop offset=".591" stopColor="#EDFACB" />
          <stop offset=".673" stopColor="#E7FFBF" />
          <stop offset=".972" stopColor="#75D9DD" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={o.id}
          x1="14.758"
          x2="6.674"
          y1="15.723"
          y2="13.663"
        >
          <stop offset=".005" stopColor="#6F69F4" />
          <stop offset=".601" stopColor="#FFCEAD" />
          <stop offset=".707" stopColor="#EFEFB9" />
          <stop offset=".752" stopColor="#E7FFBF" />
          <stop offset=".976" stopColor="#75D9DD" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={p.id}
          x1="19.991"
          x2="18.135"
          y1="8.304"
          y2="17.695"
        >
          <stop stopColor="#8890F4" />
          <stop offset=".425" stopColor="#FFB8FD" />
          <stop offset=".549" stopColor="#F4D9FE" />
          <stop offset=".673" stopColor="#E7FFFF" />
          <stop offset="1" stopColor="#75D9DD" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={q.id}
          x1="19.82"
          x2="21.593"
          y1="13.96"
          y2="7.421"
        >
          <stop offset=".005" stopColor="#6F69F4" />
          <stop offset=".329" stopColor="#FFCEAD" />
          <stop offset=".571" stopColor="#EFEFB9" />
          <stop offset=".673" stopColor="#E7FFBF" />
          <stop offset="1" stopColor="#75D9DD" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Icon;
