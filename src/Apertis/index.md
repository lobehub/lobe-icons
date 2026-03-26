---
nav: Components
group: Provider
title: Apertis
atomId: Apertis
description: https://apertis.ai
---

## Icons

```tsx
import { Apertis } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Apertis size={64} />
    <Apertis.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Apertis } from '@lobehub/icons';

export default () => <Apertis.Text size={48} />;
```

## Combine

```tsx
import { Apertis } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Apertis.Combine size={64} />
    <Apertis.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Apertis } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Apertis.Avatar size={64} />
    <Apertis.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Apertis } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Apertis.colorPrimary} />
  </Flexbox>
);
```
