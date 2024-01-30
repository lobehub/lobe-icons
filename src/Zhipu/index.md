---
nav: Components
group: Icons
---

## Icons

```tsx
import { Zhipu } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Zhipu size={64} />
    <Zhipu.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Zhipu } from '@lobehub/icons';

export default () => <Zhipu.Text size={64} />;
```

## Combine

```tsx
import { Zhipu } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Zhipu.Combine size={64} type={'mono'} />
    <Zhipu.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Zhipu } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Zhipu.Avatar size={64} />
    <Zhipu.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
/**
 * inline: true
 */
import { Zhipu } from '@lobehub/icons';

import ColorPreview from '../components/ColorPreview';

export default () => <ColorPreview color={Zhipu.colorPrimary} />;
```
