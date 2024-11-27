---
nav: Components
group: Model
title: RWKV
atomId: Rwkv
description: https://github.com/RWKV
---

## Icons

```tsx
import { Rwkv } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Rwkv size={64} />
    <Rwkv.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Rwkv } from '@lobehub/icons';

export default () => <Rwkv.Text size={48} />;
```

## Combine

```tsx
import { Rwkv } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Rwkv.Combine size={64} />
    <Rwkv.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Rwkv } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Rwkv.Avatar size={64} background={Rwkv.colorPrimary} />
    <Rwkv.Avatar size={64} />
    <Rwkv.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Rwkv } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Rwkv.colorPrimary} />
  </Flexbox>
);
```
