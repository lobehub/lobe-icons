---
name: using-docs-kit
description: >
  Set up and author a documentation site with @lobehub/docs-kit (the `lobedocs` CLI, React Router
  + Vite static docs used by ui.lobehub.com). Covers consumer repo layout, docs.config.ts,
  package scripts, component doc pages (index.mdx frontmatter, `?demo` imports, <Demo>, <Api>),
  guide pages, home page, changelog, and the build-time validations that reject bad docs.
  Trigger on docs-kit, lobedocs, defineDocsConfig, docs.config.ts, migrate from dumi, write
  component docs, add a demo, <Demo>, <Api>, index.mdx, 文档站, 写文档, 组件文档, 迁移 dumi.
---

# Using @lobehub/docs-kit

The consumer repo holds **only content + `docs.config.ts`**. The kit owns Vite and React Router
config; do not add `vite.config.ts` or `react-router.config.ts` unless overriding (see
[reference/config.md](reference/config.md)).

lobe-ui itself is the reference consumer: `docs.config.ts`, `docs/`, `src/*/index.mdx`,
`src/*/demos/`.

## 1. Repo layout

```
<repo>/
├── docs.config.ts          # defineDocsConfig({...}) — required
├── package.json            # lobedocs scripts
├── docs/
│   ├── index.mdx           # "/" — required (frontmatter feeds SEO even with a custom homePage)
│   ├── changelog.mdx       # "/changelog" — optional; else root CHANGELOG.md is used
│   └── home/home.tsx       # optional custom landing page (config.homePage)
├── src/
│   └── Button/
│       ├── index.ts        # barrel export — <Api> resolves props through it
│       ├── Button.tsx
│       ├── type.ts         # props with JSDoc
│       ├── index.mdx       # -> /components/button
│       └── demos/
│           ├── index.tsx   # default-export component
│           └── Variant.tsx
├── public/                 # static assets served at "/" (favicons, og images)
└── CHANGELOG.md
```

Hard rules the compiler enforces:

- Only files named **`index.mdx`** under an `atomDirs` root become component pages
  (`index.md` and `README.md` are ignored).
- Demo files must live under **`src/**/demos/**`** — standalone `/~demos/:id` routes and
  `isolated` demos are globbed from that path only.
- Other `docs/**/*.mdx` files are **not** discovered unless listed in `publicDocs`.

## 2. Install and scripts

```bash
pnpm add -D @lobehub/docs-kit @react-router/dev@8.2.0 react-router@8.2.0 vite@8.1.4 tsx
pnpm add react react-dom # ^19
```

```json
{
  "scripts": {
    "docs:dev": "lobedocs dev",
    "docs:build": "lobedocs build",
    "postinstall": "lobedocs typegen"
  }
}
```

`lobedocs build` writes the static site to `dist/` (Pagefind search, sitemap, `/llms.txt`,
`/skills.md` are generated automatically). Node >= 22.22.

## 3. Minimal `docs.config.ts`

```ts
export default {
  atomDirs: [{ dir: 'src' }],
  title: 'Lobe Editor',
  description: 'One sentence describing the library.',
  siteUrl: 'https://editor.lobehub.com',
  alias: { '@': 'src', '@lobehub/editor': 'src' }, // let demos import the package from source
  themeConfig: {
    apiHeader: {
      packageName: '@lobehub/editor', // defaults to @lobehub/ui — always set it
      github: 'https://github.com/lobehub/lobe-editor',
    },
    socialLinks: [
      { href: 'https://github.com/lobehub/lobe-editor', icon: 'github', label: 'GitHub' },
    ],
  },
};
```

> The package's only stable JS entry is `@lobehub/docs-kit/react-router-config`; there is no
> root export for `defineDocsConfig`. It is an identity function, so export a plain object.
> (lobe-ui imports it from `./packages/docs-kit/src/config` only because it is the workspace.)

**Restart `lobedocs dev` after editing `docs.config.ts`** — config is cached per process.

All fields (multiple `atomDirs`, `subType`, `homePage`, `publicDocs`, `navItems`, giscus,
analytics, `legacyRedirects`) are in [reference/config.md](reference/config.md).

## 4. Writing a component page (`src/<Name>/index.mdx`)

Template:

```mdx
---
title: Button
description: Button triggers an action. Supports variants, sizes, loading and icon slots.
category: General
order: -1
---

import Variants from './demos/Variant.tsx?demo';
import Basic from './demos/index.tsx?demo';

## Introduction

One or two paragraphs: what it is, when to use it, when to use something else.

## Basic Usage

<Demo of={Basic} title="Basic usage" layout="bare" />

## Variants

Explain the dimension first, then show it.

<Demo of={Variants} title="Variants" />

## API

<Api name="Button" />

Additionally, Button supports all props of antd's Button except `icon`.
```

### Frontmatter

| Field         | Required        | Effect                                                                                                                        |
| ------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `title`       | yes             | H1, `<title>`, sidebar label. If PascalCase, the header shows `import { Title } from '<packageName>'` — match the export name |
| `description` | yes             | Subtitle, meta/OG description, search, llms.txt. One or two plain sentences, no markdown                                      |
| `category`    | yes (component) | Sidebar group inside the section. Reuse existing names; `General` sorts first                                                 |
| `order`       | no              | Number, lower first within category; unset sorts last, then by title                                                          |
| `status`      | no              | `stable` \| `beta` \| `experimental` \| `deprecated`                                                                          |
| `since`       | no              | Version string                                                                                                                |
| `route`       | no              | Override the URL; component pages must stay under `/components/`                                                              |

Anything else (`group`, `nav`, `apiHeader`, dumi's `hero`) is ignored — remove it.

URL is derived from the folder: `src/Button/index.mdx` → `/components/button`,
`src/base-ui/Select/index.mdx` → `/components/base-ui/select` (each segment kebab-cased).

### Headings

The page already renders `title` as the H1. Start body sections at `##`; a stray `#` is
downgraded to H2. Every heading gets an anchor and appears in the outline and llms.txt, so use
short, stable, noun-style headings (`## Variants`, `## Controlled`, `## API`).

### Demos

```mdx
import Basic from './demos/index.tsx?demo';

<Demo of={Basic} title="Basic usage" description="Optional caption." layout="center" />
```

| Prop                    | Default     | Use                                                                                     |
| ----------------------- | ----------- | --------------------------------------------------------------------------------------- |
| `of`                    | —           | Required. The `?demo` import (without `?demo` you get the raw component and it fails)   |
| `title` / `description` | —           | Caption above the demo                                                                  |
| `layout`                | `'default'` | `'bare'` no padding/frame (playgrounds, full-width); `'center'` centered small elements |
| `isolated`              | `false`     | Render in an iframe — for fixed/portal/global-CSS demos that would leak into the page   |
| `editable`              | `true`      | Set `false` if the demo uses dynamic `import()`, workers, or odd local deps             |
| `height`                | —           | Frame height, e.g. for isolated demos                                                   |

Demo file rules:

- Exactly one `export default` component; import the library by its **package name**
  (`import { Button } from '@lobehub/editor'`) so the shown source is copy-pasteable — the
  `alias` maps it back to `src/`.
- One idea per demo; name files after the idea (`Variant.tsx`, `Controlled.tsx`), `index.tsx`
  for the basic one.
- Keep it self-contained: no fetching, no reliance on site state; mock data inline.
- Interactive playgrounds (lobe-ui style) use `StoryBook` + `useControls` from
  `@lobehub/ui/storybook` with `layout="bare"`.

### API table

```mdx
<Api name="Button" />                      <!-- resolves via nearest index.ts barrel -->
<Api name="ChatItem" from=".." />          <!-- module path relative to this index.mdx -->
```

Only static `name` and `from` are allowed (`data` is compiler-owned; `migrationKey` in old
lobe-ui pages is inert). Props are extracted from TypeScript, so the quality of the table is the
quality of your types:

```ts
export interface ButtonProps {
  /**
   * Adds a frosted-glass background.
   * @default false
   */
  glass?: boolean;
  /** @deprecated Use `variant="filled"` instead. */
  filled?: boolean;
}
```

- The JSDoc body is the description; supported tags: `@default`, `@deprecated`, `@since`.
- `@default` must match the runtime destructuring default, or the build fails.
- `any` / `unknown` props fail the build — type them.
- Props starting with `_` are hidden; inherited React/HTML attributes collapse into a footnote.

### Other MDX content

- Globals available without import: only `Demo` and `Api`. Import anything else explicitly
  (e.g. `import { Alert } from '@lobehub/ui'`).
- GFM is on (tables, task lists, strikethrough). No `:::` callout syntax.
- Code fences are highlighted only — never executed. dumi's ` ```tsx | pure ` meta is
  harmless but meaningless; plain ` ```tsx ` is preferred for new pages.
- `.md` files can be imported as components: `import Changelog from '../CHANGELOG.md'`.

## 5. Guides, home, changelog

- **Guide pages**: add `docs/<path>.mdx` (frontmatter `title` + `description`) and list it in
  `publicDocs: ['docs/<path>.mdx']` → served at `/<path>`. Guides get no sidebar entry; link to
  them via `themeConfig.navItems`.
- **Home**: `docs/index.mdx` needs frontmatter. Without `homePage`, the default home is built
  from `themeConfig.home` (hero, features, install). With `homePage: './docs/home/home.tsx'`,
  that module's default export renders instead and receives
  `{ description: string; getStartedPathname: string }`.
- **Changelog**: either `docs/changelog.mdx` importing `../CHANGELOG.md`, or just a root
  `CHANGELOG.md` (no frontmatter needed).

## 6. Workflow for adding or migrating a page

```
- [ ] index.mdx exists at src/<Name>/index.mdx with title, description, category
- [ ] every <Demo of={X}> has a matching `import X from './demos/….tsx?demo'`
- [ ] demos default-export and import the package by name
- [ ] <Api name> matches an exported component; props typed with JSDoc
- [ ] dumi leftovers removed: <code src=…>, `group:`, `nav:`, `hero:`, `apiHeader:` frontmatter
- [ ] `lobedocs dev`, open the page, check demos + API table render
- [ ] `lobedocs build` passes (it runs all audits)
```

When the build fails, the error lists the offending file and rule; see
[reference/validations.md](reference/validations.md) for every rule and the fix.

## Additional resources

- [reference/config.md](reference/config.md) — every `docs.config.ts` field, multi-package
  `atomDirs`, sections/navigation, React Router overrides, tsconfig for typegen
- [reference/validations.md](reference/validations.md) — what fails `lobedocs build` and why
