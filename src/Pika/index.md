---
nav: Components
group: Application
title: Pika
atomId: Pika
description: https://pika.art
---

## Icons

```tsx
import { Pika } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Pika size={64} />;
```

## Text

```tsx
import { Pika } from '@lobehub/icons';

export default () => <Pika.Text size={48} />;
```

## Combine

```tsx
import { Pika } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Pika.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Pika } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Pika.Avatar size={64} />
    <Pika.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Pika } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Pika.colorPrimary} />
  </Flexbox>
);
```
