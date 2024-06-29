---
nav: Components
group: Provider
title: SiliconCloud (SiliconFlow)
atomId: SiliconCloud
description: https://siliconflow.cn/zh-cn/
---

## Icons

```tsx
import { SiliconCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <SiliconCloud size={64} />
    <SiliconCloud.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { SiliconCloud } from '@lobehub/icons';

export default () => <SiliconCloud.Text size={48} />;
```

## Combine

```tsx
import { SiliconCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <SiliconCloud.Combine size={64} />
    <SiliconCloud.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { SiliconCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <SiliconCloud.Avatar size={64} />
    <SiliconCloud.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { SiliconCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={SiliconCloud.colorPrimary} />
  </Flexbox>
);
```
