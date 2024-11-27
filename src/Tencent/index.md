---
nav: Components
group: Provider
title: Tencent
atomId: Tencent
description: https://tencent.com
---

## Icons

```tsx
import { Tencent } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Tencent size={64} />
    <Tencent.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Tencent } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Tencent.Text size={48} />
    <Tencent.TextCn size={48} />
  </Flexbox>
);
```

## Brands

```tsx
import { Tencent } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Tencent.Brand size={64} />
    <Tencent.BrandColor size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Tencent } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Tencent.Avatar size={64} />
    <Tencent.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Tencent } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Tencent.colorPrimary} />
  </Flexbox>
);
```
