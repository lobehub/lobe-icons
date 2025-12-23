---
nav: Components
group: Application
title: Haiper
atomId: Haiper
description: https://haiper.ai
---

## Icons

```tsx
import { Haiper } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <Haiper size={64} />;
```

## Text

```tsx
import { Haiper } from '@lobehub/icons';

export default () => <Haiper.Text size={48} />;
```

## Combine

```tsx
import { Haiper } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Haiper.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Haiper } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Haiper.Avatar size={64} />
    <Haiper.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Haiper } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Haiper.colorPrimary} />
  </Flexbox>
);
```
