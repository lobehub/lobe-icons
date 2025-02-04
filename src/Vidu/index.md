---
nav: Components
group:
  title: Application
  order: 10
title: Vidu
atomId: Vidu
description: https://vidu.com
---

## Icons

```tsx
import { Vidu } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Vidu size={64} />
    <Vidu.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Vidu } from '@lobehub/icons';

export default () => <Vidu.Text size={48} />;
```

## Combine

```tsx
import { Vidu } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Vidu.Combine size={64} />
    <Vidu.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Vidu } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Vidu.Avatar size={64} background={Vidu.colorPrimary} />
    <Vidu.Avatar size={64} />
    <Vidu.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Vidu } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Vidu.colorPrimary} />
    <ColorPreview color={Vidu.colorGradient} />
  </Flexbox>
);
```
