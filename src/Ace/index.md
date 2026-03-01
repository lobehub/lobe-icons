---
nav: Components
group: Model
title: ACE
atomId: Ace
description: https://github.com/ace-step/ACE-Step
---

## Icons

```tsx
import { Ace } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <Ace size={64} />;
```

## Text

```tsx
import { Ace } from '@lobehub/icons';

export default () => <Ace.Text size={48} />;
```

## Combine

```tsx
import { Ace } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Ace.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Ace } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Ace.Avatar size={64} />
    <Ace.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Ace } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Ace.colorPrimary} />
  </Flexbox>
);
```
