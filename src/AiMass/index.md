---
nav: Components
group: Provider
title: AiMass (紫东太初)
atomId: AiMass
description: https://ai-maas.wair.ac.cn
---

## Icons

```tsx
import { AiMass } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <AiMass size={64} />
    <AiMass.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { AiMass } from '@lobehub/icons';

export default () => <AiMass.Text size={48} />;
```

## Combine

```tsx
import { AiMass } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <AiMass.Combine size={64} />
    <AiMass.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { AiMass } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <AiMass.Avatar size={64} />
    <AiMass.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { AiMass } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={AiMass.colorPrimary} />
  </Flexbox>
);
```
