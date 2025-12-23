---
nav: Components
group: Application
title: Udio
atomId: Udio
description: https://udio.com
---

## Icons

```tsx
import { Udio } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Udio size={64} />
    <Udio.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Udio } from '@lobehub/icons';

export default () => <Udio.Text size={48} />;
```

## Avatars

```tsx
import { Udio } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Udio.Avatar size={64} />
    <Udio.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Udio } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Udio.colorPrimary} />
  </Flexbox>
);
```
