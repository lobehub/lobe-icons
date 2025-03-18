---
nav: Components
group: Application
title: OpenWebUI
atomId: OpenWebUI
description: https://openwebui.com
---

## Icons

```tsx
import { OpenWebUI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <OpenWebUI size={64} />;
```

## Text

```tsx
import { OpenWebUI } from '@lobehub/icons';

export default () => <OpenWebUI.Text size={48} />;
```

## Combine

```tsx
import { OpenWebUI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <OpenWebUI.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { OpenWebUI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <OpenWebUI.Avatar size={64} />
    <OpenWebUI.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { OpenWebUI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={OpenWebUI.colorPrimary} />
  </Flexbox>
);
```
