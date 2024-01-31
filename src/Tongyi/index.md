---
nav: Components
group: Icons
title: 通义
atomId: Tongyi
---

## Icons

```tsx
import { Tongyi } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Tongyi size={64} />
    <Tongyi.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Tongyi } from '@lobehub/icons';

export default () => <Tongyi.Text size={48} />;
```

## Combine

```tsx
import { Tongyi } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Tongyi.Combine size={64} />
    <Tongyi.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Tongyi } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Tongyi.Avatar size={64} />
    <Tongyi.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
/**
 * inline: true
 */
import { Tongyi } from '@lobehub/icons';

import ColorPreview from '../components/ColorPreview';

export default () => <ColorPreview color={Tongyi.colorPrimary} />;
```
