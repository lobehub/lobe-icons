---
nav: Components
group: Model
title: Voyage
atomId: Voyage
description: https://voyageai.com
---

## Icons

```tsx
import { Voyage } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Voyage size={64} />
    <Voyage.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Voyage } from '@lobehub/icons';

export default () => <Voyage.Text size={48} />;
```

## Avatars

```tsx
import { Voyage } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Voyage.Avatar size={64} />
    <Voyage.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Voyage } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Voyage.colorPrimary} />
  </Flexbox>
);
```
