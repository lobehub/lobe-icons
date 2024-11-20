'use client';

import { useThemeMode } from 'antd-style';
import { memo } from 'react';

import IconCombine, { type IconCombineProps } from '@/features/IconCombine';

import { COLOR_PRIMARY, SPACE_MULTIPLE, TEXT_MULTIPLE, TITLE } from '../style';
import Mono from './Mono';
import Text from './Text';

export interface CombineProps extends Omit<IconCombineProps, 'Icon' | 'Text'> {
  type?: 'mono' | 'color';
}

const Combine = memo<CombineProps>(({ type = 'mono', iconProps, ...rest }) => {
  const { isDarkMode } = useThemeMode();
  return (
    <IconCombine
      Icon={Mono}
      Text={Text as any}
      aria-label={TITLE}
      iconProps={{
        color: type === 'color' && !isDarkMode ? COLOR_PRIMARY : undefined,
        ...iconProps,
      }}
      spaceMultiple={SPACE_MULTIPLE}
      textMultiple={TEXT_MULTIPLE}
      {...rest}
    />
  );
});

export default Combine;
