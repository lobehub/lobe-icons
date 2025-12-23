---
nav: Components
group: Provider
title: Bailian (阿里云百炼)
atomId: Bailian
description: https://bailian.console.aliyun.com
---

## Icons

```tsx
import { Bailian } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Bailian size={64} />
    <Bailian.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Bailian } from '@lobehub/icons';

export default () => <Bailian.Text size={48} />;
```

## Combine

```tsx
import { Bailian } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Bailian.Combine size={64} />
    <Bailian.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Bailian } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Bailian.Avatar size={64} />
    <Bailian.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Bailian } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Bailian.colorPrimary} />
  </Flexbox>
);
```
