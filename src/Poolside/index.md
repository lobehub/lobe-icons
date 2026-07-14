---
nav: Components
group: Model
title: Poolside
atomId: Poolside
description: https://poolside.ai
---

## Icons

```tsx
import { Poolside } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Poolside size={64} />
    <Poolside.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Poolside } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Poolside.Text size={48} />
    <Poolside.TextColor size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { Poolside } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Poolside.Combine size={64} />
    <Poolside.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Poolside } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Poolside.Avatar size={64} />
    <Poolside.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Poolside } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Poolside.colorPrimary} />
  </Flexbox>
);
```
