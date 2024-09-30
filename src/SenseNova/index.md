---
nav: Components
group: Provider
title: SenseNova
atomId: SenseNova
description: https://platform.sensenova.cn
---

## Icons

```tsx
import { SenseNova } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <SenseNova size={64} />
    <SenseNova.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { SenseNova } from '@lobehub/icons';

export default () => <SenseNova.Text size={48} />;
```

## Combine

```tsx
import { SenseNova } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <SenseNova.Combine size={64} />
    <SenseNova.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Brands

```tsx
import { SenseNova } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <SenseNova.Brand size={64} />
    <SenseNova.BrandColor size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { SenseNova } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <SenseNova.Avatar size={64} />
    <SenseNova.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { SenseNova } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={SenseNova.colorPrimary} />
  </Flexbox>
);
```
