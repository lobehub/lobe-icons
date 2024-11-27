---
nav: Components
group:
  title: Application
  order: 10
title: MyShell
atomId: MyShell
description: https://myshell.ai
---

## Icons

```tsx
import { MyShell } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <MyShell size={64} />
    <MyShell.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { MyShell } from '@lobehub/icons';

export default () => <MyShell.Text size={48} />;
```

## Combine

```tsx
import { MyShell } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <MyShell.Combine size={64} />
    <MyShell.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { MyShell } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <MyShell.Avatar size={64} />
    <MyShell.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { MyShell } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={MyShell.colorPrimary} />
  </Flexbox>
);
```
