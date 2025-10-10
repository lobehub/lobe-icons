---
nav: Components
group: Provider
title: HuaweiCloud (华为云)
atomId: HuaweiCloud
description: https://HuaweiCloud.com
---

## Icons

```tsx
import { HuaweiCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <HuaweiCloud size={64} />
    <HuaweiCloud.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { HuaweiCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <HuaweiCloud.Text size={48} />
    <HuaweiCloud.TextCn size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { HuaweiCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <HuaweiCloud.Combine size={64} />
    <HuaweiCloud.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { HuaweiCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <HuaweiCloud.Avatar size={64} />
    <HuaweiCloud.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { HuaweiCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={HuaweiCloud.colorPrimary} />
  </Flexbox>
);
```
