---
nav: Components
group: Icons
title: Hunyuan (腾讯混元)
atomId: Hunyuan
description: https://hunyuan.tencent.com
---

## Icons

```tsx
import { Hunyuan } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Hunyuan size={64} />
    <Hunyuan.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Hunyuan } from '@lobehub/icons';

export default () => <Hunyuan.Text size={48} />;
```

## Combine

```tsx
import { Hunyuan } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Hunyuan.Combine size={64} />
    <Hunyuan.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Hunyuan } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Hunyuan.Avatar size={64} />
    <Hunyuan.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Hunyuan } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Hunyuan.colorPrimary} />
  </Flexbox>
);
```
