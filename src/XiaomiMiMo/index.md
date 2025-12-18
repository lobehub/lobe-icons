---
nav: Components
group: Model
title: Xiaomi MiMo
atomId: XiaomiMiMo
description: https://platform.xiaomimimo.com
---

## Icons

```tsx
import { XiaomiMiMo } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <XiaomiMiMo size={64} />;
```

## Text

```tsx
import { XiaomiMiMo } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <XiaomiMiMo.Text size={32} />
    <XiaomiMiMo.Text size={32} style={{ color: '#1F2329' }} />
  </Flexbox>
);
```

## Avatars

```tsx
import { XiaomiMiMo } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <XiaomiMiMo.Avatar size={64} />
    <XiaomiMiMo.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { XiaomiMiMo } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={XiaomiMiMo.colorPrimary} />
  </Flexbox>
);
```
