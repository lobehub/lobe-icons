import { cssVar, Icon } from '@lobehub/ui';
import { Brain } from 'lucide-react';
import type { CSSProperties } from 'react';
import { memo } from 'react';

interface DefaultIconProps {
  className?: string;
  color?: string;
  size?: number;
  style?: CSSProperties;
}

const DefaultAvatar = memo<DefaultIconProps>(({ color, size = 12, ...rest }) => {
  return <Icon color={color || cssVar.colorTextDescription} icon={Brain} size={size} {...rest} />;
});

export default DefaultAvatar;
