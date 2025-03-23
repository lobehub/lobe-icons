---
nav: Components
group: Provider
title: Exa
atomId: Exa
description: https://exa.ai
---

## Icons

```tsx
import { Exa } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Exa size={64} />
    <Exa.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Exa } from '@lobehub/icons';

export default () => <Exa.Text size={48} />;
```

## Combine

```tsx
import { Exa } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Exa.Combine size={64} />
    <Exa.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Exa } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Exa.Avatar size={64} />
    <Exa.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Exa } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Exa.colorPrimary} />
  </Flexbox>
);
```
