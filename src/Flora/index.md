---
nav: Components
group: Application
title: Flora
atomId: Flora
description: https://florafauna.ai
---

## Icons

```tsx
import { Flora } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Flora size={64} />;
```

## Text

```tsx
import { Flora } from '@lobehub/icons';

export default () => <Flora.Text size={48} />;
```

## Combine

```tsx
import { Flora } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Flora.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Flora } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Flora.Avatar size={64} />
    <Flora.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Flora } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Flora.colorPrimary} />
  </Flexbox>
);
```
