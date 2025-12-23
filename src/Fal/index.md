---
nav: Components
group: Provider
title: Fal
atomId: Fal
description: https://fal.ai
---

## Icons

```tsx
import { Fal } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Fal size={64} />
    <Fal.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Fal } from '@lobehub/icons';

export default () => <Fal.Text size={48} />;
```

## Combine

```tsx
import { Fal } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Fal.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Fal } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Fal.Avatar size={64} />
    <Fal.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Fal } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Fal.colorPrimary} />
  </Flexbox>
);
```
