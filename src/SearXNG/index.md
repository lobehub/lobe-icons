---
nav: Components
group: Provider
title: SearXNG
atomId: SearXNG
description: https://searxng.org
---

## Icons

```tsx
import { SearXNG } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <SearXNG size={64} />
    <SearXNG.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { SearXNG } from '@lobehub/icons';

export default () => <SearXNG.Text size={48} />;
```

## Combine

```tsx
import { SearXNG } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <SearXNG.Combine size={64} />
    <SearXNG.Combine type={'color'} size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { SearXNG } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <SearXNG.Avatar size={64} />
    <SearXNG.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { SearXNG } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={SearXNG.colorPrimary} />
  </Flexbox>
);
```
