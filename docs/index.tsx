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
      </Center>
      <Dashboard />
      <Features items={items} />
    </Flexbox>
  );
};
