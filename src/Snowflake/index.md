---
nav: Components
group: Provider
title: Snowflake
atomId: Snowflake
description: https://snowflake.com
---

## Icons

```tsx
import { Snowflake } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Snowflake size={64} />
    <Snowflake.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Snowflake } from '@lobehub/icons';

export default () => <Snowflake.Text size={48} />;
```

## Combine

```tsx
import { Snowflake } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Snowflake.Combine size={64} />
    <Snowflake.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Snowflake } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Snowflake.Avatar size={64} />
    <Snowflake.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Snowflake } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Snowflake.colorPrimary} />
  </Flexbox>
);
```
