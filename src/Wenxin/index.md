---
nav: Components
group: Icons
title: 文新
atomId: Wenxin
---

## Icons

```tsx
import { Wenxin } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Wenxin size={64} />
    <Wenxin.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Wenxin } from '@lobehub/icons';

export default () => <Wenxin.Text size={48} />;
```

## Combine

```tsx
import { Wenxin } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Wenxin.Combine size={64} />
    <Wenxin.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Wenxin } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Wenxin.Avatar size={64} />
    <Wenxin.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
/**
 * inline: true
 */
import { Wenxin } from '@lobehub/icons';

import ColorPreview from '../components/ColorPreview';

export default () => <ColorPreview color={Wenxin.colorPrimary} />;
```
