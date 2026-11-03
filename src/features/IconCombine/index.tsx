'use client';

import { Flexbox, type FlexboxProps } from '@lobehub/ui';
import type { CSSProperties } from 'react';
import { memo } from 'react';

import type IconAvatar from '@/features/IconAvatar';
import type { IconAvatarProps } from '@/features/IconAvatar';
import type { IconType } from '@/types';

export interface IconCombineProps extends FlexboxProps {
  color?: string;
  extra?: string;
  extraClassName?: string;
  extraStyle?: CSSProperties;
  Icon?: IconType | typeof IconAvatar;
  iconProps?: Partial<IconAvatarProps>;
  inverse?: boolean;
  showLogo?: boolean;
  showText?: boolean;
  size?: number;
  spaceMultiple?: number;
  Text?: IconType;
  textMultiple?: number;
}
const IconCombine = memo<IconCombineProps>(
  ({
    Icon,
    style,
    Text,
    color,
    size = 24,
    spaceMultiple = 1,
    textMultiple = 1,
    extra,
    extraStyle,
    showText = true,
    showLogo = true,
    extraClassName,
    iconProps,
    inverse,
    ...rest
  }) => {
    const logo = Icon && showLogo && (
      <Icon
        size={size}
        {...(iconProps as any)}
        style={
          inverse
            ? { marginLeft: size * spaceMultiple, ...iconProps?.style }
            : { marginRight: size * spaceMultiple, ...iconProps?.style }
        }
      />
    );

    const text = showText && Text && <Text size={size * textMultiple} />;

    return (
      <Flexbox
        horizontal
        align={'center'}
        flex={'none'}
        justify={'flex-start'}
        style={{ color, ...style }}
        {...rest}
      >
        {inverse ? (
          <>
            {text}
            {logo}
          </>
        ) : (
          <>
            {logo}
            {text}
          </>
        )}
        {extra && (
          <span
            className={extraClassName}
            style={{ fontSize: size * textMultiple * 0.95, lineHeight: 1, ...extraStyle }}
          >
            {extra}
          </span>
        )}
      </Flexbox>
    );
  },
);

export default IconCombine;
