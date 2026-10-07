'use client';

import { Block, BlockProps, Flexbox, Icon, Segmented, Snippet, Text } from '@lobehub/ui';
import { BotIcon, UserRoundIcon } from 'lucide-react';
import { memo, useMemo, useState } from 'react';

type GuideMode = 'agent' | 'human';

interface GuideItem {
  command: string;
  commandLanguage?: string;
  description: string;
  linkHref?: string;
  linkLabel?: string;
}

interface AgentGuideCardProps extends BlockProps {
  className?: string;
  initialMode?: GuideMode;
  labels: {
    agent: string;
    human: string;
  };
  mode?: GuideMode;
  onModeChange?: (mode: GuideMode) => void;
  sections: {
    agent: GuideItem;
    human: GuideItem;
  };
}

const AgentGuideCard = memo<AgentGuideCardProps>(
  ({ className, initialMode = 'agent', labels, mode, onModeChange, sections, ...rest }) => {
    const [innerMode, setInnerMode] = useState<GuideMode>(initialMode);
    const currentMode = mode ?? innerMode;

    const handleModeChange = (value: GuideMode) => {
      if (!mode) setInnerMode(value);
      onModeChange?.(value);
    };

    const content = useMemo(() => sections[currentMode], [currentMode, sections]);

    return (
      <Block
        className={className}
        flex={'none'}
        shadow
        style={{ maxWidth: 960 }}
        variant={'outlined'}
        width={'100%'}
        {...rest}
      >
        <Flexbox flex={1} padding={8}>
          <Segmented
            block
            onChange={(value) => handleModeChange(value as GuideMode)}
            options={[
              {
                icon: <Icon icon={BotIcon} />,
                label: labels.agent,
                value: 'agent',
              },
              {
                icon: <Icon icon={UserRoundIcon} />,
                label: labels.human,
                value: 'human',
              },
            ]}
            value={currentMode}
            variant={'filled'}
          />
        </Flexbox>
        <Flexbox gap={8} paddingBlock={'8px 16px'} paddingInline={16}>
          <Text align={'center'} weight={500}>
            {content.description}
          </Text>
          {content.linkHref && content.linkLabel && (
            <Flexbox align={'center'}>
              <a
                href={content.linkHref}
                rel={'noreferrer'}
                style={{ fontSize: 13 }}
                target={'_blank'}
              >
                {content.linkLabel}
              </a>
            </Flexbox>
          )}
          <Snippet
            language={content.commandLanguage || 'shell'}
            style={{ fontSize: 12, width: '100%' }}
          >
            {content.command}
          </Snippet>
        </Flexbox>
      </Block>
    );
  },
);

export default AgentGuideCard;
