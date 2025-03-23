---
nav: Components
group: Provider
title: SearchApi
atomId: SearchApi
description: https://searchapi.io
---

## Icons

```tsx
import { SearchApi } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <SearchApi size={64} />;
```

## Text

```tsx
import { SearchApi } from '@lobehub/icons';

export default () => <SearchApi.Text size={48} />;
```

## Combine

```tsx
import { SearchApi } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <SearchApi.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { SearchApi } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <SearchApi.Avatar size={64} />
    <SearchApi.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { SearchApi } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={SearchApi.colorPrimary} />
  </Flexbox>
);
```
