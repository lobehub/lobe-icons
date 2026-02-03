---
nav: Components
group: Application
title: Lovart
atomId: Lovart
description: https://lovart.ai
---

## Icons

```tsx
import { Lovart } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <Lovart size={64} />;
```

## Text

```tsx
import { Lovart } from '@lobehub/icons';

export default () => <Lovart.Text size={48} />;
```

## Combine

```tsx
import { Lovart } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Lovart.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Lovart } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Lovart.Avatar size={64} />
    <Lovart.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Lovart } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Lovart.colorPrimary} />
  </Flexbox>
);
```
