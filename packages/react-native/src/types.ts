import type { ComponentType } from 'react';
import type { ViewStyle } from 'react-native';

export interface RNIconProps {
  [key: string]: any;
  color?: string;
  size?: number;
  style?: ViewStyle;
}

export interface RNIconAvatarProps extends RNIconProps {
  background?: string;
  color?: string;
  iconMultiple?: number;
  size?: number;
}

export interface RNIconTextProps extends RNIconProps {
  text?: string;
  textColor?: string;
}

export interface RNIconCombineProps extends RNIconProps {
  spaceMultiple?: number;
  text?: string;
  textColor?: string;
  textMultiple?: number;
}

export interface CompoundedIcon {
  Avatar: ComponentType<RNIconAvatarProps>;
  Color?: ComponentType<RNIconProps>;
  Combine?: ComponentType<RNIconCombineProps>;
  Text?: ComponentType<RNIconTextProps>;
  colorPrimary: string;
  title: string;
}
