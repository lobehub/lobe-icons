import { cssVar, Icon } from '@lobehub/ui';
import { Bot } from 'lucide-react';
import type { CSSProperties } from 'react';
import { memo } from 'react';

interface DefaultIconProps {
  className?: string;
  color?: string;
  size?: number;
  style?: CSSProperties;
}

const DefaultAvatar = memo<DefaultIconProps>(({ color, size = 12, ...rest }) => {
  return <Icon color={color || cssVar.colorTextDescription} icon={Bot} size={size} {...rest} />;
});

export default DefaultAvatar;
