---
nav: Components
group: Model
title: Doubao (豆包)
atomId: Doubao
description: https://team.doubao.com
---

## Icons

```tsx
import { Doubao } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Doubao size={64} />
    <Doubao.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Doubao } from '@lobehub/icons';

export default () => <Doubao.Text size={48} />;
```

## Combine

```tsx
import { Doubao } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Doubao.Combine size={64} />
    <Doubao.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Doubao } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Doubao.Avatar size={64} />
    <Doubao.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Doubao } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Doubao.colorPrimary} />
  </Flexbox>
);
```
