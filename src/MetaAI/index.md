---
nav: Components
group:
  title: Application
  order: 10
title: MetaAI
atomId: MetaAI
description: https://meta.ai
---

## Icons

```tsx
import { MetaAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <MetaAI size={64} />
    <MetaAI.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { MetaAI } from '@lobehub/icons';

export default () => <MetaAI.Text size={48} />;
```

## Combine

```tsx
import { MetaAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <MetaAI.Combine size={64} />
    <MetaAI.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { MetaAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <MetaAI.Avatar size={64} />
    <MetaAI.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { MetaAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={MetaAI.colorPrimary} />
  </Flexbox>
);
```
