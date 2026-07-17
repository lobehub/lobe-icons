---
nav: Components
group: Provider
title: Mancer
atomId: Mancer
description: https://mancer.tech
---

## Icons

```tsx
import { Mancer } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Mancer size={64} />
    <Mancer.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Mancer } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Mancer.Text size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { Mancer } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Mancer.Combine size={64} />
    <Mancer.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Mancer } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Mancer.Avatar size={64} />
    <Mancer.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Mancer } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Mancer.colorPrimary} />
  </Flexbox>
);
```
