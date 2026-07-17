---
nav: Components
group: Provider
title: Sakana
atomId: Sakana
description: https://sakana.ai
---

## Icons

```tsx
import { Sakana } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Sakana size={64} />
    <Sakana.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Sakana } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Sakana.Text size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { Sakana } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Sakana.Combine size={64} />
    <Sakana.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Sakana } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Sakana.Avatar size={64} />
    <Sakana.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Sakana } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Sakana.colorPrimary} />
  </Flexbox>
);
```
