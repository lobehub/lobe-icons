---
nav: Components
group: Model
title: Arcee
atomId: Arcee
description: https://www.arcee.ai/
---

## Icons

```tsx
import { Arcee } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Arcee size={64} />
    <Arcee.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Arcee } from '@lobehub/icons';

export default () => <Arcee.Text size={48} />;
```

## Combine

```tsx
import { Arcee } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Arcee.Combine size={64} />
    <Arcee.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Arcee } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Arcee.Avatar size={64} />
    <Arcee.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Arcee } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Arcee.colorPrimary} />
  </Flexbox>
);
```
