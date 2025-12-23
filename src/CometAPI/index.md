---
nav: Components
group: Provider
title: Comet API
atomId: CometAPI
description: https://cometapi.com/
---

## Icons

```tsx
import { CometAPI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <CometAPI size={64} />
    <CometAPI.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { CometAPI } from '@lobehub/icons';

export default () => <CometAPI.Text size={64} />;
```

## Combine

```tsx
import { CometAPI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <CometAPI.Combine size={64} />
    <CometAPI.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { CometAPI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <CometAPI.Avatar size={64} />
    <CometAPI.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { CometAPI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={CometAPI.colorPrimary} />
  </Flexbox>
);
```
