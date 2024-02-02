---
nav: Components
group: Icons
title: Google (DeepMind)
atomId: DeepMind
description: https://deepmind.google
---

## Icons

```tsx
import { DeepMind } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <DeepMind size={64} />
    <DeepMind.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { DeepMind } from '@lobehub/icons';

export default () => <DeepMind.Text size={48} />;
```

## Combine

```tsx
import { DeepMind } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <DeepMind.Combine size={64} />
    <DeepMind.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { DeepMind } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <DeepMind.Avatar size={64} />
    <DeepMind.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { DeepMind } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={DeepMind.colorPrimary} />
  </Flexbox>
);
```
