---
nav: Components
group:
  title: Application
  order: 10
title: PixVerse
atomId: PixVerse
description: https://app.pixverse.ai
---

## Icons

```tsx
import { PixVerse } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <PixVerse size={64} />
    <PixVerse.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { PixVerse } from '@lobehub/icons';

export default () => <PixVerse.Text size={48} />;
```

## Combine

```tsx
import { PixVerse } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <PixVerse.Combine size={64} />
    <PixVerse.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { PixVerse } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <PixVerse.Avatar size={64} background={PixVerse.colorPrimary} />
    <PixVerse.Avatar size={64} />
    <PixVerse.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { PixVerse } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={PixVerse.colorPrimary} />
    <ColorPreview color={PixVerse.colorGradient} />
  </Flexbox>
);
```
