---
nav: Components
group: Provider
title: Phala
atomId: Phala
description: https://phala.com
---

## Icons

```tsx
import { Phala } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Phala size={64} />
    <Phala.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Phala } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Phala.Text size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { Phala } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Phala.Combine size={64} />
    <Phala.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Phala } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Phala.Avatar size={64} />
    <Phala.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Phala } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Phala.colorPrimary} />
  </Flexbox>
);
```
