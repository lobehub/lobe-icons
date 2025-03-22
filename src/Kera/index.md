---
nav: Components
group: Application
title: Kera
atomId: Kera
description: https://kera.ai
---

## Icons

```tsx
import { Kera } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Kera size={64} />;
```

## Text

```tsx
import { Kera } from '@lobehub/icons';

export default () => <Kera.Text size={48} />;
```

## Combine

```tsx
import { Kera } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Kera.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Kera } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Kera.Avatar size={64} />
    <Kera.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Kera } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Kera.colorPrimary} />
  </Flexbox>
);
```
