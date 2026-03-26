---
nav: Components
group: Provider
title: Xpay
atomId: Xpay
description: https://xpay.sh
---

## Icons

```tsx
import { Xpay } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Xpay size={64} />
    <Xpay.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Xpay } from '@lobehub/icons';

export default () => <Xpay.Text size={48} />;
```

## Combine

```tsx
import { Xpay } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Xpay.Combine size={64} />
    <Xpay.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Xpay } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Xpay.Avatar size={64} />
    <Xpay.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Xpay } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Xpay.colorPrimary} />
  </Flexbox>
);
```
