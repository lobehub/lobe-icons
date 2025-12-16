---
nav: Components
group: Model
title: Deep Cogito
atomId: Deep Cogito
description: https://www.deepcogito.com/
---

## Icons

```tsx
import { DeepCogito } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <DeepCogito size={64} />
    <DeepCogito.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { DeepCogito } from '@lobehub/icons';

export default () => <DeepCogito.Text size={48} />;
```

## Combine

```tsx
import { DeepCogito } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <DeepCogito.Combine size={64} />
    <DeepCogito.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { DeepCogito } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <DeepCogito.Avatar size={64} />
    <DeepCogito.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { DeepCogito } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={DeepCogito.colorPrimary} />
  </Flexbox>
);
```
