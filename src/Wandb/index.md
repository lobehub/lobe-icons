---
nav: Components
group: Application
title: Wandb
atomId: Wandb
description: https://wandb.ai
---

## Icons

```tsx
import { Wandb } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Wandb size={64} />
    <Wandb.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Wandb } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Wandb.Text size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { Wandb } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Wandb.Combine size={64} />
    <Wandb.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Wandb } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Wandb.Avatar size={64} />
    <Wandb.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Wandb } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Wandb.colorPrimary} />
  </Flexbox>
);
```
