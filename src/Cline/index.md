---
nav: Components
group: Application
title: Cline
atomId: Cline
description: https://cline.bot
---

## Icons

```tsx
import { Cline } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Cline size={64} />;
```

## Text

```tsx
import { Cline } from '@lobehub/icons';

export default () => <Cline.Text size={48} />;
```

## Combine

```tsx
import { Cline } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Cline.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Cline } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Cline.Avatar size={64} />
    <Cline.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Cline } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Cline.colorPrimary} />
  </Flexbox>
);
```
