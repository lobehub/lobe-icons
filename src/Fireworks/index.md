---
nav: Components
group: Icons
title: Fireworks
atomId: Fireworks
description: https://fireworks.ai
---

## Icons

```tsx
import { Fireworks } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Fireworks size={64} />;
```

## Text

```tsx
import { Fireworks } from '@lobehub/icons';

export default () => <Fireworks.Text size={48} />;
```

## Combine

```tsx
import { Fireworks } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Fireworks.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Fireworks } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Fireworks.Avatar size={64} background={Fireworks.colorPrimary} />
    <Fireworks.Avatar size={64} />
    <Fireworks.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
/**
 * inline: true
 */
import { Fireworks } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Fireworks.colorPrimary} />
    <ColorPreview color={Fireworks.colorGradient} />
  </Flexbox>
);
```
