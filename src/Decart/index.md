---
nav: Components
group: Provider
title: Decart
atomId: Decart
description: https://decart.ai
---

## Icons

```tsx
import { Decart } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Decart size={64} />
    <Decart.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Decart } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Decart.Text size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { Decart } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Decart.Combine size={64} />
    <Decart.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Decart } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Decart.Avatar size={64} />
    <Decart.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Decart } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Decart.colorPrimary} />
  </Flexbox>
);
```
