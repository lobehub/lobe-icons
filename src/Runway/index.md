---
nav: Components
group: Application
title: Runway
atomId: Runway
description: https://runwayml.com
---

## Icons

```tsx
import { Runway } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Runway size={64} />;
```

## Text

```tsx
import { Runway } from '@lobehub/icons';

export default () => <Runway.Text size={48} />;
```

## Combine

```tsx
import { Runway } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Runway.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Runway } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Runway.Avatar size={64} />
    <Runway.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Runway } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Runway.colorPrimary} />
  </Flexbox>
);
```
