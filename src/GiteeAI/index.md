---
nav: Components
group: Provider
title: GiteeAI
atomId: GiteeAI
description: https://ai-assets.gitee.com/
---

## Icons

```tsx
import { GiteeAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <GiteeAI size={64} />;
```

## Text

```tsx
import { GiteeAI } from '@lobehub/icons';

export default () => <GiteeAI.Text size={48} />;
```

## Combine

```tsx
import { GiteeAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <GiteeAI.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { GiteeAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <GiteeAI.Avatar size={64} />
    <GiteeAI.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { GiteeAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={GiteeAI.colorPrimary} />
  </Flexbox>
);
```
