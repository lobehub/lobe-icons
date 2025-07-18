import React, { memo } from 'react';
import { View, type ViewStyle } from 'react-native';

import type { RNIconProps } from '../types';

export interface RNIconAvatarProps {
  Icon?: React.ComponentType<RNIconProps>;
  background?: string;
  color?: string;
  iconMultiple?: number;
  iconStyle?: ViewStyle;
  shape?: 'circle' | 'square';
  size: number;
  style?: ViewStyle;
}

const RNIconAvatar = memo<RNIconAvatarProps>(
  ({
    shape = 'circle',
    color = '#fff',
    background,
    size,
    style,
    iconMultiple = 0.75,
    Icon,
    iconStyle,
    ...rest
  }) => {
    const borderRadius = shape === 'circle' ? size / 2 : Math.floor(size * 0.1);

    return (
      <View
        style={[
          {
            alignItems: 'center',
            backgroundColor: background,
            borderRadius,
            height: size,
            justifyContent: 'center',
            width: size,
          },
          style,
        ]}
        {...rest}
      >
        {Icon && <Icon color={color} size={Math.round(size * iconMultiple)} style={iconStyle} />}
      </View>
    );
  },
);

export default RNIconAvatar;
