---
nav: Components
group: Model
title: Meshy
atomId: Meshy
description: https://meshy.ai
---

## Icons

```tsx
import { Meshy } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Meshy size={64} />
    <Meshy.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Meshy } from '@lobehub/icons';

export default () => <Meshy.Text size={48} />;
```

## Combine

```tsx
import { Meshy } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Meshy.Combine size={64} />
    <Meshy.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Meshy } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Meshy.Avatar size={64} />
    <Meshy.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Meshy } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Meshy.colorPrimary} />
  </Flexbox>
);
```
