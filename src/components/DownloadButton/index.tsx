'use client';

import type { ActionIconSize, DivProps } from '@lobehub/ui';
import { ActionIcon } from '@lobehub/ui';
import { Download } from 'lucide-react';
import { memo } from 'react';

export interface DownloadButtonProps extends DivProps {
  className?: string;
  onClick?: () => void;
  size?: ActionIconSize;
}

const DownloadButton = memo<DownloadButtonProps>(({ className, onClick, ...rest }) => {
  return (
    <ActionIcon
      {...rest}
      glass
      className={className}
      icon={Download}
      title={'Download'}
      onClick={onClick}
    />
  );
});

export default DownloadButton;
