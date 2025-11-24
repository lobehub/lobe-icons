---
nav: Components
group: Provider
title: ZenMux
atomId: ZenMux
description: https://zenmux.ai
---

## Icons

```tsx
import { ZenMux } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <ZenMux size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { ZenMux } from '@lobehub/icons';

export default () => <ZenMux.Text size={48} />;
```

## Combine

```tsx
import { ZenMux } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <ZenMux.Combine size={64} inverse />
    <ZenMux.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { ZenMux } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <ZenMux.Avatar size={64} />
    <ZenMux.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { ZenMux } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={ZenMux.colorPrimary} />
  </Flexbox>
);
```
