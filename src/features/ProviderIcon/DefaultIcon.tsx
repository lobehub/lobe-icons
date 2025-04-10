import { Icon } from '@lobehub/ui';
import { useTheme } from 'antd-style';
import { Radar } from 'lucide-react';
import { type CSSProperties, memo } from 'react';

interface DefaultIconProps {
  className?: string;
  color?: string;
  size?: number;
  style?: CSSProperties;
}

const DefaultIcon = memo<DefaultIconProps>(({ color, size = 12, ...rest }) => {
  const theme = useTheme();
  return <Icon color={color || theme.colorTextDescription} icon={Radar} size={size} {...rest} />;
});

export default DefaultIcon;
