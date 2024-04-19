---
nav: Components
group: Application
title: Adobe (Firefly)
atomId: AdobeFirefly
description: https://firefly.adobe.com
---

## Icons

```tsx
import { AdobeFirefly } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <AdobeFirefly size={64} />
    <AdobeFirefly.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { AdobeFirefly } from '@lobehub/icons';

export default () => <AdobeFirefly.Text size={48} />;
```

## Combine

```tsx
import { AdobeFirefly } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <AdobeFirefly.Combine size={64} />;
```

## Avatars

```tsx
import { AdobeFirefly } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <AdobeFirefly.Avatar size={64} />
    <AdobeFirefly.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { AdobeFirefly } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={AdobeFirefly.colorPrimary} />
  </Flexbox>
);
```
