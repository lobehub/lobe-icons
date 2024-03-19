---
nav: Components
group: Model
title: Yi (零一万物)
atomId: Yi
description: https://www.lingyiwanwu.com/
---

## Icons

```tsx
import { Yi } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Yi size={64} />
    <Yi.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Yi } from '@lobehub/icons';

export default () => <Yi.Text size={48} />;
```

## Combine

```tsx
import { Yi } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Yi.Combine size={64} />
    <Yi.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Yi } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Yi.Avatar size={64} />
    <Yi.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Yi } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Yi.colorPrimary} />
  </Flexbox>
);
```
