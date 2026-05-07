---
nav: Components
group: Application
title: CodeBuddy
atomId: CodeBuddy
description: https://codebuddy.ai
---

## Icons

```tsx
import { CodeBuddy } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <CodeBuddy size={64} />
    <CodeBuddy.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { CodeBuddy } from '@lobehub/icons';

export default () => <CodeBuddy.Text size={48} />;
```

## Combine

```tsx
import { CodeBuddy } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <CodeBuddy.Combine size={64} />
    <CodeBuddy.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { CodeBuddy } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <CodeBuddy.Avatar size={64} />
    <CodeBuddy.Avatar size={64} shape={'square'} />
    <CodeBuddy.Avatar size={64} shape={'square'} background={CodeBuddy.colorPrimary} />
  </Flexbox>
);
```

## Colors

```tsx
import { CodeBuddy } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={CodeBuddy.colorPrimary} />
    <ColorPreview color={CodeBuddy.colorGradient} />
  </Flexbox>
);
```
