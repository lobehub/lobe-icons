---
nav: Components
group: Application
title: Replit
atomId: Replit
description: https://replit.com
---

## Icons

```tsx
import { Replit } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Replit size={64} />
    <Replit.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Replit } from '@lobehub/icons';

export default () => <Replit.Text size={48} />;
```

## Combine

```tsx
import { Replit } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Replit.Combine size={64} />
    <Replit.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Replit } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Replit.Avatar size={64} />
    <Replit.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Replit } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Replit.colorPrimary} />
  </Flexbox>
);
```
