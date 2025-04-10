---
nav: Components
group: Provider
title: Featherless.ai
atomId: Featherless
description: https://featherless.ai
---

## Icons

```tsx
import { Featherless } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Featherless size={64} />
    <Featherless.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Featherless } from '@lobehub/icons';

export default () => <Featherless.Text size={48} />;
```

## Combine

```tsx
import { Featherless } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Featherless.Combine size={64} />
    <Featherless.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Featherless } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Featherless.Avatar size={64} />
    <Featherless.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Featherless } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Featherless.colorPrimary} />
  </Flexbox>
);
```
