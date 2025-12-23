---
nav: Components
group: Application
title: Github Copilot
atomId: GithubCopilot
description: https://github.com/features/copilot
---

## Icons

```tsx
import { GithubCopilot } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <GithubCopilot size={64} />;
```

## Text

```tsx
import { GithubCopilot } from '@lobehub/icons';

export default () => <GithubCopilot.Text size={48} />;
```

## Combine

```tsx
import { GithubCopilot } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <GithubCopilot.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { GithubCopilot } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <GithubCopilot.Avatar size={64} />
    <GithubCopilot.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { GithubCopilot } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={GithubCopilot.colorPrimary} />
  </Flexbox>
);
```
