---
nav: Components
group: Provider
title: Bilibili (哔哩哔哩)
atomId: Bilibili
description: https://github.com/bilibili
---

## Icons

```tsx
import { Bilibili } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Bilibili size={64} />
    <Bilibili.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Bilibili } from '@lobehub/icons';

export default () => <Bilibili.Text size={48} />;
```

## Combine

```tsx
import { Bilibili } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Bilibili.Combine size={64} />
    <Bilibili.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Bilibili } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Bilibili.Avatar size={64} />
    <Bilibili.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Bilibili } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Bilibili.colorPrimary} />
  </Flexbox>
);
```
