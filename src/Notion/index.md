---
nav: Components
group: Application
title: Notion
atomId: Notion
description: https://notion.com
---

## Icons

```tsx
import { Notion } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <Notion size={64} />;
```

## Text

```tsx
import { Notion } from '@lobehub/icons';

export default () => <Notion.Text size={48} />;
```

## Combine

```tsx
import { Notion } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Notion.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Notion } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Notion.Avatar size={64} />
    <Notion.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Notion } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Notion.colorPrimary} />
  </Flexbox>
);
```
