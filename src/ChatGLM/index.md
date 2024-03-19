---
nav: Components
group: Model
atomId: ChatGLM
title: Zhipu (ChatGLM)
description: https://github.com/THUDM/ChatGLM-6B
---

## Icons

```tsx
import { ChatGLM } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <ChatGLM size={64} />
    <ChatGLM.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { ChatGLM } from '@lobehub/icons';

export default () => <ChatGLM.Text size={48} />;
```

## Combine

```tsx
import { ChatGLM } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <ChatGLM.Combine size={64} />
    <ChatGLM.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { ChatGLM } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <ChatGLM.Avatar size={64} background={ChatGLM.colorPrimary} />
    <ChatGLM.Avatar size={64} />
    <ChatGLM.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { ChatGLM } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={ChatGLM.colorPrimary} />
    <ColorPreview color={ChatGLM.colorGradient} />
  </Flexbox>
);
```
