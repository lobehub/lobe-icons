---
nav: Components
group: Provider
title: Technology Innovation Institute (Falcon)
atomId: TII
description: https://www.tii.ae
---

## Icons

```tsx
import { TII } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <TII size={64} />
    <TII.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { TII } from '@lobehub/icons';

export default () => <TII.Text size={48} />;
```

## Combine

```tsx
import { TII } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <TII.Combine size={64} />
    <TII.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { TII } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <TII.Avatar size={64} />
    <TII.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { TII } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={TII.colorPrimary} />
  </Flexbox>
);
```
