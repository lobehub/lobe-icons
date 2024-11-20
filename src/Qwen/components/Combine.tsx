'use client';

import { useThemeMode } from 'antd-style';
import { memo } from 'react';

import IconCombine, { type IconCombineProps } from '@/features/IconCombine';

import { COLOR_PRIMARY, SPACE_MULTIPLE, TEXT_MULTIPLE, TITLE } from '../style';
import Color from './Color';
import Mono from './Mono';
import Text from './Text';

export interface CombineProps extends Omit<IconCombineProps, 'Icon' | 'Text'> {
  type?: 'color' | 'mono';
}
const Combine = memo<CombineProps>(({ type = 'mono', extraStyle, iconProps, ...rest }) => {
  const { isDarkMode } = useThemeMode();
  const Icon = type === 'color' && !isDarkMode ? Color : Mono;

  return (
    <IconCombine
      Icon={Icon}
      Text={Text}
      aria-label={TITLE}
      extraStyle={{ fontWeight: 500, ...extraStyle }}
      iconProps={{
        color: type === 'color' && isDarkMode ? COLOR_PRIMARY : undefined,
        ...iconProps,
      }}
      spaceMultiple={SPACE_MULTIPLE}
      textMultiple={TEXT_MULTIPLE}
      {...rest}
    />
  );
});

export default Combine;
