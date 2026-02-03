---
nav: Components
group: Application
title: OpenClaw (MoltBot/ClawdBot)
atomId: OpenClaw
description: https://openclaw.dev
---

## Icons

```tsx
import { OpenClaw } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <OpenClaw size={64} />
    <OpenClaw.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { OpenClaw } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <OpenClaw.Text size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { OpenClaw } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <OpenClaw.Combine size={64} />
    <OpenClaw.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { OpenClaw } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <OpenClaw.Avatar size={64} />
    <OpenClaw.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { OpenClaw } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={OpenClaw.colorPrimary} />
  </Flexbox>
);
```
