---
nav: Components
group: Application
title: DocSearch
atomId: DocSearch
description: https://docsearch.algolia.com
---

## Icons

```tsx
import { DocSearch } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <DocSearch size={64} />
    <DocSearch.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { DocSearch } from '@lobehub/icons';

export default () => <DocSearch.Text size={48} />;
```

## Combine

```tsx
import { DocSearch } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <DocSearch.Combine size={64} />
    <DocSearch.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { DocSearch } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <DocSearch.Avatar size={64} />
    <DocSearch.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { DocSearch } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={DocSearch.colorPrimary} />
  </Flexbox>
);
```
