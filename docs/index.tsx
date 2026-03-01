import { Center, Flexbox } from '@lobehub/ui';
import { Features, FeaturesProps } from '@lobehub/ui/awesome';
import { Expand, GitPullRequest, Trees } from 'lucide-react';

import AgentGuideCard from '@/components/AgentGuideCard';
import Dashboard from '@/components/Dashboard';

const ICONS_DOC_URL = 'https://lobehub.com/icons/skill.md';
const AI_AGENT_PROMPT = `Read ${ICONS_DOC_URL} and follow the instructions to use @lobehub/icons`;
const ICONS_INSTALL_COMMAND = 'npm i @lobehub/icons';

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
      <Center width="100%">
        <AgentGuideCard
          labels={{
            agent: "I'm an Agent",
            human: "I'm a Human",
          }}
          sections={{
            agent: {
              command: AI_AGENT_PROMPT,
              commandLanguage: 'shell',
              description: 'Send this prompt to your agent to use @lobehub/icons',
            },
            human: {
              command: ICONS_INSTALL_COMMAND,
              commandLanguage: 'shell',
              description: 'Install @lobehub/icons with npm and start using the icon set',
              linkHref: ICONS_DOC_URL,
              linkLabel: 'Read docs',
            },
          }}
        />
      </Center>
      <Dashboard />
      <Features items={items} />
    </Flexbox>
  );
};
