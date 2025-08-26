---
nav: Components
group: Application
title: TuriX
atomId: TuriX
description: https://turix.ai
---

## Icons

```tsx
import { TuriX } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <TuriX size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { TuriX } from '@lobehub/icons';

export default () => <TuriX.Text size={48} />;
```

## Combine

```tsx
import { TuriX } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <TuriX.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { TuriX } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <TuriX.Avatar size={64} background={TuriX.colorPrimary} />
    <TuriX.Avatar size={64} />
    <TuriX.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { TuriX } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={TuriX.colorPrimary} />
    <ColorPreview color={TuriX.colorGradient} />
  </Flexbox>
);
```
