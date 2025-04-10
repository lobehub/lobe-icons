---
nav: Components
group: Model
title: Inflection
atomId: Inflection
description: https://inflection.ai
---

## Icons

```tsx
import { Inflection } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Inflection size={64} />;
```

## Text

```tsx
import { Inflection } from '@lobehub/icons';

export default () => <Inflection.Text size={48} />;
```

## Combine

```tsx
import { Inflection } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Inflection.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Inflection } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Inflection.Avatar size={64} />
    <Inflection.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Inflection } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Inflection.colorPrimary} />
  </Flexbox>
);
```
