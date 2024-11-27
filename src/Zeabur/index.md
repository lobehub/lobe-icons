---
nav: Components
group: Application
title: Zeabur
atomId: Zeabur
description: https://zeabur.com
---

## Icons

```tsx
import { Zeabur } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Zeabur size={64} />
    <Zeabur.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Zeabur } from '@lobehub/icons';

export default () => <Zeabur.Text size={48} />;
```

## Combine

```tsx
import { Zeabur } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Zeabur.Combine size={64} />
    <Zeabur.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Zeabur } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Zeabur.Avatar size={64} />
    <Zeabur.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Zeabur } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Zeabur.colorPrimary} />
  </Flexbox>
);
```
