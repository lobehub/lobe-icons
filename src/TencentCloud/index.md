---
nav: Components
group: Model
title: TencentCloud (腾讯云)
atomId: TencentCloud
description: https://cloud.tencent.com
---

## Icons

```tsx
import { TencentCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <TencentCloud size={64} />
    <TencentCloud.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { TencentCloud } from '@lobehub/icons';

export default () => <TencentCloud.Text size={48} />;
```

## Combine

```tsx
import { TencentCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <TencentCloud.Combine size={64} />
    <TencentCloud.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { TencentCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <TencentCloud.Avatar size={64} />
    <TencentCloud.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { TencentCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={TencentCloud.colorPrimary} />
  </Flexbox>
);
```
