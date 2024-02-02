---
nav: Components
group: Icons
title: Pollinations
atomId: Pollinations
description: https://pollinations.ai`
---

## Icons

```tsx
import { Pollinations } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Pollinations size={64} />;
```

## Text

```tsx
import { Pollinations } from '@lobehub/icons';

export default () => <Pollinations.Text size={48} />;
```

## Combine

```tsx
import { Pollinations } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Pollinations.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Pollinations } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Pollinations.Avatar size={64} />
    <Pollinations.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Pollinations } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Pollinations.colorPrimary} />
  </Flexbox>
);
```
