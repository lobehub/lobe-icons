---
nav: Components
group: Application
title: Hedra
atomId: Hedra
description: https://hedra.com
---

## Icons

```tsx
import { Hedra } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Hedra size={64} />;
```

## Text

```tsx
import { Hedra } from '@lobehub/icons';

export default () => <Hedra.Text size={48} />;
```

## Combine

```tsx
import { Hedra } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Hedra.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Hedra } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Hedra.Avatar size={64} />
    <Hedra.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Hedra } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Hedra.colorPrimary} />
  </Flexbox>
);
```
