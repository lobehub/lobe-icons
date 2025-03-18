---
nav: Components
group: Application
title: Phidata
atomId: Phidata
description: https://phidata.com
---

## Icons

```tsx
import { Phidata } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Phidata size={64} />
    <Phidata.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Phidata } from '@lobehub/icons';

export default () => <Phidata.Text size={48} />;
```

## Combine

```tsx
import { Phidata } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Phidata.Combine size={64} />
    <Phidata.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Phidata } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Phidata.Avatar size={64} />
    <Phidata.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Phidata } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Phidata.colorPrimary} />
  </Flexbox>
);
```
