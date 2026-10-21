---
name: building-landing-home
description: >
  Compose a product or documentation home page from the @lobehub/ui/awesome landing components:
  LandingHero, AgentSkillCard, LogoMarquee, LandingSection, BentoGrid/BentoCard, CodeShowcase,
  FeatureGrid, InstallBanner and FluidGradient. Covers page structure, the lobedocs homePage
  hook, router links, theming the accent gradient, and a review checklist. Trigger on build a
  home page, landing page, docs home, marketing page, hero section, redesign home, lobedocs
  homePage, 首页, 落地页, 官网首页.
---

# Building a landing home with @lobehub/ui/awesome

Every band of a landing page has a component. Your job is to choose the bands, write honest copy
and render real product UI inside them, not to restyle containers.

## Components

All components import from `@lobehub/ui/awesome`. Read each one's page before using a prop you
have not seen here: `https://ui.lobehub.com/skills/components/awesome/<kebab-name>.md`.

| Band                    | Component                 | Use it for                                                                                                         |
| ----------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Opening                 | `LandingHero`             | Badge, title with gradient `accent`, description, up to two `actions`, optional `aside` column.                    |
| Beside the hero text    | `AgentSkillCard`          | "I'm an Agent / I'm a Human" card: a prompt for coding agents and an install command for people.                   |
| Under the hero          | `LogoMarquee`             | Integrations or supported providers. Icons from `@lobehub/icons`.                                                  |
| Any middle band         | `LandingSection`          | Tag, title and description on the left, small `actions` on the right, content below. Wrap every middle band in it. |
| Live component gallery  | `BentoGrid` + `BentoCard` | Tiles that render real components; `colSpan`/`rowSpan` for emphasis; `href` to the docs page.                      |
| Code next to its result | `CodeShowcase`            | Two to four short snippets, each with a live `preview`.                                                            |
| Reasons to choose       | `FeatureGrid`             | Three or six cards of icon, title and one-sentence description.                                                    |
| Closing call to action  | `InstallBanner`           | Title, copyable install command, footnote with license and a docs link.                                            |
| Background texture      | `FluidGradient`           | Place it behind a positioned band when you want a texture. Needs a positioned parent.                              |

## Page structure

Default order. Drop a band rather than filling it with filler.

1. `LandingHero` with `aside={<AgentSkillCard />}` and `children={<LogoMarquee />}`.
2. `LandingSection` + `BentoGrid`: the widest, most visual proof.
3. `LandingSection` + `CodeShowcase`: how little code it takes.
4. `LandingSection` + `FeatureGrid`: foundations such as theming, i18n, performance.
5. `InstallBanner`.

```tsx
import {
  AgentSkillCard,
  InstallBanner,
  LandingHero,
  LandingSection,
  LogoMarquee,
} from '@lobehub/ui/awesome';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <LandingHero
        accent="UI Kit"
        actions={[
          {
            href: '/docs',
            icon: ArrowRight,
            iconPlacement: 'end',
            label: 'Get Started',
            primary: true,
          },
          { href: 'https://github.com/acme/kit', label: 'GitHub' },
        ]}
        aside={
          <AgentSkillCard
            agent={{
              code: 'Read https://kit.acme.dev/skills.md and follow it to build UI with @acme/kit.',
              description: 'Send this prompt to your agent to pick the right components',
            }}
            human={{
              code: 'npx skills add acme/kit',
              description: 'Install the skills into your project',
            }}
          />
        }
        description="One sentence on what it is and who it is for."
        title="Acme"
      >
        <LogoMarquee items={[/* { icon: OpenAI, label: 'OpenAI' } */]} />
      </LandingHero>

      <LandingSection
        actions={[{ href: '/components', label: 'Browse components' }]}
        eyebrow="Components"
        id="home-gallery"
        title="Built for AI interfaces"
      >
        {/* BentoGrid of live tiles */}
      </LandingSection>

      <InstallBanner
        command="pnpm add @acme/kit"
        footnote="Open source · MIT license"
        title="Start building"
      />
    </>
  );
}
```

## Wiring

- **lobedocs sites**: set `homePage: './docs/home/home.tsx'` in `docs.config.ts`. The default export
  receives `{ description, getStartedPathname }`; use `getStartedPathname` for the primary action.
- **Client-side routing**: `LandingHero`, `BentoCard` and `FeatureGrid` render plain anchors. Pass one
  shared `renderLink` so internal links use the router and absolute URLs open in a new tab:

```tsx
import type { LandingLinkRender } from '@lobehub/ui/awesome';
import { Link } from 'react-router';

export const renderLink: LandingLinkRender = ({ external, href, ...props }) =>
  external ? (
    <a href={href} rel="noreferrer" target="_blank" {...props} />
  ) : (
    <Link to={href} {...props} />
  );
```

- **Accent colour**: the gradient on the hero accent, eyebrows, outlined action and install glow
  reads `--lobe-landing-gradient`. Set it once on `:root` (and per theme) instead of overriding
  component styles. `FluidGradient` takes its three stops through `colors`.
- **Search indexing**: wrap the title and description in `<span data-pagefind-meta="title">` /
  `"description"` when the site uses Pagefind.

## AgentSkillCard content

- The agent prompt must point at a URL that exists: the site's `skills.md` (lobedocs generates it)
  or `llms.txt`. Say what the agent should do with it, in one sentence.
- The human command must be runnable as written. If the project has no skills package, drop
  `human` and the card shows the prompt alone.
- `agents` defaults to `DEFAULT_SKILL_AGENTS` (Claude Code, Codex, Cursor, Gemini CLI, GitHub
  Copilot, Windsurf, Cline, OpenCode). Replace it with the `.Avatar` components from
  `@lobehub/icons` that the project actually supports, or `[]` to hide the row.
- Use `footer` for secondary links such as `skills.md` and `llms.txt`.

## Copy and content rules

- Title: the product name, with the category or promise as `accent`. No more than four words.
- Description: one sentence, under 20 words, concrete ("React components for AIGC web apps"),
  never "powerful", "seamless" or "next-generation".
- At most two hero actions: one `primary`, one secondary.
- Bento tiles render real components with realistic data. A tile that cannot show something live
  does not belong in the grid. Give the most expressive component `colSpan={2} rowSpan={2}`.
- `CodeShowcase` snippets fit in about ten lines and compile as written.
- `FeatureGrid` uses three or six items; each description is one sentence.
- `LandingSection` `id` values must be unique; they label the headings.
- `eyebrow` is a one- or two-word tag ("Components", "Foundations"); give each band its own
  `eyebrowColor` preset (`blue`, `green`, `orange`…). Give a section at most one `actions` entry.
- Only the hero's Get Started action is `primary`. Every other action renders as
  `BottomGradientButton`; pass `onNavigate={useNavigate()}` so internal ones route client-side.

## Review checklist

1. Every link resolves: primary action, bento `href`s, prompt URL, footer links.
2. Light and dark mode both read well; the accent gradient is not the only thing carrying meaning.
3. At 375px wide the hero stacks, actions fill the width, and the bento grid is one column.
4. Nothing animates under `prefers-reduced-motion` (the marquee stops, the texture freezes).
5. Copy passes the rules above; no placeholder text or lorem ipsum remains.
