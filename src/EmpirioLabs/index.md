---
nav: Components
group: Provider
title: EmpirioLabs
atomId: EmpirioLabs
description: https://empiriolabs.ai
---

## Icons

```tsx
import { EmpirioLabs } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <EmpirioLabs size={64} />
    <EmpirioLabs.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { EmpirioLabs } from '@lobehub/icons';

export default () => <EmpirioLabs.Text size={48} />;
```

## Combine

```tsx
import { EmpirioLabs } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <EmpirioLabs.Combine size={64} />
    <EmpirioLabs.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { EmpirioLabs } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <EmpirioLabs.Avatar size={64} background={EmpirioLabs.colorGradient} />
    <EmpirioLabs.Avatar size={64} />
    <EmpirioLabs.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { EmpirioLabs } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={EmpirioLabs.colorPrimary} />
    <ColorPreview color={EmpirioLabs.colorGradient} />
  </Flexbox>
);
```
