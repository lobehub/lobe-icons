'use client';

import {
  AgentIcon,
  Claude,
  Cohere,
  DeepSeek,
  Gemini,
  Google,
  Grok,
  HuggingFace,
  Meta,
  Mistral,
  ModelIcon,
  ModelTag,
  Nvidia,
  OpenAI,
  Perplexity,
  ProviderCombine,
  Qwen,
} from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';
import {
  AgentSkillCard,
  BentoCard,
  BentoGrid,
  CodeShowcase,
  FeatureGrid,
  InstallBanner,
  LandingHero,
  type LandingLinkRender,
  LandingSection,
  LogoMarquee,
} from '@lobehub/ui/awesome';
import { GithubIcon } from '@lobehub/ui/icons';
import { ArrowRight, CircleUser, Globe, Layers, Palette, Search, Trees } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

import Dashboard from '@/components/Dashboard';

const renderLink: LandingLinkRender = ({ external, href, ...props }) =>
  external ? (
    <a href={href} rel="noreferrer" target="_blank" {...props} />
  ) : (
    <Link to={href} {...props} />
  );

const logos = [
  { icon: OpenAI, label: 'OpenAI' },
  { icon: Claude.Color, label: 'Claude' },
  { icon: Gemini.Color, label: 'Gemini' },
  { icon: DeepSeek.Color, label: 'DeepSeek' },
  { icon: Qwen.Color, label: 'Qwen' },
  { icon: Grok, label: 'Grok' },
  { icon: Meta.Color, label: 'Meta' },
  { icon: Mistral.Color, label: 'Mistral' },
  { icon: Google.Color, label: 'Google' },
  { icon: Nvidia.Color, label: 'NVIDIA' },
  { icon: HuggingFace.Color, label: 'Hugging Face' },
  { icon: Cohere.Color, label: 'Cohere' },
  { icon: Perplexity.Color, label: 'Perplexity' },
];

const brandMarks = [
  { Icon: Claude.Color, label: 'Claude' },
  { Icon: Gemini.Color, label: 'Gemini' },
  { Icon: DeepSeek.Color, label: 'DeepSeek' },
  { Icon: Qwen.Color, label: 'Qwen' },
  { Icon: Meta.Color, label: 'Meta' },
  { Icon: Mistral.Color, label: 'Mistral' },
  { Icon: Google.Color, label: 'Google' },
  { Icon: Nvidia.Color, label: 'NVIDIA' },
];

const modelIds = ['gpt-4o', 'claude', 'gemini', 'deepseek', 'qwen'];
const providers = ['openai', 'anthropic', 'google', 'mistral'];
const agentIds = ['claude-code', 'cursor', 'codex', 'gemini-cli'];

const clusterStyle = {
  display: 'grid',
  gap: 16,
  justifyContent: 'center',
} as const;

export default function Home({
  description,
  getStartedPathname,
}: {
  description: string;
  getStartedPathname: string;
}) {
  const navigate = useNavigate();

  return (
    <>
      <LandingHero
        accent="Icons"
        actions={[
          {
            href: getStartedPathname,
            icon: ArrowRight,
            iconPlacement: 'end',
            label: 'Get Started',
            primary: true,
          },
          {
            href: 'https://github.com/lobehub/lobe-icons',
            icon: GithubIcon,
            label: 'GitHub',
          },
        ]}
        aside={
          <AgentSkillCard
            agent={{
              code: 'Read https://icons.lobehub.com/skills.md and follow it to add AI brand icons with @lobehub/icons.',
              description: 'Send this prompt to your agent to use the icon set',
            }}
            footer={
              <>
                <a href="/skills.md" rel="noreferrer" target="_blank">
                  skills.md
                </a>
                <a href="/llms.txt" rel="noreferrer" target="_blank">
                  llms.txt
                </a>
              </>
            }
            human={{
              code: 'npm i @lobehub/icons',
              description: 'Install @lobehub/icons and start using the icon set',
            }}
          />
        }
        description={<span data-pagefind-meta="description">{description}</span>}
        onNavigate={navigate}
        renderLink={renderLink}
        title={<span data-pagefind-meta="title">Lobe</span>}
      >
        <LogoMarquee iconSize={28} items={logos} maxWidth="100%" />
      </LandingHero>

      <LandingSection
        description="Search every brand, then switch between color and mono."
        eyebrow="Catalog"
        eyebrowColor="purple"
        id="home-catalog"
        title="All icons"
      >
        <Dashboard />
      </LandingSection>

      <LandingSection
        actions={[{ href: getStartedPathname, label: 'Browse icons' }]}
        description="Color marks, monochrome marks, avatars, and wordmarks."
        eyebrow="Components"
        eyebrowColor="blue"
        id="home-gallery"
        onNavigate={navigate}
        renderLink={renderLink}
        title="Icons for the models you ship"
      >
        <BentoGrid>
          <BentoCard
            colSpan={2}
            hint="Color"
            href={getStartedPathname}
            renderLink={renderLink}
            rowSpan={2}
            title="Brand marks"
          >
            <div style={{ ...clusterStyle, gridTemplateColumns: 'repeat(4, 48px)' }}>
              {brandMarks.map(({ Icon, label }) => (
                <Icon key={label} size={48} />
              ))}
            </div>
          </BentoCard>
          <BentoCard
            colSpan={2}
            hint="By model id"
            href="/features/model-icon"
            renderLink={renderLink}
            title="ModelIcon"
          >
            <Flexbox gap={8} horizontal justify="center" style={{ maxWidth: 420 }} wrap="wrap">
              {modelIds.map((model) => (
                <ModelTag key={model} model={model} style={{ margin: 0 }} />
              ))}
            </Flexbox>
          </BentoCard>
          <BentoCard
            colSpan={2}
            hint="Name and logo"
            href="/features/provider-combine"
            renderLink={renderLink}
            title="ProviderCombine"
          >
            <Flexbox gap={12}>
              {providers.map((provider) => (
                <ProviderCombine key={provider} provider={provider} size={22} />
              ))}
            </Flexbox>
          </BentoCard>
          <BentoCard
            colSpan={2}
            hint="Tiles"
            href="/features/icon-avatar"
            renderLink={renderLink}
            title="Avatar"
          >
            <Flexbox gap={12} horizontal justify="center" wrap="wrap">
              <OpenAI.Avatar size={48} />
              <Claude.Avatar size={48} />
              <Gemini.Avatar size={48} />
              <DeepSeek.Avatar size={48} />
              <Qwen.Avatar size={48} />
            </Flexbox>
          </BentoCard>
          <BentoCard
            colSpan={2}
            hint="By agent id"
            href="/features/agent-icon"
            renderLink={renderLink}
            title="AgentIcon"
          >
            <Flexbox gap={16} horizontal justify="center" wrap="wrap">
              {agentIds.map((agent) => (
                <AgentIcon agent={agent} key={agent} size={44} />
              ))}
            </Flexbox>
          </BentoCard>
        </BentoGrid>
      </LandingSection>

      <LandingSection
        actions={[{ href: '/features/model-icon', label: 'Model lookup' }]}
        description="Import a brand, a model id, or a provider id."
        eyebrow="Usage"
        eyebrowColor="green"
        id="home-usage"
        onNavigate={navigate}
        renderLink={renderLink}
        title="A few lines, a real logo"
      >
        <CodeShowcase
          items={[
            {
              code: `import { Claude } from '@lobehub/icons';

export default () => <Claude.Color size={48} />;`,
              key: 'color',
              label: 'Color',
              preview: <Claude.Color size={48} />,
            },
            {
              code: `import { ModelIcon } from '@lobehub/icons';

export default () => <ModelIcon model="gpt-4o" size={48} />;`,
              key: 'model',
              label: 'Model',
              preview: <ModelIcon model="gpt-4o" size={48} />,
            },
            {
              code: `import { ProviderCombine } from '@lobehub/icons';

export default () => <ProviderCombine provider="openai" size={28} />;`,
              key: 'provider',
              label: 'Provider',
              preview: <ProviderCombine provider="openai" size={28} />,
            },
          ]}
          minHeight={220}
        />
      </LandingSection>

      <LandingSection
        description="Tree-shaken React components, plus a URL when you cannot ship React."
        eyebrow="Package"
        eyebrowColor="orange"
        id="home-package"
        title="Built to drop into an app"
      >
        <FeatureGrid
          items={[
            {
              description: 'Import one brand and the rest of the catalog stays out of the bundle.',
              icon: Trees,
              title: 'Tree-shakable',
            },
            {
              description: 'Each brand ships a currentColor mark and a color mark.',
              href: getStartedPathname,
              icon: Palette,
              title: 'Mono and color',
            },
            {
              description: 'ModelIcon maps a model id such as gpt-4o to the matching brand.',
              href: '/features/model-icon',
              icon: Search,
              title: 'Model lookup',
            },
            {
              description: 'ProviderCombine places the logo beside the provider name.',
              href: '/features/provider-combine',
              icon: Layers,
              title: 'Wordmarks',
            },
            {
              description: 'getLobeIconCDN returns a PNG, SVG, or WebP URL.',
              href: '/features/cdn-utils',
              icon: Globe,
              title: 'Static CDN',
            },
            {
              description: 'Avatar sets the logo on a brand-colored tile for lists and chats.',
              href: '/features/icon-avatar',
              icon: CircleUser,
              title: 'Avatars',
            },
          ]}
          renderLink={renderLink}
        />
      </LandingSection>

      <InstallBanner
        command="npm i @lobehub/icons"
        footnote={
          <>
            Open source · MIT license · <Link to={getStartedPathname}>Component docs</Link>
          </>
        }
        title="Add the icons"
      />
    </>
  );
}
