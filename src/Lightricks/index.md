---
nav: Components
group: Application
title: Lightricks
atomId: Lightricks
description: https://lightricks.com
---

## Icons

```tsx
import { Lightricks } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Lightricks size={64} />;
```

## Text

```tsx
import { Lightricks } from '@lobehub/icons';

export default () => <Lightricks.Text size={48} />;
```

## Combine

```tsx
import { Lightricks } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Lightricks.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Lightricks } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Lightricks.Avatar size={64} />
    <Lightricks.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Lightricks } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Lightricks.colorPrimary} />
  </Flexbox>
);
```
