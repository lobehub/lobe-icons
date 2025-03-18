---
nav: Components
group: Provider
title: Infinigence (无问芯穹)
atomId: Infinigence
description: https://cloud.infini-ai.com
---

## Icons

```tsx
import { Infinigence } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Infinigence size={64} />
    <Infinigence.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Infinigence } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Infinigence.Text size={48} />
    <Infinigence.TextCn size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { Infinigence } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Infinigence.Combine size={64} />
    <Infinigence.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Infinigence } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Infinigence.Avatar size={64} />
    <Infinigence.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Infinigence } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Infinigence.colorPrimary} />
  </Flexbox>
);
```
