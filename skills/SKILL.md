---
name: lobe-icons
description: Use `@lobehub/icons` for React and `@lobehub/icons-vue` for Vue 3 — a collection of 200+ AI/LLM brand SVG logos and icon components. Covers installation, React and Vue component usage (with variants like Color, Brand, Text, Combine, Avatar), CDN URL generation for static assets (SVG/PNG/WebP), helper components (ModelIcon, ProviderIcon, ProviderCombine), the icon table-of-contents metadata, and custom icon creation via IconType. Use when working with AI brand logos, model provider icons, or needing icon assets in any format.
---

# Lobe Icons

200+ AI / LLM brand SVG logo and icon collection as React and Vue 3 components with CDN static asset support.

- **Package**: `@lobehub/icons`
- **Vue package**: `@lobehub/icons-vue` (source: `packages/vue`)
- **Browse all icons**: [lobehub.com/icons](https://lobehub.com/icons)
- **Component docs**: [icons.lobehub.com](https://icons.lobehub.com)
- **GitHub**: [github.com/lobehub/lobe-icons](https://github.com/lobehub/lobe-icons)

## Skill Files

| File                       | URL                                                            |
| -------------------------- | -------------------------------------------------------------- |
| **SKILL.md** (this file)   | `https://lobehub.com/only-ai/skills/icons`                     |
| **reference/providers.md** | `https://lobehub.com/only-ai/skills/icons/reference/providers` |

**Install locally** (replace `~/.claude` with your agent's skill directory, e.g. `~/.claude`, `~/.agents`, `~/.moltbot`, etc.):

```bash
SKILL_DIR=~/.claude/skills/lobe-icons # adjust path for your agent
mkdir -p "$SKILL_DIR/reference"
curl -s https://lobehub.com/only-ai/skills/icons > "$SKILL_DIR/SKILL.md"
curl -s https://lobehub.com/only-ai/skills/icons/reference/providers > "$SKILL_DIR/reference/providers.md"
```

**Or just read them from the URLs above!**

## Installation

For React:

```bash
npm install @lobehub/icons
# or
bun add @lobehub/icons
```

For Vue 3.5 or later:

```bash
npm install @lobehub/icons-vue
# or
bun add @lobehub/icons-vue
```

Use `@lobehub/icons-vue` in Vue projects. It does not require React or `@lobehub/ui`.

## React Components

Each icon exports a base component and variant sub-components:

```tsx
import { OpenAI } from '@lobehub/icons';

// Base (mono)
<OpenAI size={24} />

// Variants (availability depends on icon, check `param` flags in toc)
<OpenAI.Color size={24} />       // hasColor
<OpenAI.Brand size={24} />       // hasBrand
<OpenAI.BrandColor size={24} />  // hasBrandColor
<OpenAI.Text size={32} />        // hasText
<OpenAI.TextCn size={32} />      // hasTextCn
<OpenAI.TextColor size={32} />   // hasTextColor
<OpenAI.Combine size={64} />     // hasCombine
<OpenAI.Combine size={64} type="color" />  // hasCombine (color variant)
<OpenAI.Avatar size={64} />      // hasAvatar
```

Common props: `size`, `style`, `className`.

### Available Icon Names

Icons are exported by PascalCase id. Examples: `OpenAI`, `Claude`, `DeepSeek`, `Google`, `Aws`, `Bedrock`, `Microsoft`, `LobeHub`, `Github`, `Anthropic`, `Gemini`, `Meta`, `Mistral`, `Perplexity`, `Cohere`, `Zhipu`, `ByteDance`, `AlibabaCloud`, etc.

For the full list, see [reference/providers.md](reference/providers.md).

## Vue Components

Use named imports in Vue single-file components:

```vue
<script setup lang="ts">
import {
  DeepSeek,
  ModelIcon,
  ModelProvider,
  OpenAI,
  ProviderCombine,
  ProviderIcon,
} from '@lobehub/icons-vue';
</script>

<template>
  <OpenAI :size="24" aria-label="OpenAI" />
  <DeepSeek.Color :size="32" />
  <DeepSeek.Combine :size="32" type="color" />
  <OpenAI.Avatar :size="40" type="gpt5" shape="square" />
  <ModelIcon model="gpt-5" :size="24" type="mono" />
  <ProviderIcon provider="deepseek" :size="24" type="color" />
  <ProviderCombine :provider="ModelProvider.OpenAI" :size="32" type="mono" />
</template>
```

The base component renders a monochrome SVG. Available variants match the React
icons: `Color`, `Text`, `TextCn`, `TextColor`, `Brand`, `BrandColor`, `Combine`, and
`Avatar`. Check the `toc` entry's `param` flags before using a variant. Each icon
family also exposes `title`, `colorPrimary`, and any additional brand color constants.

Use Vue's `class`, `style`, event bindings, and standard SVG / ARIA attributes.
Monochrome icons inherit `currentColor`. SVG `size` accepts a number or CSS size;
Avatar and Combine components use numeric pixel sizes. Bind numeric values with
`:size="24"` in templates.

### Vue Imports

Named imports support tree shaking. Direct imports select a single brand or variant:

```ts
import OpenAI from '@lobehub/icons-vue/OpenAI';
import DeepSeekColor from '@lobehub/icons-vue/es/DeepSeek/components/Color';
import { type IconProps } from '@lobehub/icons-vue';
```

The package ships ESM JavaScript and TypeScript declarations. Consumers do not
need JSX support or a special Vue plugin to use the compiled components.

### Vue Helpers

Import helpers from `@lobehub/icons-vue`:

- `ModelIcon`, `ProviderIcon`, and `AgentIcon` resolve IDs using the shared ordered
  mappings. Their `type` prop accepts `avatar`, `mono`, `color`, `combine`, or
  `combine-color`. Unknown IDs render a neutral fallback icon.
- `ProviderCombine` renders a provider's combined mark.
- `ModelTag` renders an inline model label and icon using native elements and Vue
  attributes rather than React UI Tag props.
- `IconAvatar` and `IconCombine` provide Vue layout primitives. React UI layout
  props and theme-driven avatar shadows are not included.
- `ModelProvider`, `modelMappings`, `providerMappings`, `agentMappings`, `toc`, and
  `getLobeIconCDN` are also exported. The catalog metadata and CDN URL options
  described below apply to Vue as well.

For custom Vue icons, use `IconProps` / `IconType` exported by `@lobehub/icons-vue`
and call the `useFillId` or `useFillIds` composables during `setup`. These use Vue's `useId()` to keep SVG
gradient, mask, and clip-path IDs distinct and stable during SSR hydration. For
multiple independent Vue apps on one page, set a distinct `app.config.idPrefix`
per app and use the same prefix on server and client. The React custom-icon
example below uses React's `memo`; use Vue component APIs when creating Vue icons.

## Helper Components

### ModelIcon — Render icon by model ID string

```tsx
import { ModelIcon } from '@lobehub/icons';

<ModelIcon model="gpt-4o" size={24} />
<ModelIcon model="claude-3-opus" size={24} />
```

### ProviderIcon — Render icon by provider key

```tsx
import { ProviderIcon } from '@lobehub/icons';

<ProviderIcon provider="openai" size={28} type="mono" />
<ProviderIcon provider="anthropic" size={28} type="color" />
```

### ProviderCombine — Logo + text combined

```tsx
import { ProviderCombine, ModelProvider } from '@lobehub/icons';

<ProviderCombine provider={ModelProvider.OpenAI} size={32} type="mono" />
<ProviderCombine provider="anthropic" size={32} type="color" />
```

### ModelProvider enum

```tsx
import { ModelProvider } from '@lobehub/icons';

ModelProvider.OpenAI; // "openai"
ModelProvider.Anthropic; // "anthropic"
ModelProvider.Google; // "google"
ModelProvider.DeepSeek; // "deepseek"
// ... 130+ providers
```

## CDN URLs (Static Assets)

Use `getLobeIconCDN` to generate direct URLs to icon images without React:

```tsx
import { getLobeIconCDN } from '@lobehub/icons';

// Default: PNG, light mode, color variant, GitHub CDN
getLobeIconCDN('openai');
// → https://raw.githubusercontent.com/.../light/openai-color.png

getLobeIconCDN('openai', {
  format: 'svg', // 'svg' | 'png' | 'webp' | 'avatar'
  type: 'mono', // 'mono' | 'color' | 'text' | 'text-cn' | 'brand' | 'brand-color'
  isDarkMode: true, // affects PNG/WebP path (dark/ vs light/)
  cdn: 'aliyun', // 'github' (default) | 'aliyun' | 'unpkg'
});
```

### CDN URL Patterns

**SVG** (no light/dark distinction):

```
# GitHub
https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-svg/icons/{id}.svg
https://raw.githubusercontent.com/.../icons/{id}-color.svg
https://raw.githubusercontent.com/.../icons/{id}-text.svg

# unpkg
https://unpkg.com/@lobehub/icons-static-svg@latest/icons/{id}.svg

# Aliyun (npmmirror)
https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/{id}.svg
```

**PNG/WebP** (with light/dark):

```
# GitHub
https://raw.githubusercontent.com/.../packages/static-png/{light|dark}/{id}.png
https://raw.githubusercontent.com/.../packages/static-png/{light|dark}/{id}-color.png

# unpkg
https://unpkg.com/@lobehub/icons-static-png@latest/{light|dark}/{id}.png
```

**Avatar** (WebP only):

```
https://raw.githubusercontent.com/.../packages/static-png/avatars/{id}.webp
```

Slug naming: `{id}` = lowercase icon id. Variant suffix: `-color`, `-text`, `-text-cn`, `-brand`, `-brand-color`. Mono has no suffix.

## Icon Table of Contents (toc)

```tsx
import { toc } from '@lobehub/icons';

// toc: IconToc[]
```

```typescript
interface IconToc {
  id: string; // PascalCase identifier, e.g. "OpenAI"
  title: string; // Short name
  fullTitle: string; // Full display name
  color: string; // Brand hex color
  colorGradient?: string; // Optional gradient
  desc: string; // Official URL
  docsUrl: string; // Docs path
  group: 'model' | 'provider' | 'application';
  param: {
    hasColor: boolean;
    hasText: boolean;
    hasTextCn: boolean;
    hasTextColor: boolean;
    hasBrand: boolean;
    hasBrandColor: boolean;
    hasCombine: boolean;
    hasAvatar: boolean;
  };
}
```

Use `toc` to discover available icons, filter by group, or check which variants an icon supports.

## Custom Icons with IconType

Create custom icons compatible with the lobe-icons system:

```tsx
import { type IconType, useFillIds } from '@lobehub/icons';
import { memo } from 'react';

const MyIcon: IconType = memo(({ size = '1em', style, ...rest }) => {
  const [maskA, maskB] = useFillIds('my-icon', 2); // unique SVG mask IDs
  return (
    <svg
      height={size}
      width={size}
      viewBox="0 0 24 24"
      style={{ flex: 'none', lineHeight: 1, ...style }}
      {...rest}
    >
      {/* SVG content */}
    </svg>
  );
});
```

## Related Packages

| Package                      | Use case                            |
| ---------------------------- | ----------------------------------- |
| `@lobehub/icons`             | React components (tree-shakable)    |
| `@lobehub/icons-vue`         | Vue 3.5+ components (tree-shakable) |
| `@lobehub/icons-rn`          | React Native                        |
| `@lobehub/icons-static-svg`  | Static SVG files                    |
| `@lobehub/icons-static-png`  | Static PNG files (light/dark)       |
| `@lobehub/icons-static-webp` | Static WebP files (light/dark)      |
