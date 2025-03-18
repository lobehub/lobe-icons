---
nav: Components
group: Provider
title: Lambda
atomId: Lambda
description: https://lambdalabs.com
---

## Icons

```tsx
import { Lambda } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Lambda size={64} />;
```

## Text

```tsx
import { Lambda } from '@lobehub/icons';

export default () => <Lambda.Text size={48} />;
```

## Combine

```tsx
import { Lambda } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Lambda.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Lambda } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Lambda.Avatar size={64} />
    <Lambda.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Lambda } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Lambda.colorPrimary} />
  </Flexbox>
);
```
