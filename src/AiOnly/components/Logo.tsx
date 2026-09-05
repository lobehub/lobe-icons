import { COLOR_PRIMARY, COLOR_SECONDARY } from '../style';

interface LogoProps {
  mono?: boolean;
}

const Logo = ({ mono }: LogoProps) => {
  const blue = mono ? 'currentColor' : COLOR_PRIMARY;
  const cyan = mono ? 'currentColor' : COLOR_SECONDARY;

  return (
    <g transform="translate(0.89 6.954)">
      <path
        d="M323.493,219.015H318.3a3.112,3.112,0,0,1-2.7-1.556l-3.334-5.775a.631.631,0,0,1,.546-.946h5.194a3.112,3.112,0,0,1,2.7,1.557l3.332,5.774A.631.631,0,0,1,323.493,219.015Z"
        fill={cyan}
        fillRule="evenodd"
        transform="translate(-296.942 -210.738)"
      />
      <path
        d="M318.145,396.795h-4.974a3.112,3.112,0,0,1-2.7-1.556l-3.334-5.775a.631.631,0,0,1,.546-.946h5.194a3.112,3.112,0,0,1,2.7,1.557l3.222,5.585A.757.757,0,0,1,318.145,396.795Z"
        fill={blue}
        fillRule="evenodd"
        transform="translate(-292.324 -370.77)"
      />
      <path
        d="M363.8,313.909l-4.232-7.328a.631.631,0,0,1,.546-.946h6.884A2.736,2.736,0,0,1,369.363,307l3.986,6.906,4.232,7.331a.631.631,0,0,1-.546.946h-6.881a2.736,2.736,0,0,1-2.369-1.368Z"
        fill={cyan}
        fillRule="evenodd"
        transform="translate(-339.513 -296.161)"
      />
      <path
        d="M174.617,238.814a1.449,1.449,0,0,0-2.523-.032l-3.513,6.026-4.775,8.274-4.232,7.331a.631.631,0,0,0,.546.946H167a2.736,2.736,0,0,0,2.369-1.368l3.988-6.909,4.4-7.627a1.08,1.08,0,0,0,0-1.072Z"
        fill={blue}
        fillRule="evenodd"
        transform="translate(-159.489 -235.335)"
      />
    </g>
  );
};

export default Logo;
