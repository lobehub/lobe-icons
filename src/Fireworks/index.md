---
nav: Components
group: Provider
title: Fireworks
atomId: Fireworks
description: https://fireworks.ai
---

## Icons

```tsx
import { Fireworks } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Fireworks size={64} />
    <Fireworks.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Fireworks } from '@lobehub/icons';

export default () => <Fireworks.Text size={48} />;
```

## Combine

```tsx
import { Fireworks } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Fireworks.Combine size={64} />
    <Fireworks.Combine type={'color'} size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Fireworks } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Fireworks.Avatar size={64} />
    <Fireworks.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Fireworks } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Fireworks.colorPrimary} />
  </Flexbox>
);
```
