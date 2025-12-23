---
nav: Components
group: Application
title: Viggle
atomId: Viggle
description: https://viggle.ai
---

## Icons

```tsx
import { Viggle } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <Viggle size={64} />;
```

## Text

```tsx
import { Viggle } from '@lobehub/icons';

export default () => <Viggle.Text size={48} />;
```

## Combine

```tsx
import { Viggle } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Viggle.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Viggle } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Viggle.Avatar size={64} />
    <Viggle.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Viggle } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Viggle.colorPrimary} />
  </Flexbox>
);
```
