---
nav: Components
group: Provider
title: ByteDance
atomId: ByteDance
description: https://bytedance.com
---

## Icons

```tsx
import { ByteDance } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <ByteDance size={64} />
    <ByteDance.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { ByteDance } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <ByteDance.Text size={48} />
    <ByteDance.TextCn size={48} />
  </Flexbox>
);
```

## Brands

```tsx
import { ByteDance } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <ByteDance.Brand size={64} />
    <ByteDance.BrandColor size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { ByteDance } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <ByteDance.Avatar size={64} />
    <ByteDance.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { ByteDance } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={ByteDance.colorPrimary} />
  </Flexbox>
);
```
