import { Icon, cssVar } from '@lobehub/ui';
import { ProviderIcon } from '@lobehub/ui/icons';
import { type CSSProperties, memo } from 'react';

interface DefaultIconProps {
  className?: string;
  color?: string;
  size?: number;
  style?: CSSProperties;
}

const DefaultIcon = memo<DefaultIconProps>(({ color, size = 12, ...rest }) => {
  return (
    <Icon color={color || cssVar.colorTextDescription} icon={ProviderIcon} size={size} {...rest} />
  );
});

export default DefaultIcon;
