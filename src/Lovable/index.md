---
nav: Components
group: Application
title: Lovable
atomId: Lovable
description: https://lovable.dev
---

## Icons

```tsx
import { Lovable } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Lovable size={64} />
    <Lovable.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Lovable } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Lovable.Text size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { Lovable } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Lovable.Combine size={64} />
    <Lovable.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Lovable } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Lovable.Avatar size={64} />
    <Lovable.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Lovable } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Lovable.colorPrimary} />
  </Flexbox>
);
```
