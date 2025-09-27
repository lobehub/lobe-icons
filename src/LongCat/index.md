---
nav: Components
group: Model
title: LongCat
atomId: LongCat
description: https://longcat.chat/
---

## Icons

```tsx
import { LongCat } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <LongCat size={64} />
    <LongCat.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { LongCat } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <LongCat.Text size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { LongCat } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <LongCat.Combine size={64} />
    <LongCat.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { LongCat } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <LongCat.Avatar size={64} />
    <LongCat.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { LongCat } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={LongCat.colorPrimary} />
  </Flexbox>
);
```
