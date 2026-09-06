---
nav: Components
group: Provider
title: IoNet
atomId: IoNet
description: https://io.net
---

## Icons

```tsx
import { IoNet } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <IoNet size={64} />
    <IoNet.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { IoNet } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <IoNet.Text size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { IoNet } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <IoNet.Combine size={64} />
    <IoNet.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { IoNet } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <IoNet.Avatar size={64} />
    <IoNet.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { IoNet } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={IoNet.colorPrimary} />
  </Flexbox>
);
```
