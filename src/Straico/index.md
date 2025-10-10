---
nav: Components
group: Provider
title: Straico
atomId: Straico
description: https://straico.com
---

## Icons

```tsx
import { Straico } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Straico size={64} />
    <Straico.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Straico } from '@lobehub/icons';

export default () => <Straico.Text size={48} />;
```

## Combine

```tsx
import { Straico } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Straico.Combine size={64} />
    <Straico.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Straico } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Straico.Avatar size={64} />
    <Straico.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Straico } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Straico.colorPrimary} />
  </Flexbox>
);
```
