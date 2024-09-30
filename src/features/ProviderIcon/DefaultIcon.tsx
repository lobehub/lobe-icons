import { Icon } from '@lobehub/ui';
import { useTheme } from 'antd-style';
import { BrainCircuitIcon } from 'lucide-react';
import { CSSProperties, forwardRef } from 'react';

interface DefaultIconProps {
  className?: string;
  color?: string;
  size?: number;
  style?: CSSProperties;
}

const DefaultIcon = forwardRef<any, DefaultIconProps>(({ color, size = 12, ...rest }, ref) => {
  const theme = useTheme();
  return (
    <Icon
      color={color || theme.colorTextDescription}
      icon={BrainCircuitIcon}
      ref={ref}
      size={{ fontSize: size }}
      {...rest}
    />
  );
});

export default DefaultIcon;
