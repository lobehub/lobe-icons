---
nav: Components
group: Provider
title: BurnCloud
atomId: BurnCloud
description: https://ai.burncloud.com
---

## Icons

```tsx
import { BurnCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <BurnCloud size={64} />
    <BurnCloud.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { BurnCloud } from '@lobehub/icons';

export default () => <BurnCloud.Text size={48} />;
```

## Combine

```tsx
import { BurnCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <BurnCloud.Combine size={64} />
    <BurnCloud.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { BurnCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <BurnCloud.Avatar size={64} />
    <BurnCloud.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { BurnCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={BurnCloud.colorPrimary} />
  </Flexbox>
);
```
