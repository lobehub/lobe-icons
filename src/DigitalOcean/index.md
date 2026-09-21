---
nav: Components
group: Provider
title: DigitalOcean
atomId: DigitalOcean
description: https://digitalocean.com
---

## Icons

```tsx
import { DigitalOcean } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <DigitalOcean size={64} />
    <DigitalOcean.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { DigitalOcean } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <DigitalOcean.Text size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { DigitalOcean } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <DigitalOcean.Combine size={64} />
    <DigitalOcean.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { DigitalOcean } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <DigitalOcean.Avatar size={64} />
    <DigitalOcean.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { DigitalOcean } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={DigitalOcean.colorPrimary} />
  </Flexbox>
);
```
