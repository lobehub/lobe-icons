---
nav: Components
group: Application
title: AirJelly
atomId: AirJelly
description: https://airjelly.ai
---

## Icons

```tsx
import { AirJelly } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <AirJelly size={64} />
    <AirJelly.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { AirJelly } from '@lobehub/icons';

export default () => <AirJelly.Text size={48} />;
```

## Combine

```tsx
import { AirJelly } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <AirJelly.Combine size={64} />
    <AirJelly.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { AirJelly } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <AirJelly.Avatar size={64} />
    <AirJelly.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { AirJelly } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={AirJelly.colorPrimary} />
  </Flexbox>
);
```
