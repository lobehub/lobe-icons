---
nav: Components
group: Provider
title: AntGroup
atomId: AntGroup
description: https://antgroup.com
---

## Icons

```tsx
import { AntGroup } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <AntGroup size={64} />
    <AntGroup.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { AntGroup } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <AntGroup.Text size={48} />
    <AntGroup.TextCn size={48} />
  </Flexbox>
);
```

## Brands

```tsx
import { AntGroup } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <AntGroup.Brand size={64} />
    <AntGroup.BrandColor size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { AntGroup } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <AntGroup.Avatar size={64} />
    <AntGroup.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { AntGroup } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={AntGroup.colorPrimary} />
  </Flexbox>
);
```
