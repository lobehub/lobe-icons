---
nav: Components
group: Model
title: Relace
atomId: Relace
description: https://relace.ai
---

## Icons

```tsx
import { Relace } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Relace size={64} />;
```

## Text

```tsx
import { Relace } from '@lobehub/icons';

export default () => <Relace.Text size={48} />;
```

## Combine

```tsx
import { Relace } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Relace.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Relace } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Relace.Avatar size={64} />
    <Relace.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Relace } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Relace.colorPrimary} />
  </Flexbox>
);
```
