<a name="readme-top"></a>

<div align="center">

<img height="120" src="https://registry.npmmirror.com/@lobehub/assets-logo/1.0.0/files/assets/logo-3d.webp">
<img height="120" src="https://gw.alipayobjects.com/zos/kitchen/qJ3l3EPsdW/split.svg">
<img height="120" src="https://registry.npmmirror.com/@lobehub/fluent-emoji-3d/1.1.0/files/assets/1f968.webp">

# Lobe Icons React Native

`React Native Package`

Popular AI / LLM Model Brand Icons for React Native and Expo. See them all on one page at [icons.lobehub.com](https://icons.lobehub.com/).<br/>
Contributions, corrections & requests can be made on GitHub.

[Changelog](./CHANGELOG.md) · [Report Bug][github-issues-link] · [Request Feature][github-issues-link]

<!-- SHIELD GROUP -->

[![][npm-release-shield]][npm-release-link]
[![][vercel-shield]][vercel-link]
[![][discord-shield]][discord-link]
[![][npm-downloads-shield]][npm-downloads-link]<br/>
[![][github-releasedate-shield]][github-releasedate-link]
[![][github-action-test-shield]][github-action-test-link]
[![][github-action-release-shield]][github-action-release-link]<br/>
[![][github-contributors-shield]][github-contributors-link]
[![][github-forks-shield]][github-forks-link]
[![][github-stars-shield]][github-stars-link]
[![][github-issues-shield]][github-issues-link]
[![][github-license-shield]][github-license-link]

![](https://github.com/lobehub/lobe-icons/assets/17870709/7e2c56d2-d7ea-4cb8-842b-22de162d6486)

</div>

## 🚀 Installation

```bash
npm install @lobehub/icons-rn
# or
yarn add @lobehub/icons-rn
# or
pnpm add @lobehub/icons-rn
```

### Peer Dependencies

This package requires the following peer dependencies:

```bash
npm install react-native-svg
# or
yarn add react-native-svg
# or
pnpm add react-native-svg
```

#### Optional: Gradient Support

For gradient background support in Avatar components, install `react-native-linear-gradient`:

```bash
npm install react-native-linear-gradient
# or
yarn add react-native-linear-gradient
# or
pnpm add react-native-linear-gradient
```

> 💡 **Note**: If `react-native-linear-gradient` is not installed, gradient backgrounds will automatically fallback to solid colors.

## 📖 Usage

> 💡 **API Compatibility**: The React Native package API is almost identical to the web version. You can refer to the [web documentation](https://icons.lobehub.com) for comprehensive usage examples and advanced patterns.

### Basic Usage

```tsx
import { Adobe } from '@lobehub/icons-rn';

export default function App() {
  return (
    <View style={styles.container}>
      <Adobe size={32} />
    </View>
  );
}
```

### With Styling

```tsx
import { Adobe } from '@lobehub/icons-rn';

export default function App() {
  return (
    <View style={styles.container}>
      <Adobe size={24} style={{ marginRight: 8, color: '#007AFF' }} />
    </View>
  );
}
```

### Color Version

```tsx
import { Adobe } from '@lobehub/icons-rn';

export default function App() {
  return (
    <View style={styles.container}>
      <Adobe.Color size={32} />
    </View>
  );
}
```

### Text Version

```tsx
import { Adobe } from '@lobehub/icons-rn';

export default function App() {
  return (
    <View style={styles.container}>
      <Adobe.Text size={32} />
    </View>
  );
}
```

### Avatar Version

```tsx
import { Adobe } from '@lobehub/icons-rn';

export default function App() {
  return (
    <View style={styles.container}>
      <Adobe.Avatar size={48} />
    </View>
  );
}
```

### Avatar with Gradient Background

```tsx
import { Adobe } from '@lobehub/icons-rn';

export default function App() {
  return (
    <View style={styles.container}>
      {/* CSS gradient format - requires react-native-linear-gradient */}
      <Adobe.Avatar 
        size={48} 
        background="linear-gradient(45deg, #9AD8F8, #3D8FFF, #6350FB)" 
      />
      
      {/* Automatic fallback to solid color if gradient library not available */}
      <Adobe.Avatar 
        size={48} 
        background="linear-gradient(to right, #FF6B35, #F7931E)" 
      />
    </View>
  );
}
```

### Combine Version (Icon + Text)

```tsx
import { Adobe } from '@lobehub/icons-rn';

export default function App() {
  return (
    <View style={styles.container}>
      <Adobe.Combine size={32} text="Adobe" textColor="#000000" />
    </View>
  );
}
```

## 🎨 API Reference

### Icon Props

| Prop    | Type        | Default        | Description         |
| ------- | ----------- | -------------- | ------------------- |
| `size`  | `number`    | `24`           | Icon size in pixels |
| `style` | `ViewStyle` | `undefined`    | Additional styles   |
| `color` | `string`    | `currentColor` | Icon color          |

### Avatar Props

| Prop           | Type     | Default     | Description                                                        |
| -------------- | -------- | ----------- | ------------------------------------------------------------------ |
| `size`         | `number` | `24`        | Avatar size in pixels                                              |
| `background`   | `string` | Brand color | Background color or CSS gradient (e.g., `linear-gradient(...)`)   |
| `color`        | `string` | `#FFFFFF`   | Icon color                                                         |
| `iconMultiple` | `number` | `0.6`       | Icon size multiplier                                               |

### Text Props

| Prop        | Type     | Default    | Description         |
| ----------- | -------- | ---------- | ------------------- |
| `size`      | `number` | `24`       | Text size in pixels |
| `text`      | `string` | Brand name | Custom text         |
| `textColor` | `string` | `#000000`  | Text color          |

### Combine Props

| Prop            | Type     | Default    | Description                 |
| --------------- | -------- | ---------- | --------------------------- |
| `size`          | `number` | `24`       | Icon size in pixels         |
| `text`          | `string` | Brand name | Custom text                 |
| `textColor`     | `string` | `#000000`  | Text color                  |
| `spaceMultiple` | `number` | `0.1`      | Space between icon and text |
| `textMultiple`  | `number` | `0.6`      | Text size multiplier        |

## 🔧 TypeScript Support

This package includes full TypeScript support:

```tsx
import { Adobe, type AdobeProps } from '@lobehub/icons-rn';

// All props are properly typed
const MyComponent: React.FC = () => {
  return <Adobe size={32} />;
};
```

## 🎨 Gradient Background Support

Avatar components support CSS `linear-gradient` format for rich visual effects:

### Supported Gradient Formats

```tsx
// Direction keywords
<Adobe.Avatar background="linear-gradient(to right, #FF6B35, #F7931E)" />
<Adobe.Avatar background="linear-gradient(to bottom, #667eea, #764ba2)" />

// Degree angles  
<Adobe.Avatar background="linear-gradient(45deg, #9AD8F8, #3D8FFF, #6350FB)" />
<Adobe.Avatar background="linear-gradient(135deg, #667eea, #764ba2)" />

// Multiple colors with positions
<Adobe.Avatar background="linear-gradient(90deg, #FF6B35 0%, #F7931E 50%, #C02425 100%)" />
```

### Automatic Fallback

If `react-native-linear-gradient` is not installed or gradient parsing fails:

- **Extracts first color** from gradient as solid background
- **Graceful degradation** - no crashes or broken UI
- **Development-friendly** - works without additional setup

Example fallback behavior:
```tsx
// With library: Shows beautiful gradient
// Without library: Shows solid #9AD8F8 background  
<Adobe.Avatar background="linear-gradient(45deg, #9AD8F8, #3D8FFF, #6350FB)" />
```

## 📦 Available Icons

This package includes **225+ AI/LLM brand icons** across three main categories:

### 🤖 Model Icons

Popular AI models including:

- **Claude** (Anthropic), **GPT** (OpenAI), **Gemini** (Google)
- **Qwen** (Alibaba), **DeepSeek**, **ChatGLM** (Zhipu)
- **Llama** (Meta), **Mistral**, **RWKV**, and many more

### 🏢 Provider Icons

AI service providers such as:

- **OpenAI**, **Anthropic**, **Google**, **Microsoft**
- **AWS Bedrock**, **Azure AI**, **Hugging Face**
- **Groq**, **Together AI**, **Fireworks**, and others

### 🛠️ Application Icons

AI-powered applications including:

- **Adobe Firefly**, **Midjourney**, **Cursor**
- **GitHub Copilot**, **Notion**, **Figma**
- **ComfyUI**, **Gradio**, **LangChain**, and more

### 🌐 Complete Icon Gallery

View all available icons with interactive examples at [icons.lobehub.com](https://icons.lobehub.com).

Each icon supports multiple variants:

- **Monochrome** - Inherits color from parent
- **Color** - Brand-specific colors
- **Avatar** - Circular background style
- **Text** - Brand name text
- **Combine** - Icon + text combination

## 🔗 Web Compatibility

This React Native package maintains **API compatibility** with the web version. For comprehensive documentation, advanced usage patterns, and live examples, visit:

- 📚 **Documentation**: [icons.lobehub.com](https://icons.lobehub.com)
- 🎮 **Interactive Examples**: All usage examples from the web docs work with React Native
- 🔧 **Advanced Patterns**: Component composition, theming, and customization guides
- 🎨 **Design Guidelines**: Icon sizing, spacing, and accessibility best practices

The main differences are:

- Uses `react-native-svg` instead of regular SVG
- Requires `ViewStyle` instead of `CSSProperties` for styling
- Uses React Native's theming instead of CSS variables

## 🆚 Comparison with Other Packages

| Package                     | Target | Bundle Size | Features              |
| --------------------------- | ------ | ----------- | --------------------- |
| `@lobehub/icons`            | Web    | Larger      | Full React components |
| `@lobehub/icons-static-svg` | Static | Small       | SVG files only        |
| `@lobehub/icons-rn`         | Mobile | Optimized   | RN components         |

## 🤝 Contributing

We welcome contributions! Please see our [contributing guide](https://github.com/lobehub/lobe-icons/blob/master/CONTRIBUTING.md) for details.

## 📄 License

[![][fossa-license-shield]][fossa-license-link]

Copyright © 2023 [LobeHub][profile-link]. <br />
This project is [MIT](./LICENSE) licensed.

<!-- LINK GROUP -->

[discord-link]: https://discord.gg/AYFPHvv2jT
[discord-shield]: https://img.shields.io/discord/1127171173982154893?color=5865F2&label=discord&labelColor=black&logo=discord&logoColor=white&style=flat-square
[fossa-license-link]: https://app.fossa.com/projects/git%2Bgithub.com%2Flobehub%2Flobe-icons
[fossa-license-shield]: https://app.fossa.com/api/projects/git%2Bgithub.com%2Flobehub%2Flobe-icons.svg?type=large
[github-action-release-link]: https://github.com/actions/workflows/lobehub/lobe-icons/release.yml
[github-action-release-shield]: https://img.shields.io/github/actions/workflow/status/lobehub/lobe-icons/release.yml?label=release&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-action-test-link]: https://github.com/actions/workflows/lobehub/lobe-icons/test.yml
[github-action-test-shield]: https://img.shields.io/github/actions/workflow/status/lobehub/lobe-icons/test.yml?label=test&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-contributors-link]: https://github.com/lobehub/lobe-icons/graphs/contributors
[github-contributors-shield]: https://img.shields.io/github/contributors/lobehub/lobe-icons?color=c4f042&labelColor=black&style=flat-square
[github-forks-link]: https://github.com/lobehub/lobe-icons/network/members
[github-forks-shield]: https://img.shields.io/github/forks/lobehub/lobe-icons?color=8ae8ff&labelColor=black&style=flat-square
[github-issues-link]: https://github.com/lobehub/lobe-icons/issues
[github-issues-shield]: https://img.shields.io/github/issues/lobehub/lobe-icons?color=ff80eb&labelColor=black&style=flat-square
[github-license-link]: https://github.com/lobehub/lobe-icons/blob/master/LICENSE
[github-license-shield]: https://img.shields.io/github/license/lobehub/lobe-icons?color=white&labelColor=black&style=flat-square
[github-releasedate-link]: https://github.com/lobehub/lobe-icons/releases
[github-releasedate-shield]: https://img.shields.io/github/release-date/lobehub/lobe-icons?labelColor=black&style=flat-square
[github-stars-link]: https://github.com/lobehub/lobe-icons/network/stargazers
[github-stars-shield]: https://img.shields.io/github/stars/lobehub/lobe-icons?color=ffcb47&labelColor=black&style=flat-square
[npm-downloads-link]: https://www.npmjs.com/package/@lobehub/icons-rn
[npm-downloads-shield]: https://img.shields.io/npm/dt/@lobehub/icons-rn?labelColor=black&style=flat-square
[npm-release-link]: https://www.npmjs.com/package/@lobehub/icons-rn
[npm-release-shield]: https://img.shields.io/npm/v/@lobehub/icons-rn?color=369eff&labelColor=black&logo=npm&logoColor=white&style=flat-square
[profile-link]: https://github.com/lobehub
[vercel-link]: https://icons.lobehub.com
[vercel-shield]: https://img.shields.io/website?down_message=offline&label=vercel&labelColor=black&logo=vercel&style=flat-square&up_message=online&url=https%3A%2F%2Fui.lobehub.com
