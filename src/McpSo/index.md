---
nav: Components
group: Application
title: MCP.so
atomId: McpSo
description: https://mcp.so
---

## Icons

```tsx
import { McpSo } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <McpSo size={64} />
    <McpSo.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { McpSo } from '@lobehub/icons';

export default () => <McpSo.Text size={48} />;
```

## Combine

```tsx
import { McpSo } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <McpSo.Combine size={64} />
    <McpSo.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { McpSo } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <McpSo.Avatar size={64} />
    <McpSo.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { McpSo } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={McpSo.colorPrimary} />
  </Flexbox>
);
```
