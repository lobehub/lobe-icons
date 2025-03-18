---
nav: Components
group: Application
title: Greptile
atomId: Greptile
description: https://greptile.com
---

## Icons

```tsx
import { Greptile } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Greptile size={64} />
    <Greptile.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Greptile } from '@lobehub/icons';

export default () => <Greptile.Text size={48} />;
```

## Combine

```tsx
import { Greptile } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Greptile.Combine size={64} />
    <Greptile.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Greptile } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Greptile.Avatar size={64} />
    <Greptile.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Greptile } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Greptile.colorPrimary} />
  </Flexbox>
);
```
