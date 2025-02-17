---
nav: Components
group: Provider
title: SambaNova
atomId: SambaNova
description: https://sambanova.ai
---

## Icons

```tsx
import { SambaNova } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <SambaNova size={64} />
    <SambaNova.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { SambaNova } from '@lobehub/icons';

export default () => <SambaNova.Text size={48} />;
```

## Combine

```tsx
import { SambaNova } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <SambaNova.Combine size={64} />
    <SambaNova.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { SambaNova } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <SambaNova.Avatar size={64} />
    <SambaNova.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { SambaNova } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={SambaNova.colorPrimary} />
  </Flexbox>
);
```
