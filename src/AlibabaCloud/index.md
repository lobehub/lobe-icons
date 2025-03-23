---
nav: Components
group: Provider
title: AlibabaCloud (阿里云)
atomId: AlibabaCloud
description: https://aliyun.com
---

## Icons

```tsx
import { AlibabaCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <AlibabaCloud size={64} />
    <AlibabaCloud.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { AlibabaCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <AlibabaCloud.Text size={48} />
    <AlibabaCloud.TextCn size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { AlibabaCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <AlibabaCloud.Combine size={64} />
    <AlibabaCloud.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { AlibabaCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <AlibabaCloud.Avatar size={64} />
    <AlibabaCloud.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { AlibabaCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={AlibabaCloud.colorPrimary} />
  </Flexbox>
);
```
