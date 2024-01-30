import { ReactNode, memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import IconPreview from '@/IconPreview';
import ColorPreview from '@/IconPreview/ColorPreview';

interface IconShowcaseProps {
  avatar: ReactNode;
  color: ReactNode;
  combine?: ReactNode;
  mono: ReactNode;
  primaryColor: string;
  text?: ReactNode;
}

const IconShowcase = memo<IconShowcaseProps>(
  ({ color, mono, combine, text, primaryColor, avatar }) => {
    return (
      <Flexbox gap={32} style={{ flexWrap: 'wrap' }}>
        <Flexbox align={'flex-start'} gap={16}>
          <h2 style={{ lineHeight: 1, margin: 0 }}>Icons</h2>
          <Flexbox gap={16} horizontal style={{ flexWrap: 'wrap' }}>
            <IconPreview>{color}</IconPreview>
            <IconPreview>{mono}</IconPreview>
            {avatar}
          </Flexbox>
        </Flexbox>
        {text && (
          <Flexbox align={'flex-start'} gap={16}>
            <h2 style={{ lineHeight: 1, margin: 0 }}>Texts</h2>
            <IconPreview>{text}</IconPreview>
          </Flexbox>
        )}
        {combine && (
          <Flexbox align={'flex-start'} gap={16}>
            <h2 style={{ lineHeight: 1, margin: 0 }}>Combines</h2>
            <Flexbox gap={16} horizontal style={{ flexWrap: 'wrap' }}>
              {combine}
            </Flexbox>
          </Flexbox>
        )}
        <Flexbox align={'flex-start'} gap={16}>
          <h2 style={{ lineHeight: 1, margin: 0 }}>Colors</h2>
          <Flexbox gap={16} horizontal style={{ flexWrap: 'wrap' }}>
            <ColorPreview color={primaryColor} />
          </Flexbox>
        </Flexbox>
      </Flexbox>
    );
  },
);

export default IconShowcase;
