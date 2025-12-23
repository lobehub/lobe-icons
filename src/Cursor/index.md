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
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Cursor size={128} />
  </Flexbox>
);
```

## Text

```tsx
import { Cursor } from '@lobehub/icons';

export default () => <Cursor.Text size={48} />;
```

## Combine

```tsx
import { Cursor } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Cursor.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Cursor } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Cursor.Avatar size={64} type={'color'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Cursor } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Cursor.colorPrimary} />
  </Flexbox>
);
```
