---
nav: Components
group: Application
title: NotebookLM
atomId: NotebookLM
description: https://notebooklm.google
---

## Icons

```tsx
import { NotebookLM } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <NotebookLM size={64} />;
```

## Text

```tsx
import { NotebookLM } from '@lobehub/icons';

export default () => <NotebookLM.Text size={48} />;
```

## Combine

```tsx
import { NotebookLM } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <NotebookLM.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { NotebookLM } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <NotebookLM.Avatar size={64} />
    <NotebookLM.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { NotebookLM } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={NotebookLM.colorPrimary} />
  </Flexbox>
);
```
