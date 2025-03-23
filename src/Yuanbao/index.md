---
nav: Components
group: Application
title: Yuanbao (腾讯元宝)
atomId: Yuanbao
description: https://yuanbao.tencent.com
---

## Icons

```tsx
import { Yuanbao } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Yuanbao size={64} />
    <Yuanbao.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Yuanbao } from '@lobehub/icons';

export default () => <Yuanbao.Text size={48} />;
```

## Combine

```tsx
import { Yuanbao } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Yuanbao.Combine size={64} />
    <Yuanbao.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Yuanbao } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Yuanbao.Avatar size={64} />
    <Yuanbao.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Yuanbao } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Yuanbao.colorPrimary} />
  </Flexbox>
);
```
