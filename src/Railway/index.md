---
nav: Components
group: Application
title: Railway
atomId: Railway
description: https://railway.com
---

## Icons

```tsx
import { Railway } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Railway size={64} />;
```

## Text

```tsx
import { Railway } from '@lobehub/icons';

export default () => <Railway.Text size={48} />;
```

## Combine

```tsx
import { Railway } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Railway.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Railway } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Railway.Avatar size={64} background={Railway.colorPrimary} />
    <Railway.Avatar size={64} />
    <Railway.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Railway } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Railway.colorPrimary} />
    <ColorPreview color={Railway.colorGradient} />
  </Flexbox>
);
```
