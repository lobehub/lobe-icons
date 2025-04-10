---
nav: Components
group: Provider
title: Parasail
atomId: Parasail
description: https://parasail.io/
---

## Icons

```tsx
import { Parasail } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Parasail size={64} />;
```

## Text

```tsx
import { Parasail } from '@lobehub/icons';

export default () => <Parasail.Text size={48} />;
```

## Combine

```tsx
import { Parasail } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Parasail.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Parasail } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Parasail.Avatar size={64} />
    <Parasail.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Parasail } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Parasail.colorPrimary} />
  </Flexbox>
);
```
