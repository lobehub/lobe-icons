---
nav: Components
group: Model
title: Spark (讯飞星火)
atomId: Spark
description: https://xinghuo.xfyun.cn
---

## Icons

```tsx
import { Spark } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Spark size={64} />
    <Spark.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Spark } from '@lobehub/icons';

export default () => <Spark.Text size={48} />;
```

## Combine

```tsx
import { Spark } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Spark.Combine size={64} />
    <Spark.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Spark } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Spark.Avatar size={64} />
    <Spark.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Spark } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Spark.colorPrimary} />
  </Flexbox>
);
```
