---
nav: Components
group: Provider
title: Bocha (博查)
atomId: Bocha
description: https://open.bochaai.com
---

## Icons

```tsx
import { Bocha } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Bocha size={64} />
    <Bocha.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Bocha } from '@lobehub/icons';

export default () => <Bocha.Text size={48} />;
```

## Combine

```tsx
import { Bocha } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Bocha.Combine size={64} />
    <Bocha.Combine type={'color'} size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Bocha } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Bocha.Avatar size={64} />
    <Bocha.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Bocha } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Bocha.colorPrimary} />
  </Flexbox>
);
```
