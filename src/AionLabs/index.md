---
nav: Components
group: Model
title: AionLabs
atomId: AionLabs
description: https://aionlabs.ai
---

## Icons

```tsx
import { AionLabs } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <AionLabs size={64} />
    <AionLabs.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { AionLabs } from '@lobehub/icons';

export default () => <AionLabs.Text size={48} />;
```

## Combine

```tsx
import { AionLabs } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <AionLabs.Combine size={64} />
    <AionLabs.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { AionLabs } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <AionLabs.Avatar size={64} />
    <AionLabs.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { AionLabs } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={AionLabs.colorPrimary} />
  </Flexbox>
);
```
