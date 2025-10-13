import type { ComponentType } from 'react';
import type { TextStyle, ViewStyle } from 'react-native';

export interface RNIconProps {
  color?: string;
  size?: number;
  style?: ViewStyle;
}

export interface RNIconAvatarProps {
  Icon?: ComponentType<RNIconProps>;
  background?: string;
  color?: string;
  iconMultiple?: number;
  iconStyle?: ViewStyle;
  shape?: 'circle' | 'square';
  size: number;
  style?: ViewStyle;
}

export interface RNIconTextProps extends RNIconProps {
  text?: string;
  textColor?: string;
}

export interface RNIconCombineProps extends RNIconProps {
  Icon?: ComponentType<RNIconProps> | ComponentType<RNIconAvatarProps>;
  Text?: ComponentType<RNIconProps>;
  color?: string;
  extra?: string;
  extraStyle?: ViewStyle & TextStyle;
  iconProps?: Partial<RNIconAvatarProps>;
  inverse?: boolean;
  showLogo?: boolean;
  showText?: boolean;
  size?: number;
  spaceMultiple?: number;
  style?: ViewStyle;
  textMultiple?: number;
}

export type CompoundedIcon = ComponentType<RNIconProps> & {
  Avatar: ComponentType<RNIconAvatarProps>;
  Color: ComponentType<RNIconProps>;
  Combine: ComponentType<RNIconCombineProps>;
  Text: ComponentType<RNIconTextProps>;
  colorPrimary: string;
  title: string;
};
