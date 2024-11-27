---
nav: Components
group:
  title: Application
  order: 10
title: Luma
atomId: Luma
description: https://lumalabs.ai
---

## Icons

```tsx
import { Luma } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Luma size={64} />
    <Luma.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Luma } from '@lobehub/icons';

export default () => <Luma.Text size={48} />;
```

## Combine

```tsx
import { Luma } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Luma.Combine size={64} />
    <Luma.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Luma } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Luma.Avatar size={64} />
    <Luma.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Luma } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Luma.colorPrimary} />
  </Flexbox>
);
```
