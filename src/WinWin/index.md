---
nav: Components
group: Provider
title: WinWin
atomId: WinWin
description: https://brandct.com
---

## Icons

```tsx
import { WinWin } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <WinWin size={64} />
    <WinWin.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { WinWin } from '@lobehub/icons';

export default () => <WinWin.Text size={48} />;
```

## Combine

```tsx
import { WinWin } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <WinWin.Combine size={64} />
    <WinWin.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { WinWin } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <WinWin.Avatar size={64} />
    <WinWin.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { WinWin } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={WinWin.colorPrimary} />
  </Flexbox>
);
```
