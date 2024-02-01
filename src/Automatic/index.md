---
nav: Components
group: Icons
title: Automatic1111 (SD Webui)
atomId: Automatic
description: https://github.com/AUTOMATIC1111/stable-diffusion-webui
---

## Icons

**Not Official**: This icon has not been verified by the official source and comes from the online community.

<https://github.com/AUTOMATIC1111/stable-diffusion-webui/discussions/2901>

```tsx
import { Automatic } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Automatic size={64} />
    <Automatic.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Automatic } from '@lobehub/icons';

export default () => <Automatic.Text size={48} />;
```

## Combine

```tsx
import { Automatic } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Automatic.Combine size={64} />
    <Automatic.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Automatic } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Automatic.Avatar size={64} />
    <Automatic.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Automatic } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Automatic.colorPrimary} />
  </Flexbox>
);
```
