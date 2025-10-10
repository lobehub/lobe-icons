---
nav: Components
group: Application
title: CapCut
atomId: CapCut
description: https://capcut.com
---

## Icons

```tsx
import { CapCut } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <CapCut size={64} />;
```

## Text

```tsx
import { CapCut } from '@lobehub/icons';

export default () => <CapCut.Text size={48} />;
```

## Combine

```tsx
import { CapCut } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <CapCut.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { CapCut } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <CapCut.Avatar size={64} />
    <CapCut.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { CapCut } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={CapCut.colorPrimary} />
  </Flexbox>
);
```
