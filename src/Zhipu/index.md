---
nav: Components
group: Provider
title: Zhipu (智谱)
atomId: Zhipu
description: https://zhipuai.cn
---

## Icons

```tsx
import { Zhipu } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Zhipu size={64} />
    <Zhipu.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Zhipu } from '@lobehub/icons';

export default () => <Zhipu.Text size={48} />;
```

## Combine

```tsx
import { Zhipu } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Zhipu.Combine size={64} />
    <Zhipu.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Zhipu } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Zhipu.Avatar size={64} />
    <Zhipu.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Zhipu } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Zhipu.colorPrimary} />
  </Flexbox>
);
```
