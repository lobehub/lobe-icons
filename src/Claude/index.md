---
nav: Components
group: Icons
title: Anthropic (Claude)
atomId: Claude
description: https://claude.ai
---

## Icons

```tsx
import { Claude } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Claude size={64} />
    <Claude.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Claude } from '@lobehub/icons';

export default () => <Claude.Text size={48} />;
```

## Combine

```tsx
import { Claude } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Claude.Combine size={64} />
    <Claude.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Claude } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Claude.Avatar size={64} />
    <Claude.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Claude } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Claude.colorPrimary} />
  </Flexbox>
);
```
