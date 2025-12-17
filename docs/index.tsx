import { Snippet } from '@lobehub/ui';
import { Features, FeaturesProps } from '@lobehub/ui/awesome';
import { Expand, GitPullRequest, Trees } from 'lucide-react';
import { Center, Flexbox } from 'react-layout-kit';

import Dashboard from '@/components/Dashboard';

const items: FeaturesProps['items'] = [
  {
    description:
      'Icons are designed to be lightweight, utilizing highly optimized scalable vector graphics (SVG) for the best performance and quality.',
    icon: Expand,
    title: 'Lightweight & Scalable',
  },
  {
    description:
      'The collection is tree-shakable, ensuring that you only import the icons that you use, which helps in reducing the overall bundle size of your project.',
    icon: Trees,
    title: 'Tree Shakable',
  },
  {
    description:
      'Lobe Icons boasts an active community of designers and developers. Engage with us on platforms like GitHub and Discord to contribute or get support.',
    icon: GitPullRequest,
    title: 'Active Community',
  },
];

export default () => {
  return (
    <Flexbox gap={48}>
      <Center>
        <h2 style={{ fontSize: 20 }}>To install Lobe Icons, run the following command:</h2>
        <Snippet language={'bash'}>{'$ bun add @lobehub/icons'}</Snippet>
        <div style={{ marginTop: 16, zIndex: 100 }}>
          <a
            href="https://www.producthunt.com/products/lobe-icons?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-lobe&#0045;icons"
            rel="noreferrer"
            target="_blank"
          >
            <img
              alt="Lobe&#0032;Icons - A&#0032;Collection&#0032;of&#0032;AI&#0032;Company&#0032;&#0032;&#0047;&#0032;LLM&#0032;Model&#0032;Logo | Product Hunt"
              height="54"
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1047110&theme=light&t=1765199661410"
              style={{ height: 54, width: 250 }}
              width="250"
            />
          </a>
        </div>
      </Center>
      <Dashboard />
      <Features items={items} />
    </Flexbox>
  );
};
