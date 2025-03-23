---
nav: Components
group: Provider
title: StateCloud (天翼云)
atomId: StateCloud
description: https://ctyun.cn/act/xirang/deepseek
---

## Icons

```tsx
import { StateCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <StateCloud size={64} />
    <StateCloud.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { StateCloud } from '@lobehub/icons';

export default () => <StateCloud.Text size={48} />;
```

## Combine

```tsx
import { StateCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <StateCloud.Combine size={64} />
    <StateCloud.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { StateCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <StateCloud.Avatar size={64} />
    <StateCloud.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { StateCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={StateCloud.colorPrimary} />
  </Flexbox>
);
```
