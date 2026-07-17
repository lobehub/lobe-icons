---
nav: Components
group: Model
title: Reka
atomId: Reka
description: https://reka.ai
---

## Icons

```tsx
import { Reka } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Reka size={64} />
    <Reka.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Reka } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Reka.Text size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { Reka } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Reka.Combine size={64} />
    <Reka.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Reka } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Reka.Avatar size={64} />
    <Reka.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Reka } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Reka.colorPrimary} />
  </Flexbox>
);
```
