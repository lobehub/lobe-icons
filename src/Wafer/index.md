---
nav: Components
group: Application
title: Wafer
atomId: Wafer
description: https://wafer.ai
---

## Icons

```tsx
import { Wafer } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Wafer size={64} />
    <Wafer.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Wafer } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Wafer.Text size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { Wafer } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Wafer.Combine size={64} />
    <Wafer.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Wafer } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Wafer.Avatar size={64} />
    <Wafer.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Wafer } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Wafer.colorPrimary} />
  </Flexbox>
);
```
