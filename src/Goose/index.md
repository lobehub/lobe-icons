---
nav: Components
group: Application
title: Goose (codename)
atomId: Goose
description: https://block.github.io/goose
---

## Icons

```tsx
import { Goose } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Goose size={64} />;
```

## Text

```tsx
import { Goose } from '@lobehub/icons';

export default () => <Goose.Text size={48} />;
```

## Combine

```tsx
import { Goose } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Goose.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Goose } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Goose.Avatar size={64} />
    <Goose.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Goose } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Goose.colorPrimary} />
  </Flexbox>
);
```
