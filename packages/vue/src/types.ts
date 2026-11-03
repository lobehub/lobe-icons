import type { Component, DefineComponent, HTMLAttributes, SVGAttributes, VNodeChild } from 'vue';

export interface IconProps extends SVGAttributes {
  size?: number | string;
  title?: string;
}

export type IconType = DefineComponent<IconProps>;
export type ComponentType<P extends object = Record<string, unknown>> = DefineComponent<P>;

export type MappingIcon = Component & {
  Avatar: Component;
  Brand?: Component;
  BrandColor?: Component;
  Color?: Component;
  Combine?: Component;
  Text?: Component;
};

export interface DivProps extends HTMLAttributes {
  children?: VNodeChild;
}

export interface FlexboxProps extends DivProps {
  align?: string;
  flex?: string;
  gap?: number;
  height?: number | string;
  horizontal?: boolean;
  justify?: string;
  width?: number | string;
}
