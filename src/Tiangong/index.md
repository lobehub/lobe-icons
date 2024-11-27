---
nav: Components
group:
  title: Application
  order: 10
title: Tiangong (天工)
atomId: Tiangong
description: https://www.tiangong.cn
---

## Icons

```tsx
import { Tiangong } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Tiangong size={64} />
    <Tiangong.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Tiangong } from '@lobehub/icons';

export default () => <Tiangong.Text size={48} />;
```

## Combine

```tsx
import { Tiangong } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Tiangong.Combine size={64} />
    <Tiangong.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Tiangong } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Tiangong.Avatar size={64} background={Tiangong.colorPrimary} />
    <Tiangong.Avatar size={64} />
    <Tiangong.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Tiangong } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Tiangong.colorPrimary} />
    <ColorPreview color={Tiangong.colorGradient} />
  </Flexbox>
);
```
