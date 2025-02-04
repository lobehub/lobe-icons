---
nav: Components
group: Model
title: Xuanyuan (度小满轩辕)
atomId: Xuanyuan
description: https://github.com/Duxiaoman-DI/XuanYuan
---

## Icons

```tsx
import { Xuanyuan } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Xuanyuan size={64} />
    <Xuanyuan.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Xuanyuan } from '@lobehub/icons';

export default () => <Xuanyuan.Text size={48} />;
```

## Combine

```tsx
import { Xuanyuan } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Xuanyuan.Combine size={64} />
    <Xuanyuan.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Xuanyuan } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Xuanyuan.Avatar size={64} />
    <Xuanyuan.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Xuanyuan } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Xuanyuan.colorPrimary} />
  </Flexbox>
);
```
