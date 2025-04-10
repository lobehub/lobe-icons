---
nav: Components
group: Provider
title: Crusoe
atomId: Crusoe
description: https://crusoe.ai
---

## Icons

```tsx
import { Crusoe } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Crusoe size={64} />
    <Crusoe.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Crusoe } from '@lobehub/icons';

export default () => <Crusoe.Text size={48} />;
```

## Combine

```tsx
import { Crusoe } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Crusoe.Combine size={64} />
    <Crusoe.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Crusoe } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Crusoe.Avatar size={64} />
    <Crusoe.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Crusoe } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Crusoe.colorPrimary} />
  </Flexbox>
);
```
