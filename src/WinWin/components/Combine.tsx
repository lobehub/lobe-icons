'use client';

import { memo } from 'react';

import IconCombine, { type IconCombineProps } from '@/features/IconCombine';

import { COMBINE_SPACE_MULTIPLE, COMBINE_TEXT_MULTIPLE, TITLE } from '../style';
import Color from './Color';
import Mono from './Mono';
import Text from './Text';

/**
 * WinWin 图标 + 文字组合组件
 * @param type 图标类型，`color` 使用品牌彩色图标，`mono` 使用 currentColor 单色图标
 */
export interface CombineProps extends Omit<IconCombineProps, 'Icon' | 'Text'> {
  type?: 'color' | 'mono';
}

const Combine = memo<CombineProps>(({ type = 'mono', ...rest }) => {
  // 根据 type 选择图标组件
  const Icon = type === 'color' ? Color : Mono;
  return (
    <IconCombine
      Icon={Icon}
      Text={Text}
      aria-label={TITLE}
      spaceMultiple={COMBINE_SPACE_MULTIPLE}
      textMultiple={COMBINE_TEXT_MULTIPLE}
      {...rest}
    />
  );
});

export default Combine;
