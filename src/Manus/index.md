---
nav: Components
group: Application
title: Manus
atomId: Manus
description: https://manus.im
---

## Icons

```tsx
import { Manus } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Manus size={64} />;
```

## Text

```tsx
import { Manus } from '@lobehub/icons';

export default () => <Manus.Text size={48} />;
```

## Combine

```tsx
import { Manus } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Manus.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Manus } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Manus.Avatar size={64} />
    <Manus.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Manus } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Manus.colorPrimary} />
  </Flexbox>
);
```
