---
nav: Components
group: Provider
title: InternLM
atomId: InternLM
description: https://internlm.intern-ai.org.cn
---

## Icons

```tsx
import { InternLM } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <InternLM size={64} />
    <InternLM.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { InternLM } from '@lobehub/icons';

export default () => <InternLM.Text size={48} />;
```

## Combine

```tsx
import { InternLM } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <InternLM.Combine size={64} />
    <InternLM.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { InternLM } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <InternLM.Avatar size={64} />
    <InternLM.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { InternLM } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={InternLM.colorPrimary} />
  </Flexbox>
);
```
