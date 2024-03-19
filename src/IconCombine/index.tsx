import { CSSProperties, forwardRef } from 'react';
import { Flexbox, type FlexboxProps } from 'react-layout-kit';

import IconAvatar, { IconAvatarProps } from '@/IconAvatar';
import { IconType } from '@/types';

export interface IconCombineProps extends FlexboxProps {
  Icon: IconType | typeof IconAvatar;
  Text?: IconType;
  color?: string;
  extra?: string;
  extraClassName?: string;
  extraStyle?: CSSProperties;
  iconProps?: Partial<IconAvatarProps>;
  showLogo?: boolean;
  showText?: boolean;
  size?: number;
  spaceMultiple?: number;
  textMultiple?: number;
}
const IconCombine = forwardRef<HTMLDivElement, IconCombineProps>(
  (
    {
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
      ...rest
    },
    ref,
  ) => {
    return (
      <Flexbox
        align={'center'}
        flex={'none'}
        horizontal
        justify={'flex-start'}
        ref={ref}
        style={{ color, ...style }}
        {...rest}
      >
        {showLogo && (
          <Icon
            size={size}
            {...(iconProps as any)}
            style={{ marginRight: size * spaceMultiple, ...iconProps?.style }}
          />
        )}
        {showText && Text && <Text size={size * textMultiple} />}
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
