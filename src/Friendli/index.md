---
nav: Components
group: Provider
title: Friendli
atomId: Friendli
description: https://friendli.ai
---

## Icons

```tsx
import { Friendli } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Friendli size={64} />;
```

## Text

```tsx
import { Friendli } from '@lobehub/icons';

export default () => <Friendli.Text size={48} />;
```

## Combine

```tsx
import { Friendli } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Friendli.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Friendli } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Friendli.Avatar size={64} />
    <Friendli.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Friendli } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Friendli.colorPrimary} />
  </Flexbox>
);
```
