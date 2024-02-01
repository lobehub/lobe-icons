---
nav: Components
group: Icons
title: Cloudflare
atomId: Cloudflare
description: https://cloudflare.com
---

## Icons

```tsx
import { Cloudflare } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Cloudflare size={64} />
    <Cloudflare.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Cloudflare } from '@lobehub/icons';

export default () => <Cloudflare.Text size={48} />;
```

## Combine

```tsx
import { Cloudflare } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Cloudflare.Combine size={64} />
    <Cloudflare.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Cloudflare } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Cloudflare.Avatar size={64} />
    <Cloudflare.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Cloudflare } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Cloudflare.colorPrimary} />
  </Flexbox>
);
```
