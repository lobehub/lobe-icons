---
nav: Components
group: Provider
title: SophNet
atomId: SophNet
description: https://sophnet.com
---

## Icons

```tsx
import { SophNet } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <SophNet size={64} />
    <SophNet.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { SophNet } from '@lobehub/icons';

export default () => <SophNet.Text size={64} />;
```

## Combine

```tsx
import { SophNet } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <SophNet.Combine size={64} />
    <SophNet.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { SophNet } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <SophNet.Avatar size={64} />
    <SophNet.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { SophNet } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={SophNet.colorPrimary} />
  </Flexbox>
);
```
