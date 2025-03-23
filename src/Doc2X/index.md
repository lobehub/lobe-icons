---
nav: Components
group: Application
title: Doc2X
atomId: Doc2X
description: https://doc2x.noedgeai.com
---

## Icons

```tsx
import { Doc2X } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Doc2X size={64} />
    <Doc2X.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Doc2X } from '@lobehub/icons';

export default () => <Doc2X.Text size={48} />;
```

## Combine

```tsx
import { Doc2X } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Doc2X.Combine size={64} />
    <Doc2X.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Doc2X } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Doc2X.Avatar size={64} />
    <Doc2X.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Doc2X } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Doc2X.colorPrimary} />
  </Flexbox>
);
```
