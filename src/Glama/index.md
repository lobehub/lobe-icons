---
nav: Components
group: Application
title: Glama
atomId: Glama
description: https://glama.ai
---

## Icons

```tsx
import { Glama } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Glama size={64} />;
```

## Text

```tsx
import { Glama } from '@lobehub/icons';

export default () => <Glama.Text size={48} />;
```

## Combine

```tsx
import { Glama } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Glama.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Glama } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Glama.Avatar size={64} />
    <Glama.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Glama } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Glama.colorPrimary} />
  </Flexbox>
);
```
