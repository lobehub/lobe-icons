'use client';

import { FeatureGrid, type LandingLinkRender } from '@lobehub/ui/awesome';
import { CircleUser, FileCode2, FileImage, Image } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router';

const renderLink: LandingLinkRender = ({ external, href, ...props }) =>
  external ? (
    <a href={href} rel="noreferrer" target="_blank" {...props} />
  ) : (
    <Link to={href} {...props} />
  );

/** Lucide-style framework logos (same assets as lucide.dev/packages). */
function FrameworkLogo({ name, alt }: { name: string; alt: string }): ReactNode {
  return (
    <img
      alt={alt}
      height={24}
      src={`/framework-logos/${name}.svg`}
      style={{ display: 'block', objectFit: 'contain' }}
      width={24}
    />
  );
}

const frameworkPackages = [
  {
    description: 'React components for AI model and provider logos.',
    href: 'https://www.npmjs.com/package/@lobehub/icons',
    icon: <FrameworkLogo alt="React" name="react" />,
    title: '@lobehub/icons',
  },
  {
    description: 'React Native / Expo icon components (requires react-native-svg).',
    href: 'https://www.npmjs.com/package/@lobehub/icons-rn',
    icon: <FrameworkLogo alt="React Native" name="react-native" />,
    title: '@lobehub/icons-rn',
  },
  {
    description: 'Vue 3 components for AI / LLM brand icons (Vue 3.5+).',
    href: 'https://www.npmjs.com/package/@lobehub/icons-vue',
    icon: <FrameworkLogo alt="Vue" name="vue" />,
    title: '@lobehub/icons-vue',
  },
];

const staticPackages = [
  {
    description: 'Static SVG files for CDN and plain HTML usage.',
    href: 'https://www.npmjs.com/package/@lobehub/icons-static-svg',
    icon: <FileCode2 size={24} />,
    title: '@lobehub/icons-static-svg',
  },
  {
    description: 'Static PNG files (light & dark) for CDN and plain HTML usage.',
    href: 'https://www.npmjs.com/package/@lobehub/icons-static-png',
    icon: <FileImage size={24} />,
    title: '@lobehub/icons-static-png',
  },
  {
    description: 'Static WEBP files (light & dark) for CDN and plain HTML usage.',
    href: 'https://www.npmjs.com/package/@lobehub/icons-static-webp',
    icon: <Image size={24} />,
    title: '@lobehub/icons-static-webp',
  },
  {
    description: 'Static avatar images (WEBP) for CDN usage.',
    href: 'https://www.npmjs.com/package/@lobehub/icons-static-avatar',
    icon: <CircleUser size={24} />,
    title: '@lobehub/icons-static-avatar',
  },
];

export default function Packages() {
  return (
    <>
      <p>
        Official first-party packages for using Lobe Icons across frameworks and static assets.
        Framework packages share the same brand catalog; static packages are CDN-friendly files.
      </p>

      <h2 id="framework">Framework</h2>
      <FeatureGrid columns={2} items={[...frameworkPackages]} renderLink={renderLink} />

      <h2 id="static">Static / CDN</h2>
      <FeatureGrid columns={2} items={[...staticPackages]} renderLink={renderLink} />

      <p>
        Resolve CDN URLs in React with <Link to="/features/cdn-utils">getLobeIconCDN</Link>. For Vue
        and React Native usage details, see the package READMEs on GitHub.
      </p>
    </>
  );
}
