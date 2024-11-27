---
nav: Components
group: Application
title: V0 (Vercel)
atomId: V0
description: https://v0.dev
---

## Icons

```tsx
import { V0 } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <V0 size={64} />;
```

## Avatars

```tsx
import { V0 } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <V0.Avatar size={64} />
    <V0.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { V0 } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={V0.colorPrimary} />
  </Flexbox>
);
```
