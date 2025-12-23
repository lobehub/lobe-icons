---
nav: Components
group: Provider
title: Baidu
atomId: Baidu
description: https://baidu.com
---

## Icons

```tsx
import { Baidu } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Baidu size={64} />
    <Baidu.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Baidu } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Baidu.Text size={48} />
    <Baidu.TextCn size={48} />
  </Flexbox>
);
```

## Brands

```tsx
import { Baidu } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Baidu.Brand size={64} />
    <Baidu.BrandColor size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Baidu } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Baidu.Avatar size={64} />
    <Baidu.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Baidu } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Baidu.colorPrimary} />
  </Flexbox>
);
```
