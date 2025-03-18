---
nav: Components
group: Application
title: Flowith
atomId: Flowith
description: https://flowith.io
---

## Icons

```tsx
import { Flowith } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Flowith size={64} />;
```

## Text

```tsx
import { Flowith } from '@lobehub/icons';

export default () => <Flowith.Text size={48} />;
```

## Combine

```tsx
import { Flowith } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Flowith.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Flowith } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Flowith.Avatar size={64} />
    <Flowith.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Flowith } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Flowith.colorPrimary} />
  </Flexbox>
);
```
