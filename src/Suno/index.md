---
nav: Components
group: Application
title: Suno
atomId: Suno
description: https://app.suno.ai
---

## Icons

```tsx
import { Suno } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Suno size={64} />;
```

## Text

```tsx
import { Suno } from '@lobehub/icons';

export default () => <Suno.Text size={48} />;
```

## Combine

```tsx
import { Suno } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Suno.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Suno } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Suno.Avatar size={64} />
    <Suno.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Suno } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Suno.colorPrimary} />
  </Flexbox>
);
```
