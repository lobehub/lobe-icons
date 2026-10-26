---
nav: Components
group: Application
title: Kollab
atomId: Kollab
description: https://kollab.im
---

## Icons

```tsx
import { Kollab } from '@lobehub/icons';

export default () => <Kollab size={64} />;
```

## Text

```tsx
import { Kollab } from '@lobehub/icons';

export default () => <Kollab.Text size={48} />;
```

## Combine

```tsx
import { Kollab } from '@lobehub/icons';

export default () => <Kollab.Combine size={64} />;
```

## Avatars

```tsx
import { Kollab } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Kollab.Avatar size={64} />
    <Kollab.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Kollab } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Kollab.colorPrimary} />
  </Flexbox>
);
```
