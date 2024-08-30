---
nav: Components
group: Model
title: Gemma (Google)
atomId: Gemma
description: https://ai.google.dev/gemma
---

## Icons

```tsx
import { Gemma } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Gemma size={64} />
    <Gemma.Color size={64} />
  </Flexbox>
);
```

## Simple

```tsx
import { Gemma } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Gemma.Simple size={64} />;
```

## Text

```tsx
import { Gemma } from '@lobehub/icons';

export default () => <Gemma.Text size={48} />;
```

## Combine

```tsx
import { Gemma } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Gemma.Combine size={64} />
    <Gemma.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Gemma } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Gemma.Avatar size={64} background={Gemma.colorPrimary} />
    <Gemma.Avatar size={64} />
    <Gemma.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Gemma } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Gemma.colorPrimary} />
    <ColorPreview color={Gemma.colorGradient} />
  </Flexbox>
);
```
