---
nav: Components
group: Model
title: CommandA (Cohere)
atomId: CommandA
description: https://cohere.com/blog/command
---

## Icons

```tsx
import { CommandA } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <CommandA size={64} />
    <CommandA.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { CommandA } from '@lobehub/icons';

export default () => <CommandA.Text size={48} />;
```

## Combine

```tsx
import { CommandA } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <CommandA.Combine size={64} />
    <CommandA.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { CommandA } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <CommandA.Avatar size={64} />
    <CommandA.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { CommandA } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={CommandA.colorPrimary} />
  </Flexbox>
);
```
