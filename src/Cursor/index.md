---
nav: Components
group: Application
title: Cursor
atomId: Cursor
description: https://cursor.com
---

## Icons

```tsx
import { Cursor } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Cursor size={64} />;
```

## Text

```tsx
import { Cursor } from '@lobehub/icons';

export default () => <Cursor.Text size={48} />;
```

## Combine

```tsx
import { Cursor } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Cursor.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Cursor } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Cursor.Avatar size={64} />
    <Cursor.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Cursor } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Cursor.colorPrimary} />
  </Flexbox>
);
```
