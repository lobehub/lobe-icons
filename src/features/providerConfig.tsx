import { DivProps } from '@lobehub/ui';
import { FC, memo } from 'react';

import type { IconType } from '@/types';

import type { IconAvatarProps } from './IconAvatar';
import type { IconCombineProps } from './IconCombine';
import DynamicCombine from './ProviderCombine/DynamicCombine';
import { ModelProvider } from './providerEnum';

type ProviderIconType = FC<IconType & any> & {
  Avatar: FC<Omit<IconAvatarProps, 'Icon'> & any>;
  Brand?: FC<IconType & any>;
  BrandColor?: FC<IconType & any>;
  Color?: FC<IconType & any>;
  Combine?: FC<Omit<IconCombineProps, 'Icon' | 'Text'> & any>;
  Text?: FC<IconType & any>;
};

export interface ProviderMapping {
  Combine?: FC<DivProps & { size: number; type: 'color' | 'mono' }>;
  combineMultiple?: number;
  iconImport: () => Promise<{ default: ProviderIconType }>;
  keywords: string[];
  props?: any;
}

export const providerMappings: ProviderMapping[] = [
  { iconImport: () => import('@/LobeHub'), keywords: [ModelProvider.LobeHub] },
  { combineMultiple: 1.25, iconImport: () => import('@/Zhipu'), keywords: [ModelProvider.ZhiPu] },
  {
    Combine: memo(({ size = 24, type = 'color', ...props }) => (
      <DynamicCombine
        leftImport={() => import('@/Aws')}
        leftSize={size * 1.2}
        rightImport={() => import('@/Bedrock')}
        size={size}
        type={type}
        {...props}
      />
    )),
    combineMultiple: 1.1,
    iconImport: () => import('@/Bedrock'),
    keywords: [ModelProvider.Bedrock],
  },
  {
    combineMultiple: 1.16,
    iconImport: () => import('@/DeepSeek'),
    keywords: [ModelProvider.DeepSeek],
  },
  {
    Combine: memo(({ size = 24, type = 'color', ...props }) => (
      <DynamicCombine
        leftImport={() => import('@/Google')}
        leftSize={size * 0.95}
        rightImport={() => import('@/Gemini')}
        size={size}
        type={type}
        {...props}
      />
    )),
    combineMultiple: 0.92,
    iconImport: () => import('@/Google'),
    keywords: [ModelProvider.Google],
  },
  {
    Combine: memo(({ size = 24, type = 'color', ...props }) => (
      <DynamicCombine
        leftImport={() => import('@/Azure')}
        leftSize={size * 0.92}
        rightImport={() => import('@/OpenAI')}
        size={size}
        type={type}
        {...props}
      />
    )),
    combineMultiple: 0.9,
    iconImport: () => import('@/Azure'),
    keywords: [ModelProvider.Azure],
  },
  {
    combineMultiple: 0.9,
    iconImport: () => import('@/Moonshot'),
    keywords: [ModelProvider.Moonshot],
  },
  { iconImport: () => import('@/Novita'), keywords: [ModelProvider.Novita] },
  { iconImport: () => import('@/OpenAI'), keywords: [ModelProvider.OpenAI] },
  { combineMultiple: 1.16, iconImport: () => import('@/Ollama'), keywords: [ModelProvider.Ollama] },
  { iconImport: () => import('@/Perplexity'), keywords: [ModelProvider.Perplexity] },
  {
    combineMultiple: 1.3,
    iconImport: () => import('@/Minimax'),
    keywords: [ModelProvider.Minimax],
  },
  { iconImport: () => import('@/Mistral'), keywords: [ModelProvider.Mistral] },
  {
    Combine: memo(({ size = 24, type = 'color', ...props }) => (
      <DynamicCombine
        leftImport={() => import('@/Anthropic')}
        leftSize={size * 0.75}
        rightImport={() => import('@/Claude')}
        size={size}
        type={type}
        {...props}
      />
    )),
    combineMultiple: 0.83,
    iconImport: () => import('@/Anthropic'),
    keywords: [ModelProvider.Anthropic],
  },
  { iconImport: () => import('@/Groq'), keywords: [ModelProvider.Groq] },
  {
    combineMultiple: 0.8,
    iconImport: () => import('@/OpenRouter'),
    keywords: [ModelProvider.OpenRouter],
  },
  { combineMultiple: 1, iconImport: () => import('@/ZeroOne'), keywords: [ModelProvider.ZeroOne] },
  { iconImport: () => import('@/Together'), keywords: [ModelProvider.TogetherAI] },
  { combineMultiple: 1.1, iconImport: () => import('@/Qiniu'), keywords: [ModelProvider.Qiniu] },
  {
    Combine: memo(({ size = 24, type = 'color', ...props }) => (
      <DynamicCombine
        leftImport={() => import('@/AlibabaCloud')}
        rightImport={() => import('@/Qwen')}
        rightSize={size * 0.9}
        size={size}
        type={type}
        {...props}
      />
    )),
    combineMultiple: 1.1,
    iconImport: () => import('@/AlibabaCloud'),
    keywords: [ModelProvider.Qwen],
  },
  {
    combineMultiple: 0.83,
    iconImport: () => import('@/Stepfun'),
    keywords: [ModelProvider.Stepfun],
  },
  { combineMultiple: 0.92, iconImport: () => import('@/Spark'), keywords: [ModelProvider.Spark] },
  {
    combineMultiple: 1.14,
    iconImport: () => import('@/Fireworks'),
    keywords: [ModelProvider.FireworksAI],
  },
  {
    combineMultiple: 0.83,
    iconImport: () => import('@/Baichuan'),
    keywords: [ModelProvider.Baichuan],
  },
  {
    combineMultiple: 1.2,
    iconImport: () => import('@/BurnCloud'),
    keywords: [ModelProvider.BurnCloud],
  },
  { combineMultiple: 1.16, iconImport: () => import('@/AiMass'), keywords: [ModelProvider.Taichu] },
  { combineMultiple: 0.83, iconImport: () => import('@/Ai360'), keywords: [ModelProvider.Ai360] },
  {
    combineMultiple: 1,
    iconImport: () => import('@/SiliconCloud'),
    keywords: [ModelProvider.SiliconCloud],
  },
  {
    combineMultiple: 0.9,
    iconImport: () => import('@/Upstage'),
    keywords: [ModelProvider.Upstage],
  },
  { combineMultiple: 0.9, iconImport: () => import('@/Ai21'), keywords: [ModelProvider.Ai21] },
  {
    combineMultiple: 0.9,
    iconImport: () => import('@/Player2'),
    keywords: [ModelProvider.Player2],
  },
  { combineMultiple: 0.95, iconImport: () => import('@/Github'), keywords: [ModelProvider.Github] },
  { iconImport: () => import('@/Doubao'), keywords: [ModelProvider.Doubao] },
  { iconImport: () => import('@/Hunyuan'), keywords: [ModelProvider.Hunyuan] },
  { iconImport: () => import('@/Nvidia'), keywords: [ModelProvider.Nvidia] },
  { iconImport: () => import('@/TencentCloud'), keywords: [ModelProvider.TencentCloud] },
  {
    Combine: memo(({ size = 24, type = 'color', ...props }) => (
      <DynamicCombine
        leftImport={() => import('@/BaiduCloud')}
        leftSize={size * 0.9}
        rightImport={() => import('@/Wenxin')}
        size={size}
        type={type}
        {...props}
      />
    )),
    iconImport: () => import('@/Wenxin'),
    keywords: [ModelProvider.Wenxin],
  },
  {
    combineMultiple: 0.95,
    iconImport: () => import('@/SenseNova'),
    keywords: [ModelProvider.SenseNova],
  },
  {
    combineMultiple: 1.16,
    iconImport: () => import('@/HuggingFace'),
    keywords: [ModelProvider.HuggingFace],
  },
  { iconImport: () => import('@/LmStudio'), keywords: [ModelProvider.LmStudio] },
  { combineMultiple: 0.85, iconImport: () => import('@/XAI'), keywords: [ModelProvider.XAI] },
  {
    Combine: memo(({ size = 24, type = 'color', ...props }) => (
      <DynamicCombine
        leftImport={() => import('@/Cloudflare')}
        leftSize={size * 1.1}
        rightImport={() => import('@/WorkersAI')}
        rightSize={size * 0.9}
        size={size}
        type={type}
        {...props}
      />
    )),
    combineMultiple: 1.1,
    iconImport: () => import('@/Cloudflare'),
    keywords: [ModelProvider.Cloudflare],
  },
  {
    combineMultiple: 0.95,
    iconImport: () => import('@/InternLM'),
    keywords: [ModelProvider.InternLM],
  },
  { iconImport: () => import('@/Higress'), keywords: [ModelProvider.Higress] },
  { combineMultiple: 0.85, iconImport: () => import('@/Vllm'), keywords: [ModelProvider.VLLM] },
  {
    combineMultiple: 0.95,
    iconImport: () => import('@/GiteeAI'),
    keywords: [ModelProvider.GiteeAI],
  },
  {
    combineMultiple: 1.2,
    iconImport: () => import('@/ModelScope'),
    keywords: [ModelProvider.ModelScope],
  },
  { iconImport: () => import('@/VertexAI'), keywords: [ModelProvider.VertexAI] },
  { combineMultiple: 0.85, iconImport: () => import('@/PPIO'), keywords: [ModelProvider.PPIO] },
  { iconImport: () => import('@/Jina'), keywords: [ModelProvider.Jina] },
  { iconImport: () => import('@/AzureAI'), keywords: [ModelProvider.AzureAI] },
  { iconImport: () => import('@/Volcengine'), keywords: [ModelProvider.Volcengine] },
  {
    combineMultiple: 0.8,
    iconImport: () => import('@/SambaNova'),
    keywords: [ModelProvider.SambaNova],
  },
  { iconImport: () => import('@/Cohere'), keywords: [ModelProvider.Cohere] },
  {
    combineMultiple: 0.9,
    iconImport: () => import('@/Search1API'),
    keywords: [ModelProvider.Search1API],
  },
  {
    combineMultiple: 0.8,
    iconImport: () => import('@/Infinigence'),
    keywords: [ModelProvider.InfiniAI],
  },
  {
    combineMultiple: 0.85,
    iconImport: () => import('@/Xinference'),
    keywords: [ModelProvider.Xinference],
  },
  { combineMultiple: 0.8, iconImport: () => import('@/Fal'), keywords: [ModelProvider.Fal] },
  { combineMultiple: 0.9, iconImport: () => import('@/Ai302'), keywords: [ModelProvider.Ai302] },
  {
    combineMultiple: 0.9,
    iconImport: () => import('@/AiHubMix'),
    keywords: [ModelProvider.AiHubMix],
  },
  {
    Combine: memo(({ size = 24, ...props }) => (
      <DynamicCombine
        leftImport={() => import('@/Vercel')}
        leftSize={size * 0.9}
        rightImport={() => import('@/V0')}
        size={size}
        {...props}
      />
    )),
    iconImport: () => import('@/Vercel'),
    keywords: [ModelProvider.V0],
  },
];
