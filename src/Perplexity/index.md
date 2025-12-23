---
nav: Components
group: Provider
title: Perplexity
atomId: Perplexity
description: https://perplexity.ai
---

## Icons

```tsx
import { Perplexity } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Perplexity size={64} />
    <Perplexity.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Perplexity } from '@lobehub/icons';

export default () => <Perplexity.Text size={48} />;
```

## Combine

```tsx
import { Perplexity } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Perplexity.Combine size={64} />
    <Perplexity.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Perplexity } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Perplexity.Avatar size={64} />
    <Perplexity.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Perplexity } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Perplexity.colorPrimary} />
  </Flexbox>
);
```
