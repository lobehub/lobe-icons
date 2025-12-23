---
nav: Components
group: Provider
title: Cohere
atomId: Cohere
description: https://cohere.com
---

## Icons

```tsx
import { Cohere } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Cohere size={64} />
    <Cohere.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Cohere } from '@lobehub/icons';

export default () => <Cohere.Text size={48} />;
```

## Combine

```tsx
import { Cohere } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Cohere.Combine size={64} />
    <Cohere.Combine size={64} type={'color'} />
    <Cohere.Combine size={64} type={'color'} color={Cohere.colorPrimary} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Cohere } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Cohere.Avatar size={64} />
    <Cohere.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Cohere } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Cohere.colorPrimary} />
  </Flexbox>
);
```
