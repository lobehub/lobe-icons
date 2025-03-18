---
nav: Components
group: Provider
title: Yandex
atomId: Yandex
description: https://ai.yandex.com
---

## Icons

```tsx
import { Yandex } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Yandex size={64} />;
```

## Text

```tsx
import { Yandex } from '@lobehub/icons';

export default () => <Yandex.Text size={48} />;
```

## Combine

```tsx
import { Yandex } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Yandex.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Yandex } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Yandex.Avatar size={64} />
    <Yandex.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Yandex } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Yandex.colorPrimary} />
  </Flexbox>
);
```
