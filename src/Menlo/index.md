---
nav: Components
group: Provider
title: MENLO (Lucy/Jan-nano)
atomId: Menlo
description: https://www.menlo.ai
---

## Icons

```tsx
import { Menlo } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Menlo size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Menlo } from '@lobehub/icons';

export default () => <Menlo.Text size={48} />;
```

## Combine

```tsx
import { Menlo } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Menlo.Combine size={64} />
    <Menlo.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Menlo } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Menlo.Avatar size={64} />
    <Menlo.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Menlo } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Menlo.colorPrimary} />
  </Flexbox>
);
```
