'use client';

import { useTheme } from 'antd-style';
import { memo } from 'react';

import IconCombine, { type IconCombineProps } from '@/features/IconCombine';

import { SPACE_MULTIPLE, TEXT_MULTIPLE, TITLE } from '../style';
import Avatar from './Avatar';
import Text from './Text';

export interface CombineProps extends Omit<IconCombineProps, 'Icon' | 'Text'> {
  type?: 'mono' | 'color';
}

const Combine = memo<CombineProps>(({ type = 'mono', iconProps, ...rest }) => {
  const theme = useTheme();
  return (
    <IconCombine
      Icon={Avatar}
      Text={Text}
      aria-label={TITLE}
      iconProps={{
        background: type === 'mono' ? theme.colorText : undefined,
        color: type === 'mono' ? theme.colorBgLayout : undefined,
        shape: 'square',
        ...iconProps,
      }}
      spaceMultiple={SPACE_MULTIPLE}
      textMultiple={TEXT_MULTIPLE}
      {...rest}
    />
  );
});

export default Combine;
