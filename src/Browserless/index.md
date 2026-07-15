---
nav: Components
group: Provider
title: Browserless
atomId: Browserless
description: https://browserless.js.org
---

## Icons

```tsx
import { Browserless } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <Browserless size={64} />;
```

## Text

```tsx
import { Browserless } from '@lobehub/icons';

export default () => <Browserless.Text size={48} />;
```

## Combine

```tsx
import { Browserless } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Browserless.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Browserless } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Browserless.Avatar size={64} />
    <Browserless.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Browserless } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Browserless.colorPrimary} />
  </Flexbox>
);
```
