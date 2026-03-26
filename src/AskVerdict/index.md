---
nav: Components
group: Model
title: AskVerdict
atomId: AskVerdict
description: https://askverdict.ai
---

## Icons

```tsx
import { AskVerdict } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <AskVerdict size={64} />
    <AskVerdict.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { AskVerdict } from '@lobehub/icons';

export default () => <AskVerdict.Text size={48} />;
```

## Combine

```tsx
import { AskVerdict } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={32} horizontal>
    <AskVerdict.Combine size={64} />
    <AskVerdict.Combine size={64} type="color" />
  </Flexbox>
);
```

## Avatars

```tsx
import { AskVerdict } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <AskVerdict.Avatar size={64} />
    <AskVerdict.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { AskVerdict } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={AskVerdict.colorPrimary} />
  </Flexbox>
);
```
