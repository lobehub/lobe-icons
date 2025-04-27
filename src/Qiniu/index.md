---
nav: Components
group: Provider
title: Qiniu (七牛云)
atomId: Qiniu
description: https://qiniu.com
---

## Icons

```tsx
import { Qiniu } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Qiniu size={64} />
    <Qiniu.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Qiniu } from '@lobehub/icons';

export default () => <Qiniu.Text size={48} />;
```

## Combine

```tsx
import { Qiniu } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Qiniu.Combine size={64} />
    <Qiniu.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Qiniu } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Qiniu.Avatar size={64} />
    <Qiniu.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Qiniu } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Qiniu.colorPrimary} />
  </Flexbox>
);
```
