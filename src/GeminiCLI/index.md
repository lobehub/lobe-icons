---
nav: Components
group: Application
title: Gemini CLI
atomId: GeminiCLI
description: https://geminicli.com
---

## Icons

```tsx
import { GeminiCLI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <GeminiCLI size={64} />
    <GeminiCLI.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { GeminiCLI } from '@lobehub/icons';

export default () => <GeminiCLI.Text size={48} />;
```

## Combine

```tsx
import { GeminiCLI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <GeminiCLI.Combine size={64} />
    <GeminiCLI.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { GeminiCLI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <GeminiCLI.Avatar size={64} />
    <GeminiCLI.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { GeminiCLI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={GeminiCLI.colorPrimary} />
  </Flexbox>
);
```
