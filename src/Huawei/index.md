---
nav: Components
group: Provider
title: Huawei
atomId: Huawei
description: https://huawei.com
---

## Icons

```tsx
import { Huawei } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Huawei size={64} />
    <Huawei.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Huawei } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Huawei.Text size={48} />
    <Huawei.TextCn size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { Huawei } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Huawei.Combine size={64} />
    <Huawei.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Huawei } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Huawei.Avatar size={64} />
    <Huawei.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Huawei } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Huawei.colorPrimary} />
  </Flexbox>
);
```
