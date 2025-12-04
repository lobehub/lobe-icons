---
nav: Components
group: Provider
title: Apple
atomId: Apple
description: https://apple.com
---

## Icons

```tsx
import { Apple } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Apple size={64} />;
```

## Text

```tsx
import { Apple } from '@lobehub/icons';

export default () => <Apple.Text size={48} />;
```

## Combine

```tsx
import { Apple } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Apple.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Apple } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Apple.Avatar size={64} />
    <Apple.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Apple } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Apple.colorPrimary} />
  </Flexbox>
);
```
