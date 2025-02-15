---
nav: Components
group: Provider
title: PPIO
atomId: PPIO
description: https://ppinfra.com
---

## Icons

```tsx
import { PPIO } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <PPIO size={64} />
    <PPIO.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { PPIO } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <PPIO.Text size={48} />
    <PPIO.TextCn size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { PPIO } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <PPIO.Combine size={64} />
    <PPIO.Combine type={'color'} size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { PPIO } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <PPIO.Avatar size={64} />
    <PPIO.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { PPIO } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={PPIO.colorPrimary} />
  </Flexbox>
);
```
