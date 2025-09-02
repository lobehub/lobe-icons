---
nav: Components
group: Provider
title: NewApi
atomId: NewApi
description: https://api.newapi.com
---

## Icons

```tsx
import { NewApi } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <NewApi size={64} />
    <NewApi.Text size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { NewApi } from '@lobehub/icons';

export default () => <NewApi.Text size={48} />;
```

## Combine

```tsx
import { NewApi } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <NewApi.Text size={64} />
    <NewApi size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { NewApi } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <NewApi.Avatar avatar />
    <NewApi.Avatar />
    <NewApi.Avatar shape="square" />
  </Flexbox>
);
```