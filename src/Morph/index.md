---
nav: Components
group: Model
title: Morph
atomId: Morph
description: https://morphllm.com
---

## Icons

```tsx
import { Morph } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Morph size={64} />
    <Morph.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Morph } from '@lobehub/icons';

export default () => <Morph.Text size={48} />;
```

## Combine

```tsx
import { Morph } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Morph.Combine size={64} />
    <Morph.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Morph } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Morph.Avatar size={64} />
    <Morph.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Morph } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Morph.colorPrimary} />
  </Flexbox>
);
```
