---
nav: Components
group: Provider
title: Higress
atomId: Higress
description: https://higress.cn/
---

## Icons

```tsx
import { Higress } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Higress size={64} />
    <Higress.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Higress } from '@lobehub/icons';

export default () => <Higress.Text size={48} />;
```

## Combine

```tsx
import { Higress } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Higress.Combine size={64} />
    <Higress.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Higress } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Higress.Avatar size={64} background={Higress.colorPrimary} />
    <Higress.Avatar size={64} />
    <Higress.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Higress } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Higress.colorPrimary} />
    <ColorPreview color={Higress.colorGradient} />
  </Flexbox>
);
```
