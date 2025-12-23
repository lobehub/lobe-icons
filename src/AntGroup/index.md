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
import { Flexbox } from '@lobehub/ui';

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
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <AntGroup.Text size={48} />
    <AntGroup.TextCn size={48} />
  </Flexbox>
);
```

## Brands

```tsx
import { AntGroup } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <AntGroup.Brand size={64} />
    <AntGroup.BrandColor size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { AntGroup } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

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
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={AntGroup.colorPrimary} />
  </Flexbox>
);
```
