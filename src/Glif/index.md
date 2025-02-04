---
nav: Components
group: Application
title: Glif
atomId: Glif
description: https://glif.app
---

## Icons

```tsx
import { Glif } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Glif size={64} />;
```

## Text

```tsx
import { Glif } from '@lobehub/icons';

export default () => <Glif.Text size={48} />;
```

## Avatars

```tsx
import { Glif } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Glif.Avatar size={64} />
    <Glif.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Glif } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Glif.colorPrimary} />
  </Flexbox>
);
```
