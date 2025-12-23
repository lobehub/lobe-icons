---
nav: Components
group: Model
title: Phind
atomId: Phind
description: https://phind.com
---

## Icons

```tsx
import { Phind } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <Phind size={64} />;
```

## Text

```tsx
import { Phind } from '@lobehub/icons';

export default () => <Phind.Text size={48} />;
```

## Combine

```tsx
import { Phind } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Phind.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Phind } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Phind.Avatar size={64} />
    <Phind.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Phind } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Phind.colorPrimary} />
  </Flexbox>
);
```
