---
nav: Components
group: Application
title: Viggle
atomId: Viggle
description: https://viggle.ai
---

## Icons

```tsx
import { Viggle } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Viggle size={64} />;
```

## Text

```tsx
import { Viggle } from '@lobehub/icons';

export default () => <Viggle.Text size={48} />;
```

## Combine

```tsx
import { Viggle } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Viggle.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Viggle } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Viggle.Avatar size={64} />
    <Viggle.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Viggle } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Viggle.colorPrimary} />
  </Flexbox>
);
```
