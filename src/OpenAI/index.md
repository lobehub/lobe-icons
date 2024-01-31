---
nav: Components
group: Icons
title: OpenAI (ChatGPT)
atomId: OpenAI
description: https://openai.com
---

## Icons

```tsx
import { OpenAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <OpenAI size={64} />;
```

## Text

```tsx
import { OpenAI } from '@lobehub/icons';

export default () => <OpenAI.Text size={48} />;
```

## Combine

```tsx
import { OpenAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <OpenAI.Combine size={64} />
    <OpenAI.Combine size={64} extra={'ChatGPT'} showText={false} />
  </Flexbox>
);
```

## Avatars

```tsx
import { OpenAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <OpenAI.Avatar size={64} />
    <OpenAI.Avatar size={64} type={'gpt3'} />
    <OpenAI.Avatar size={64} type={'gpt4'} />
    <OpenAI.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
/**
 * inline: true
 */
import { OpenAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={OpenAI.colorPrimary} />
    <ColorPreview color={OpenAI.colorGpt3} />
    <ColorPreview color={OpenAI.colorGpt4} />
  </Flexbox>
);
```
