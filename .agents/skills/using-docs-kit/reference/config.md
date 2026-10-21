# docs.config.ts reference

Source of truth: `packages/docs-kit/src/config.ts` (`DocsConfig`). Loaded once per process in a
`node --import tsx` subprocess, so it must be a pure module with a default export; restart
`lobedocs dev` after edits.

## Top-level fields

| Field             | Type                                                 | Notes                                                                                                  |
| ----------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `atomDirs`        | `{ dir: string; type?: string; subType?: string }[]` | Required. Roots scanned recursively for `index.mdx`                                                    |
| `title`           | `string`                                             | Required. Site name in `<title>`, OG, llms.txt                                                         |
| `description`     | `string`                                             | Required. Site summary                                                                                 |
| `siteUrl`         | `string`                                             | Required. Canonical origin (no trailing slash) for sitemap/OG/canonical                                |
| `alias`           | `Record<string, string>`                             | Vite aliases. Map your package name (and `pkg/es`) to `src` so demos import the package but run source |
| `homePage`        | `string`                                             | Path to a module whose default export is the landing page. Missing file = build error                  |
| `publicDocs`      | `string[]`                                           | Extra `docs/**/*.mdx` guide pages to publish (route = path without `docs/` and extension)              |
| `navSections`     | `Record<string, string>`                             | `{ 'src/foo/Bar/index.mdx': 'Section' }` — only for a page sitting outside its section's folder        |
| `favicons`        | `{ icon?, icon16?, icon32?, appleTouchIcon? }`       | Hrefs into `public/`; unset keys fall back to lobe-ui's paths, so set all four                         |
| `legacyRedirects` | `DocumentationInventory`                             | Frozen old-URL inventory (lobe-ui's `compatibility.json` from dumi). New sites: omit                   |

## `themeConfig`

| Field                      | Notes                                                                                                                         |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `apiHeader.packageName`    | Package shown in the component header import line and npm link. **Defaults to `@lobehub/ui`**                                 |
| `apiHeader.packageNames`   | `Record<subType, packageName>` for multi-package repos                                                                        |
| `apiHeader.github`         | Repo base URL; substituted for `{github}`                                                                                     |
| `apiHeader.docUrl`         | Edit-link template, default `{github}/edit/master/{atomId}` (`{atomId}` = mdx path). Change `master` if your branch is `main` |
| `apiHeader.sourceUrl`      | Source-link template, default `{github}/tree/master/{atomId}` (`{atomId}` = component dir)                                    |
| `apiHeader.match`          | Pathname prefixes that get Source/Edit links; default every `src/**` page                                                     |
| `navItems`                 | `{ href, label, external? }[]` sidebar links after Home (skills.md, llms.txt, Changelog are always appended)                  |
| `actions`                  | `{ href, label, external? }[]` text links in the top bar                                                                      |
| `socialLinks`              | `{ href, icon?, label }[]`; `icon: 'github'` becomes the top-bar GitHub button                                                |
| `prefersColor`             | `'auto'` (default, shows switcher) \| `'light'` \| `'dark'` (forced, no switcher)                                             |
| `giscus`                   | `{ repo, repoId, category, categoryId }` comments at page end                                                                 |
| `analytics.plausible`      | `{ domain, source }`                                                                                                          |
| `metadata.openGraph.image` | Default OG image URL                                                                                                          |
| `home`                     | Default landing page content (ignored when `homePage` is set), see below                                                      |

### `themeConfig.home`

```ts
home: {
  hero: {
    title: 'Lobe Editor',            // defaults to config.title
    accent: 'for AI apps',           // gradient text after the title
    actions: [{ href: '/components/editor', label: 'Get Started' }],
  },
  features: [{ title: 'Fast', description: '…', icon: 'Zap' }],
  install: 'pnpm add @lobehub/editor',
  ctaTitle: 'Get started in seconds',
  ctaFootnote: '…',
}
```

`features[].icon` keys: `Blocks`, `BookOpenText`, `Code`, `Globe`, `Languages`, `MoonStar`,
`Palette`, `Rocket`, `Shield`, `Sparkles`, `SunMoon`, `Zap`.

A custom `homePage` module:

```tsx
export default function Home({
  description,
  getStartedPathname,
}: {
  description: string;
  getStartedPathname: string;
}) {
  /* … */
}
```

## Sections and sidebar

Sidebar = **section → category → pages** (sorted by `order`, then `title`).

Section is derived per page:

1. `navSections[source]` if set.
2. `atomDirs[].subType` if set (capitalized, e.g. `plugins` → `Plugins`).
3. The second path segment when it is a lobe-ui namespace (`base-ui`, `chat`, `mobile`,
   `awesome`, `brand`, `mdx`, `icons`, `color`, `dashboard`, `storybook`) — lobe-ui specific.
4. Otherwise `Components`.

Avoid naming your own folders after those namespaces unless you want that grouping. Each section
and category also gets an overview page at `/sections/<section>` and
`/sections/<section>/<category>`.

## Multiple packages / roots

```ts
atomDirs: [
  { dir: 'src/react', subType: 'react' },
  { dir: 'src/plugins', subType: 'plugins' },
],
themeConfig: {
  apiHeader: {
    packageNames: { react: '@lobehub/editor/react', plugins: '@lobehub/editor/plugins' },
  },
},
```

With more than one root, `subType` is prefixed into the URL: `src/plugins/Mention/index.mdx` →
`/components/plugins/mention`. `type` is only a label in agent docs.

Keep demos under `src/**/demos/**` regardless — that is the only glob for standalone demos.

## React Router override (optional)

Only if you need e.g. a `basename`:

```ts
// react-router.config.ts
import { defineLobeDocsReactRouterConfig } from '@lobehub/docs-kit/react-router-config';

export default defineLobeDocsReactRouterConfig({ basename: '/docs' });
```

A consumer-authored `react-router.config.*` always wins and is never touched by the CLI.

## TypeScript

`lobedocs typegen` writes route types to `.react-router/types`. If you type-check the site, add
a `tsconfig.site.json` like lobe-ui's:

```json
{
  "compilerOptions": {
    "noEmit": true,
    "rootDirs": [".", "./.react-router/types"],
    "types": ["node", "vite/client"]
  },
  "extends": "./tsconfig.json",
  "include": [".react-router/types/**/*"]
}
```

Add `.react-router/` and `dist/` to `.gitignore`.
