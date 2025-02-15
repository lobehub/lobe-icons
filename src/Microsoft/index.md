---
nav: Components
group: Provider
title: Microsoft
atomId: Microsoft
description: https://microsoft.com
---

## Icons

```tsx
import { Microsoft } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Microsoft size={64} />
    <Microsoft.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Microsoft } from '@lobehub/icons';

export default () => <Microsoft.Text size={48} />;
```

## Combine

```tsx
import { Microsoft } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Microsoft.Combine size={64} />
    <Microsoft.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Microsoft } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Microsoft.Avatar size={64} />
    <Microsoft.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Microsoft } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Microsoft.colorPrimary} />
  </Flexbox>
);
```
