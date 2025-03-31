---
nav: Components
group: Provider
title: Nebius
atomId: Nebius
description: https://nebius.com
---

## Icons

```tsx
import { Nebius } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Nebius size={64} />;
```

## Text

```tsx
import { Nebius } from '@lobehub/icons';

export default () => <Nebius.Text size={48} />;
```

## Avatars

```tsx
import { Nebius } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Nebius.Avatar size={64} />
    <Nebius.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Nebius } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Nebius.colorPrimary} />
  </Flexbox>
);
```
