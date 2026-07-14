---
nav: Components
group: Provider
title: Brave
atomId: Brave
description: https://brave.com
---

## Icons

```tsx
import { Brave } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Brave size={64} />
    <Brave.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Brave } from '@lobehub/icons';

export default () => <Brave.Text size={48} />;
```

## Combine

```tsx
import { Brave } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Brave.Combine size={64} />
    <Brave.Combine type={'color'} size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Brave } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Brave.Avatar size={64} />
    <Brave.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Brave } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Brave.colorPrimary} />
  </Flexbox>
);
```
