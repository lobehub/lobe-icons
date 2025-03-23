---
nav: Components
group: Application
title: Vectorizer.AI
atomId: VectorizerAI
description: https://vectorizer.ai
---

## Icons

```tsx
import { VectorizerAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <VectorizerAI size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { VectorizerAI } from '@lobehub/icons';

export default () => <VectorizerAI.Text size={48} />;
```

## Combine

```tsx
import { VectorizerAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <VectorizerAI.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { VectorizerAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <VectorizerAI.Avatar size={64} />
    <VectorizerAI.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { VectorizerAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={VectorizerAI.colorPrimary} />
  </Flexbox>
);
```
