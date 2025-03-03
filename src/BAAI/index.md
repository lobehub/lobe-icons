---
nav: Components
group: Model
title: BAAI (智源研究院)
atomId: BAAI
description: https://baai.ac.cn
---

## Icons

```tsx
import { BAAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <BAAI size={64} />;
```

## Text

```tsx
import { BAAI } from '@lobehub/icons';

export default () => <BAAI.Text size={48} />;
```

## Combine

```tsx
import { BAAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <BAAI.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { BAAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <BAAI.Avatar size={64} />
    <BAAI.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { BAAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={BAAI.colorPrimary} />
  </Flexbox>
);
```
