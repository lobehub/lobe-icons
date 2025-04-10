---
nav: Components
group: Provider
title: Infermatic
atomId: Infermatic
description: https://infermatic.ai
---

## Icons

```tsx
import { Infermatic } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Infermatic size={64} />
    <Infermatic.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Infermatic } from '@lobehub/icons';

export default () => <Infermatic.Text size={48} />;
```

## Combine

```tsx
import { Infermatic } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Infermatic.Combine size={64} />
    <Infermatic.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Infermatic } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Infermatic.Avatar size={64} />
    <Infermatic.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Infermatic } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Infermatic.colorPrimary} />
  </Flexbox>
);
```
