---
nav: Components
group: Provider
title: Ollama
atomId: Ollama
description: https://ollama.ai
---

## Icons

```tsx
import { Ollama } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Ollama size={64} />;
```

## Text

```tsx
import { Ollama } from '@lobehub/icons';

export default () => <Ollama.Text size={48} />;
```

## Combine

```tsx
import { Ollama } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Ollama.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Ollama } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Ollama.Avatar size={64} />
    <Ollama.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Ollama } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Ollama.colorPrimary} />
  </Flexbox>
);
```
