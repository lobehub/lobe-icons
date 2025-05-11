---
nav: Components
group:
  title: Application
  order: 10
title: Jimeng (即梦)
atomId: Jimeng
description: https://jimeng.jianying.com
---

## Icons

```tsx
import { Jimeng } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Jimeng size={64} />
    <Jimeng.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Jimeng } from '@lobehub/icons';

export default () => <Jimeng.Text size={48} />;
```

## Combine

```tsx
import { Jimeng } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Jimeng.Combine size={64} />
    <Jimeng.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Jimeng } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Jimeng.Avatar size={64} />
    <Jimeng.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Jimeng } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Jimeng.colorPrimary} />
  </Flexbox>
);
```
