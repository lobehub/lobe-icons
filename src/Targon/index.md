---
nav: Components
group: Provider
title: Targon
atomId: Targon
description: https://targon.com
---

## Icons

```tsx
import { Targon } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Targon size={64} />
    <Targon.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Targon } from '@lobehub/icons';

export default () => <Targon.Text size={48} />;
```

## Combine

```tsx
import { Targon } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Targon.Combine size={64} />
    <Targon.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Targon } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Targon.Avatar size={64} />
    <Targon.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Targon } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Targon.colorPrimary} />
  </Flexbox>
);
```
