'use client';

import { ActionIcon, ActionIconSize, DivProps, TooltipProps } from '@lobehub/ui';
import { Download } from 'lucide-react';
import { memo } from 'react';

export interface DownloadButtonProps extends DivProps {
  className?: string;
  onClick?: () => void;
  placement?: TooltipProps['placement'];
  size?: ActionIconSize;
}

const DownloadButton = memo<DownloadButtonProps>(
  ({ className, placement = 'right', size = 'site', onClick, ...rest }) => {
    return (
      <ActionIcon
        {...rest}
        className={className}
        glass
        icon={Download}
        onClick={onClick}
        placement={placement}
        size={size}
        title={'Download'}
      />
    );
  },
);

export default DownloadButton;
