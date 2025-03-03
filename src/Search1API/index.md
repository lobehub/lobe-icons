---
nav: Components
group: Provider
title: Search1API
atomId: Search1API
description: https://search1api.com
---

## Icons

```tsx
import { Search1API } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Search1API size={64} />
    <Search1API.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Search1API } from '@lobehub/icons';

export default () => <Search1API.Text size={48} />;
```

## Combine

```tsx
import { Search1API } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Search1API.Combine size={64} />
    <Search1API.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Search1API } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Search1API.Avatar size={64} />
    <Search1API.Avatar shape="square" size={64} />
  </Flexbox>
);
```

## Colors

```tsx
import { Search1API } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16}>
    <ColorPreview color={Search1API.colorPrimary} />
  </Flexbox>
);
```
