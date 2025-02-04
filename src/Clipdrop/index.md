---
nav: Components
group: Application
title: Clipdrop
atomId: Clipdrop
description: https://clipdrop.co
---

## Icons

```tsx
import { Clipdrop } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Clipdrop size={64} />;
```

## Text

```tsx
import { Clipdrop } from '@lobehub/icons';

export default () => <Clipdrop.Text size={48} />;
```

## Combine

```tsx
import { Clipdrop } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Clipdrop.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Clipdrop } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Clipdrop.Avatar size={64} />
    <Clipdrop.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Clipdrop } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Clipdrop.colorPrimary} />
  </Flexbox>
);
```
