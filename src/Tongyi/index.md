---
nav: Components
group: Model
title: Tongyi (通义)
atomId: Tongyi
description: https://tongyi.aliyun.com
---

## Icons

```tsx
import { Tongyi } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Tongyi size={64} />
    <Tongyi.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Tongyi } from '@lobehub/icons';

export default () => <Tongyi.Text size={48} />;
```

## Combine

```tsx
import { Tongyi } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Tongyi.Combine size={64} />
    <Tongyi.Combine size={64} type={'color'} />
    <Tongyi.Combine size={64} type={'color'} extra={'千问'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Tongyi } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Tongyi.Avatar size={64} background={Tongyi.colorPrimary} />
    <Tongyi.Avatar size={64} />
    <Tongyi.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Tongyi } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Tongyi.colorPrimary} />
    <ColorPreview color={Tongyi.colorGradient} />
  </Flexbox>
);
```
