---
nav: Components
group: Provider
title: Alibaba
atomId: Alibaba
description: https://alibaba.com
---

## Icons

```tsx
import { Alibaba } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Alibaba size={64} />
    <Alibaba.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Alibaba } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Alibaba.Text size={48} />
    <Alibaba.TextCn size={48} />
  </Flexbox>
);
```

## Brands

```tsx
import { Alibaba } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Alibaba.Brand size={64} />
    <Alibaba.BrandColor size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Alibaba } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Alibaba.Avatar size={64} />
    <Alibaba.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Alibaba } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Alibaba.colorPrimary} />
  </Flexbox>
);
```
