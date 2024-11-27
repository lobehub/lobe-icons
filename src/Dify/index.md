---
nav: Components
group:
  title: Application
  order: 10
title: Dify
atomId: Dify
description: https://dify.ai
---

## Icons

```tsx
import { Dify } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Dify size={64} />
    <Dify.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Dify } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Dify.Text size={48} />
    <Dify.TextColor size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { Dify } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Dify.Combine size={64} />
    <Dify.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Dify } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Dify.Avatar size={64} />
    <Dify.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Dify } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Dify.colorPrimary} />
    <ColorPreview color={Dify.colorGradient} />
  </Flexbox>
);
```
