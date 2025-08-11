---
nav: Components
group: Provider
title: Bfl
atomId: Bfl
description: https://blackforestlabs.ai
---

## Icons

```tsx
import { Bfl } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Bfl size={64} />;
```

## Text

```tsx
import { Bfl } from '@lobehub/icons';

export default () => <Bfl.Text size={48} />;
```

## Combine

```tsx
import { Bfl } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Bfl.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Bfl } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Bfl.Avatar size={64} />
    <Bfl.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Bfl } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Bfl.colorPrimary} />
  </Flexbox>
);
```
