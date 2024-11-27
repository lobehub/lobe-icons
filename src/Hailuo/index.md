---
nav: Components
group:
  title: Application
  order: 10
title: Hailuo (海螺)
atomId: Hailuo
description: https://hailuoai.video
---

## Icons

```tsx
import { Hailuo } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Hailuo size={64} />
    <Hailuo.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Hailuo } from '@lobehub/icons';

export default () => <Hailuo.Text size={48} />;
```

## Combine

```tsx
import { Hailuo } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Hailuo.Combine size={64} />
    <Hailuo.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Hailuo } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Hailuo.Avatar size={64} />
    <Hailuo.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Hailuo } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Hailuo.colorPrimary} />
    <ColorPreview color={Hailuo.colorGradient} />
  </Flexbox>
);
```
