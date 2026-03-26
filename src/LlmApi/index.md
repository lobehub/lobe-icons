---
nav: Components
group: Provider
title: LLM API
atomId: LlmApi
description: https://llmapi.ai
---

## Icons

```tsx
import { LlmApi } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <LlmApi size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { LlmApi } from '@lobehub/icons';

export default () => <LlmApi.Text size={48} />;
```

## Combine

```tsx
import { LlmApi } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <LlmApi.Combine size={64} />
    <LlmApi.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { LlmApi } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <LlmApi.Avatar size={64} background={LlmApi.colorPrimary} />
    <LlmApi.Avatar size={64} />
    <LlmApi.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { LlmApi } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={LlmApi.colorPrimary} />
  </Flexbox>
);
```
