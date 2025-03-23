---
nav: Components
group: Provider
title: DeepInfra
atomId: DeepInfra
description: https://deepinfra.com
---

## Icons

```tsx
import { DeepInfra } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <DeepInfra size={64} />
    <DeepInfra.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { DeepInfra } from '@lobehub/icons';

export default () => <DeepInfra.Text size={48} />;
```

## Combine

```tsx
import { DeepInfra } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <DeepInfra.Combine size={64} />
    <DeepInfra.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { DeepInfra } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <DeepInfra.Avatar size={64} />
    <DeepInfra.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { DeepInfra } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={DeepInfra.colorPrimary} />
  </Flexbox>
);
```
