---
nav: Components
group: Icons
title: Microsoft (Bing)
atomId: Bing
description: https://bing.com
---

## Icons

```tsx
import { Bing } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Bing size={64} />
    <Bing.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Bing } from '@lobehub/icons';

export default () => <Bing.Text size={48} />;
```

## Combine

```tsx
import { Bing } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Bing.Combine size={64} />
    <Bing.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Bing } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Bing.Avatar size={64} background={Bing.colorGradient} />
    <Bing.Avatar size={64} />
    <Bing.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Bing } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Bing.colorPrimary} />
    <ColorPreview color={Bing.colorGradient} />
  </Flexbox>
);
```
