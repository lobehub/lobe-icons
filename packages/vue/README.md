# @lobehub/icons-vue

Vue 3 components for the AI / LLM brand icons in `@lobehub/icons`.
Requires Vue 3.5 or later. React and `@lobehub/ui` are not required.

## Installation

```sh
bun add @lobehub/icons-vue
```

## Usage

```vue
<script setup lang="ts">
import { DeepSeek, OpenAI, ModelIcon, ProviderIcon } from '@lobehub/icons-vue';
</script>

<template>
  <OpenAI :size="24" aria-label="OpenAI" />
  <DeepSeek.Color :size="32" />
  <DeepSeek.Combine :size="32" type="color" />
  <OpenAI.Avatar :size="40" type="gpt5" shape="square" />
  <ModelIcon model="gpt-5" :size="24" type="mono" />
  <ProviderIcon provider="deepseek" :size="24" type="color" />
</template>
```

The main component renders the monochrome SVG. Available variants match the
React source: `Color`, `Text`, `TextCn`, `TextColor`, `Brand`, `BrandColor`,
`Combine`, and `Avatar`, where provided by the brand. Each family also exposes
`title`, `colorPrimary`, and any additional brand color constants.

Use Vue's `class`, `style`, event bindings, and standard SVG / ARIA attributes.
Monochrome icons inherit `currentColor`; set `color` or a CSS text color to
override it. `size` accepts a number or a CSS size for SVGs. Avatar and Combine
components use numeric pixel sizes.

## Imports

Named imports support tree shaking. Import a single brand or component directly
when you want to avoid the catalog and mapping helpers:

```ts
import OpenAI from '@lobehub/icons-vue/OpenAI';
import DeepSeekColor from '@lobehub/icons-vue/es/DeepSeek/components/Color';
import { type IconProps } from '@lobehub/icons-vue';
```

The package ships ESM JavaScript and TypeScript declarations. Consumers do not
need JSX support or a special Vue plugin to use the compiled components.

## Helpers

- `ModelIcon`, `ProviderIcon`, and `AgentIcon` resolve IDs with the same ordered
  mappings as the React package. Their `type` prop accepts `avatar`, `mono`,
  `color`, `combine`, or `combine-color`.
- `ProviderCombine` renders a provider's combined mark, including custom
  combinations from the shared provider mappings.
- `ModelTag` renders a basic inline model label and icon. Its styling uses native
  elements and Vue attributes rather than the React UI library's Tag props.
- `IconAvatar` and `IconCombine` are Vue layout primitives. Their dimensions,
  spacing, colors, and visibility props follow the React icon components.
  React UI layout props and theme-driven avatar shadows are not included.
- `ModelProvider`, `modelMappings`, `providerMappings`, `agentMappings`, `toc`,
  and `getLobeIconCDN` are also exported.
- `useFillId` and `useFillIds` are Vue composables. Call them during `setup` when
  creating custom icons with gradients, masks, or clip paths.

Unknown IDs render a neutral fallback icon. Gradient and mask IDs use Vue's
`useId()` so repeated instances remain distinct and SSR hydration stays stable.
For multiple independent Vue apps on one page, set a distinct
`app.config.idPrefix` for each app and use the same prefix on server and client.

## Development

From the repository root:

```sh
bun install
bun run build:vue
bun run test:vue
```

The generator reads the brands registered in `src/icons.ts`, their component and
style files, the catalog, and the model / provider / agent mappings. A TypeScript
AST transform produces Vue render functions and moves SVG ID composables into
component setup. The Vue primitives live in `packages/vue/src`.

`.generated/` and `dist/` are build outputs and are not committed. Add or update
brand SVGs in the existing React source, then rebuild this package. Unsupported
source dependencies fail generation so new React-specific features cannot
silently enter the Vue build.

To check generated types without emitting a package:

```sh
bun run --cwd packages/vue type-check
```

Run `npm pack --dry-run --ignore-scripts` in `packages/vue` after building to
inspect the publishable files. The package is included in the repository's
multi-package release workflow; the initial npm publication still requires the
repository's normal release credentials.
