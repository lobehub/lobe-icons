import {
  type Component,
  type CSSProperties,
  type DefineComponent,
  defineComponent,
  Fragment,
  h,
  normalizeStyle,
  type VNodeChild,
} from 'vue';

import type { IconProps } from './types';

// The generator moves SVG id composables into setup. Render callbacks receive
// fresh attributes on every update, including attributes passed with v-bind.
export function defineIcon<P extends object = IconProps>(
  setup: () => (props: P) => VNodeChild,
): DefineComponent<P> {
  return defineComponent({
    inheritAttrs: false,
    props: {
      forceMono: { type: Boolean, default: undefined },
      inverse: { type: Boolean, default: undefined },
      showLogo: { type: Boolean, default: undefined },
      showText: { type: Boolean, default: undefined },
    },
    setup(declared, { attrs, slots }) {
      const render = setup();
      return () => {
        const props: Record<string, unknown> = {};
        for (const [key, value] of Object.entries(declared)) {
          if (value !== undefined) props[key] = value;
        }
        for (const [key, value] of Object.entries(attrs)) {
          // Vue only camelizes declared props; these components also accept
          // arbitrary SVG attributes. Keep data-* and aria-* attributes intact.
          const name = /^(?:aria|data)-/.test(key)
            ? key
            : key.replaceAll(/-([a-z])/g, (_, letter: string) => letter.toUpperCase());
          props[name] = value;
        }
        if (slots.default) props.children = slots.default();
        return render(props as P);
      };
    },
  }) as unknown as DefineComponent<P>;
}

// Vue DOM attributes use SVG spelling; the source JSX uses React spelling.
const svgAttributes = new Set([
  'clipPath',
  'clipRule',
  'colorInterpolation',
  'colorInterpolationFilters',
  'dominantBaseline',
  'fillOpacity',
  'fillRule',
  'floodColor',
  'floodOpacity',
  'fontFamily',
  'fontSize',
  'fontWeight',
  'letterSpacing',
  'lightingColor',
  'markerEnd',
  'markerMid',
  'markerStart',
  'paintOrder',
  'pointerEvents',
  'shapeRendering',
  'stopColor',
  'stopOpacity',
  'strokeDasharray',
  'strokeDashoffset',
  'strokeLinecap',
  'strokeLinejoin',
  'strokeMiterlimit',
  'strokeOpacity',
  'strokeWidth',
  'textAnchor',
  'textDecoration',
  'vectorEffect',
]);

export function createIconNode(
  tag: string | Component | typeof Fragment,
  props: Record<string, unknown> | null,
  children: VNodeChild[] = [],
): ReturnType<typeof h> {
  const normalized: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(props || {})) {
    const name =
      key === 'className'
        ? 'class'
        : key === 'xlinkHref'
          ? 'xlink:href'
          : key === 'xmlnsXlink'
            ? 'xmlns:xlink'
            : typeof tag === 'string' && svgAttributes.has(key)
              ? key.replaceAll(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
              : key;
    normalized[name] = value;
  }
  if (typeof tag === 'string' || tag === Fragment) {
    return h(tag as string, normalized, children);
  }
  return h(tag as Component, normalized, children.length ? { default: () => children } : undefined);
}

export { Fragment };

export const normalizeIconStyle = (style: unknown): CSSProperties =>
  normalizeStyle([style]) as CSSProperties;
