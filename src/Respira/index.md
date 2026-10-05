---
nav: Components
group:
  title: Provider
  order: 2
title: Respira
atomId: Respira
description: Respira lets AI agents like Claude and ChatGPT edit live WordPress sites across 16 page builders. https://respira.press
---

## Icons

```tsx
import { Respira } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={8} horizontal>
    <Respira size={64} />
    <Respira.Color size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Respira } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={8} horizontal>
    <Respira.Avatar size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Respira } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={8}>
    <Respira.Text size={48} />
    <Respira.TextColor size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { Respira } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={8}>
    <Respira.Combine size={48} />
    <Respira.Combine size={48} type={'color'} />
  </Flexbox>
);
```
