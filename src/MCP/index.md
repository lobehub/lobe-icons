---
nav: Components
group: Application
title: MCP (Model Context Protocol)
atomId: MCP
description: https://modelcontextprotocol.io
---

## Icons

```tsx
import { MCP } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <MCP size={64} />;
```

## Text

```tsx
import { MCP } from '@lobehub/icons';

export default () => <MCP.Text size={48} />;
```

## Combine

```tsx
import { MCP } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <MCP.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { MCP } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <MCP.Avatar size={64} />
    <MCP.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { MCP } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={MCP.colorPrimary} />
  </Flexbox>
);
```
