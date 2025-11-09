---
nav: Components
group: Application
title: Krea
atomId: Krea
description: https://krea.ai
---

## Icons

```tsx
import { Krea } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Krea size={64} />;
```

## Text

```tsx
import { Krea } from '@lobehub/icons';

export default () => <Krea.Text size={48} />;
```

## Combine

```tsx
import { Krea } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Krea.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Krea } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Krea.Avatar size={64} />
    <Krea.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Krea } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Krea.colorPrimary} />
  </Flexbox>
);
```
