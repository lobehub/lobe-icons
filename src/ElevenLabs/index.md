---
nav: Components
group: Model
title: ElevenLabs
atomId: ElevenLabs
description: https://elevenlabs.io
---

## Icons

```tsx
import { ElevenLabs } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <ElevenLabs size={64} />;
```

## Text

```tsx
import { ElevenLabs } from '@lobehub/icons';

export default () => <ElevenLabs.Text size={48} />;
```

## Combine

```tsx
import { ElevenLabs } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <ElevenLabs.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { ElevenLabs } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <ElevenLabs.Avatar size={64} />
    <ElevenLabs.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { ElevenLabs } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={ElevenLabs.colorPrimary} />
  </Flexbox>
);
```
