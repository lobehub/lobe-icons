---
nav: Components
group: Application
title: Smithery
atomId: Smithery
description: https://smithery.ai
---

## Icons

```tsx
import { Smithery } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Smithery size={64} />
    <Smithery.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Smithery } from '@lobehub/icons';

export default () => <Smithery.Text size={48} />;
```

## Combine

```tsx
import { Smithery } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Smithery.Combine size={64} />
    <Smithery.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Smithery } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Smithery.Avatar size={64} />
    <Smithery.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Smithery } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Smithery.colorPrimary} />
  </Flexbox>
);
```
