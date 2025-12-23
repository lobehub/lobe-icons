---
nav: Components
group: Model
title: CodeGeeX
atomId: CodeGeeX
description: https://codegeex.cn/
---

## Icons

```tsx
import { CodeGeeX } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <CodeGeeX size={64} />
    <CodeGeeX.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { CodeGeeX } from '@lobehub/icons';

export default () => <CodeGeeX.Text size={48} />;
```

## Combine

```tsx
import { CodeGeeX } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <CodeGeeX.Combine size={64} />
    <CodeGeeX.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { CodeGeeX } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <CodeGeeX.Avatar size={64} background={CodeGeeX.colorGradient} />
    <CodeGeeX.Avatar size={64} />
    <CodeGeeX.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { CodeGeeX } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={CodeGeeX.colorPrimary} />
    <ColorPreview color={CodeGeeX.colorGradient} />
  </Flexbox>
);
```
