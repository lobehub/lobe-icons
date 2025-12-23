---
nav: Components
group: Model
title: CogView
atomId: CogView
description: https://github.com/THUDM/CogView3
---

## Icons

```tsx
import { CogView } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <CogView size={64} />
    <CogView.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { CogView } from '@lobehub/icons';

export default () => <CogView.Text size={48} />;
```

## Combine

```tsx
import { CogView } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <CogView.Combine size={64} />
    <CogView.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { CogView } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <CogView.Avatar size={64} />
    <CogView.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { CogView } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={CogView.colorPrimary} />
  </Flexbox>
);
```
