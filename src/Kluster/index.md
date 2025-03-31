---
nav: Components
group: Provider
title: Kluster
atomId: Kluster
description: https://kluster.ai
---

## Icons

```tsx
import { Kluster } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Kluster size={64} />
    <Kluster.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Kluster } from '@lobehub/icons';

export default () => <Kluster.Text size={48} />;
```

## Combine

```tsx
import { Kluster } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Kluster.Combine size={64} />
    <Kluster.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Kluster } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Kluster.Avatar size={64} />
    <Kluster.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Kluster } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Kluster.colorPrimary} />
  </Flexbox>
);
```
