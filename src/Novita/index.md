---
nav: Components
group: Provider
title: Novita
atomId: Novita
description: https://novita.ai/
---

## Icons

```tsx
import { Novita } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Novita size={64} />
    <Novita.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Novita } from '@lobehub/icons';

export default () => <Novita.Text size={48} />;
```

## Combine

```tsx
import { Novita } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Novita.Combine size={64} />
    <Novita.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Novita } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Novita.Avatar size={64} background={Novita.colorPrimary} />
    <Novita.Avatar size={64} />
    <Novita.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Novita } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Novita.colorPrimary} />
  </Flexbox>
);
```
