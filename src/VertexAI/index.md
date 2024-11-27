---
nav: Components
group: Provider
title: VertexAI (Google)
atomId: VertexAI
description: https://cloud.google.com/generative-ai-studio
---

## Icons

```tsx
import { VertexAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <VertexAI size={64} />
    <VertexAI.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { VertexAI } from '@lobehub/icons';

export default () => <VertexAI.Text size={48} />;
```

## Combine

```tsx
import { VertexAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <VertexAI.Combine size={64} />
    <VertexAI.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { VertexAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <VertexAI.Avatar size={64} />
    <VertexAI.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { VertexAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={VertexAI.colorPrimary} />
  </Flexbox>
);
```
