---
nav: Components
group: Provider
title: IFlyTekCloud (讯飞开放平台)
atomId: IFlyTekCloud
description: https://xfyun.cn
---

## Icons

```tsx
import { IFlyTekCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <IFlyTekCloud size={64} />
    <IFlyTekCloud.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { IFlyTekCloud } from '@lobehub/icons';

export default () => <IFlyTekCloud.Text size={48} />;
```

## Combine

```tsx
import { IFlyTekCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <IFlyTekCloud.Combine size={64} />
    <IFlyTekCloud.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { IFlyTekCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <IFlyTekCloud.Avatar size={64} />
    <IFlyTekCloud.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { IFlyTekCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={IFlyTekCloud.colorPrimary} />
  </Flexbox>
);
```
