import { Icon } from '@lobehub/ui';
import { cssVar } from 'antd-style';
import { Radar } from 'lucide-react';
import { type CSSProperties, memo } from 'react';

interface DefaultIconProps {
  className?: string;
  color?: string;
  size?: number;
  style?: CSSProperties;
}

const DefaultIcon = memo<DefaultIconProps>(({ color, size = 12, ...rest }) => {
  return <Icon color={color || cssVar.colorTextDescription} icon={Radar} size={size} {...rest} />;
});

export default DefaultIcon;
