---
nav: Components
group: Application
title: Firecrawl
atomId: Firecrawl
description: https://firecrawl.dev
---

## Icons

```tsx
import { Firecrawl } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Firecrawl size={64} />
    <Firecrawl.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Firecrawl } from '@lobehub/icons';

export default () => <Firecrawl.Text size={48} />;
```

## Combine

```tsx
import { Firecrawl } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Firecrawl.Combine size={64} />
    <Firecrawl.Combine type={'color'} size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Firecrawl } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Firecrawl.Avatar size={64} />
    <Firecrawl.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Firecrawl } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Firecrawl.colorPrimary} />
  </Flexbox>
);
```
