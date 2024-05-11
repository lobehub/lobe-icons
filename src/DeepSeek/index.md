---
nav: Components
group: Model
title: DeepSeek
atomId: DeepSeek
description: https://www.deepseek.com
---

## Icons

```tsx
import { DeepSeek } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <DeepSeek size={64} />
    <DeepSeek.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { DeepSeek } from '@lobehub/icons';

export default () => <DeepSeek.Text size={48} />;
```

## Combine

```tsx
import { DeepSeek } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <DeepSeek.Combine size={64} />
    <DeepSeek.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { DeepSeek } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <DeepSeek.Avatar size={64} />
    <DeepSeek.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { DeepSeek } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={DeepSeek.colorPrimary} />
  </Flexbox>
);
```
