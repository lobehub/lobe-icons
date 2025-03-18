---
nav: Components
group: Application
title: Monica
atomId: Monica
description: https://monica.im
---

## Icons

```tsx
import { Monica } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Monica size={64} />
    <Monica.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Monica } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Monica.Text size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { Monica } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Monica.Combine size={64} />
    <Monica.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Monica } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Monica.Avatar size={64} background={Monica.colorPrimary} />
    <Monica.Avatar size={64} />
    <Monica.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Monica } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Monica.colorPrimary} />
    <ColorPreview color={Monica.colorGradient} />
  </Flexbox>
);
```
