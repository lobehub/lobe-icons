---
nav: Components
group: Provider
title: Replicate
atomId: Replicate
description: https://replicate.com
---

## Icons

```tsx
import { Replicate } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Replicate size={64} />
  </Flexbox>
);
```

## Brands

```tsx
import { Replicate } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Replicate.Brand size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Replicate } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Replicate.Avatar size={64} />
    <Replicate.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Replicate } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Replicate.colorPrimary} />
  </Flexbox>
);
```
