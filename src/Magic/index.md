---
nav: Components
group: Model
title: Magic
atomId: Magic
description: https://magic.dev
---

## Icons

```tsx
import { Magic } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <Magic size={64} />;
```

## Text

```tsx
import { Magic } from '@lobehub/icons';

export default () => <Magic.Text size={48} />;
```

## Combine

```tsx
import { Magic } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Magic.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Magic } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Magic.Avatar size={64} />
    <Magic.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Magic } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Magic.colorPrimary} />
  </Flexbox>
);
```
