---
nav: Components
group: Application
title: Image 2
atomId: Image2
description: https://image2.to
---

## Icons

```tsx
import { Image2 } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Image2 size={64} />
    <Image2.Color size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Image2 } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Image2.Avatar size={64} />
    <Image2.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Image2 } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Image2.colorPrimary} />
  </Flexbox>
);
```
