---
nav: Components
group: Provider
title: PersonaStack
atomId: PersonaStack
description: https://personastack.ai
---

## Icons

```tsx
import { PersonaStack } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <PersonaStack size={64} />
    <PersonaStack.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { PersonaStack } from '@lobehub/icons';

export default () => <PersonaStack.Text size={48} />;
```

## Combine

```tsx
import { PersonaStack } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <PersonaStack.Combine size={64} />
    <PersonaStack.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { PersonaStack } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <PersonaStack.Avatar size={64} />
    <PersonaStack.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { PersonaStack } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={PersonaStack.colorPrimary} />
  </Flexbox>
);
```
