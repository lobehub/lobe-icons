---
nav: Components
group: Application
title: LlamaIndex
atomId: LlamaIndex
description: https://llamaindex.ai
---

## Icons

```tsx
import { LlamaIndex } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <LlamaIndex size={64} />
    <LlamaIndex.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { LlamaIndex } from '@lobehub/icons';

export default () => <LlamaIndex.Text size={48} />;
```

## Combine

```tsx
import { LlamaIndex } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <LlamaIndex.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { LlamaIndex } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <LlamaIndex.Avatar size={64} />
    <LlamaIndex.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { LlamaIndex } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={LlamaIndex.colorPrimary} />
  </Flexbox>
);
```
