import { CSSProperties, memo } from 'react';
import { Flexbox, type FlexboxProps } from 'react-layout-kit';

import { IconType } from '@/types';

export interface IconCombineProps extends FlexboxProps {
  Icon: IconType;
  Text: IconType;
  color?: string;
  extra?: string;
  extraClassName?: string;
  extraStyle?: CSSProperties;
  showLogo?: boolean;
  showText?: boolean;
  size?: number;
  spaceMultiple?: number;
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
    ...rest
  }) => {
    return (
      <Flexbox align={'center'} flex={'none'} horizontal style={{ color, ...style }} {...rest}>
        {showLogo && <Icon size={size} style={{ marginRight: size * spaceMultiple }} />}
        {showText && <Text size={size * textMultiple} />}
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
