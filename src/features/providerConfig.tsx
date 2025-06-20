import { DivProps } from '@lobehub/ui';
import { FC, memo } from 'react';

import Ai21 from '@/Ai21';
import Ai360 from '@/Ai360';
import AiHubMix from '@/AiHubMix';
import AiMass from '@/AiMass';
import AlibabaCloud from '@/AlibabaCloud';
import Anthropic from '@/Anthropic';
import Aws from '@/Aws';
import Azure from '@/Azure';
import AzureAI from '@/AzureAI';
import Baichuan from '@/Baichuan';
import BaiduCloud from '@/BaiduCloud';
import Bedrock from '@/Bedrock';
import Claude from '@/Claude';
import Cloudflare from '@/Cloudflare';
import Cohere from '@/Cohere';
import DeepSeek from '@/DeepSeek';
import Doubao from '@/Doubao';
import Fal from '@/Fal';
import Fireworks from '@/Fireworks';
import Gemini from '@/Gemini';
import GiteeAI from '@/GiteeAI';
import Github from '@/Github';
import Google from '@/Google';
import Groq from '@/Groq';
import Higress from '@/Higress';
import HuggingFace from '@/HuggingFace';
import Hunyuan from '@/Hunyuan';
import Infinigence from '@/Infinigence';
import InternLM from '@/InternLM';
import Jina from '@/Jina';
import LmStudio from '@/LmStudio';
import LobeHub from '@/LobeHub';
import Minimax from '@/Minimax';
import Mistral from '@/Mistral';
import ModelScope from '@/ModelScope';
import Moonshot from '@/Moonshot';
import Novita from '@/Novita';
import Nvidia from '@/Nvidia';
import Ollama from '@/Ollama';
import OpenAI from '@/OpenAI';
import OpenRouter from '@/OpenRouter';
import PPIO from '@/PPIO';
import Perplexity from '@/Perplexity';
import Player2 from '@/Player2';
import Qiniu from '@/Qiniu';
import Qwen from '@/Qwen';
import SambaNova from '@/SambaNova';
import Search1API from '@/Search1API';
import SenseNova from '@/SenseNova';
import SiliconCloud from '@/SiliconCloud';
import Spark from '@/Spark';
import Stepfun from '@/Stepfun';
import TencentCloud from '@/TencentCloud';
import Together from '@/Together';
import Upstage from '@/Upstage';
import V0 from '@/V0';
import Vercel from '@/Vercel';
import VertexAI from '@/VertexAI';
import Vllm from '@/Vllm';
import Volcengine from '@/Volcengine';
import Wenxin from '@/Wenxin';
import WorkersAI from '@/WorkersAI';
import XAI from '@/XAI';
import Xinference from '@/Xinference';
import ZeroOne from '@/ZeroOne';
import Zhipu from '@/Zhipu';
import type { IconType } from '@/types';

import type { IconAvatarProps } from './IconAvatar';
import type { IconCombineProps } from './IconCombine';
import Combine from './ProviderCombine/Combine';
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
  Icon: ProviderIconType;
  combineMultiple?: number;
  keywords: string[];
  props?: any;
}

export const providerMappings: ProviderMapping[] = [
  { Icon: LobeHub, keywords: [ModelProvider.LobeHub] },
  { Icon: Zhipu, combineMultiple: 1.25, keywords: [ModelProvider.ZhiPu] },
  {
    Combine: memo(({ size = 24, type = 'color', ...props }) => (
      <Combine
        left={type === 'color' ? <Aws.Color size={size * 1.2} /> : <Aws size={size * 1.2} />}
        right={<Bedrock.Combine size={size} type={type} />}
        size={size}
        {...props}
      />
    )),
    Icon: Bedrock,
    combineMultiple: 1.1,
    keywords: [ModelProvider.Bedrock],
  },
  { Icon: DeepSeek, combineMultiple: 1.16, keywords: [ModelProvider.DeepSeek] },
  {
    Combine: memo(({ size = 24, type = 'color', ...props }) => (
      <Combine
        left={
          type === 'color' ? (
            <Google.BrandColor size={size * 0.95} />
          ) : (
            <Google.Brand size={size * 0.95} />
          )
        }
        right={<Gemini.Combine size={size} type={type} />}
        size={size}
        {...props}
      />
    )),
    Icon: Google,
    combineMultiple: 0.92,
    keywords: [ModelProvider.Google],
  },
  {
    Combine: memo(({ size = 24, type = 'color', ...props }) => (
      <Combine
        left={<Azure.Combine size={size * 0.92} type={type} />}
        right={<OpenAI.Combine size={size} />}
        size={size}
        {...props}
      />
    )),
    Icon: Azure,
    keywords: [ModelProvider.Azure],
  },
  { Icon: Moonshot, combineMultiple: 0.9, keywords: [ModelProvider.Moonshot] },
  { Icon: Novita, keywords: [ModelProvider.Novita] },
  { Icon: OpenAI, keywords: [ModelProvider.OpenAI] },
  { Icon: Ollama, combineMultiple: 1.16, keywords: [ModelProvider.Ollama] },
  { Icon: Perplexity, keywords: [ModelProvider.Perplexity] },
  { Icon: Minimax, combineMultiple: 1.3, keywords: [ModelProvider.Minimax] },
  { Icon: Mistral, combineMultiple: 1.08, keywords: [ModelProvider.Mistral] },
  {
    Combine: memo(({ size = 24, type = 'color', ...props }) => (
      <Combine
        left={<Anthropic.Text size={size * 0.75} />}
        right={<Claude.Combine size={size} type={type} />}
        size={size}
        {...props}
      />
    )),
    Icon: Anthropic,
    combineMultiple: 0.83,
    keywords: [ModelProvider.Anthropic],
  },
  { Icon: Groq, keywords: [ModelProvider.Groq] },
  { Icon: OpenRouter, combineMultiple: 0.8, keywords: [ModelProvider.OpenRouter] },
  { Icon: ZeroOne, combineMultiple: 0.9, keywords: [ModelProvider.ZeroOne] },
  { Icon: Together, keywords: [ModelProvider.TogetherAI] },
  { Icon: Qiniu, combineMultiple: 1.1, keywords: [ModelProvider.Qiniu] },
  {
    Combine: memo(({ size = 24, type = 'color', ...props }) => (
      <Combine
        left={<AlibabaCloud.Combine size={size} type={type} />}
        right={<Qwen.Combine size={size * 0.9} type={type} />}
        size={size}
        {...props}
      />
    )),
    Icon: AlibabaCloud,
    combineMultiple: 1.1,
    keywords: [ModelProvider.Qwen],
  },
  { Icon: Stepfun, combineMultiple: 0.83, keywords: [ModelProvider.Stepfun] },
  { Icon: Spark, combineMultiple: 0.92, keywords: [ModelProvider.Spark] },
  { Icon: Fireworks, combineMultiple: 1.14, keywords: [ModelProvider.FireworksAI] },
  { Icon: Baichuan, combineMultiple: 0.83, keywords: [ModelProvider.Baichuan] },
  { Icon: AiMass, combineMultiple: 1.16, keywords: [ModelProvider.Taichu] },
  { Icon: Ai360, combineMultiple: 0.83, keywords: [ModelProvider.Ai360] },
  { Icon: SiliconCloud, combineMultiple: 0.75, keywords: [ModelProvider.SiliconCloud] },
  { Icon: Upstage, combineMultiple: 0.9, keywords: [ModelProvider.Upstage] },
  { Icon: Ai21, combineMultiple: 0.9, keywords: [ModelProvider.Ai21] },
  { Icon: Player2, combineMultiple: 0.9, keywords: [ModelProvider.Player2] },
  { Icon: Github, combineMultiple: 0.95, keywords: [ModelProvider.Github] },
  { Icon: Doubao, keywords: [ModelProvider.Doubao] },
  { Icon: Hunyuan, keywords: [ModelProvider.Hunyuan] },
  { Icon: Nvidia, keywords: [ModelProvider.Nvidia] },
  { Icon: TencentCloud, keywords: [ModelProvider.TencentCloud] },
  {
    Combine: memo(({ size = 24, type = 'color', ...props }) => (
      <Combine
        left={<BaiduCloud.Combine size={size * 0.9} type={type} />}
        right={<Wenxin.Combine extra={'千帆'} size={size} type={type} {...props} />}
        size={size}
        {...props}
      />
    )),
    Icon: Wenxin,
    keywords: [ModelProvider.Wenxin],
  },
  { Icon: SenseNova, combineMultiple: 0.95, keywords: [ModelProvider.SenseNova] },
  { Icon: HuggingFace, combineMultiple: 1.16, keywords: [ModelProvider.HuggingFace] },
  { Icon: LmStudio, keywords: [ModelProvider.LmStudio] },
  { Icon: XAI, combineMultiple: 0.85, keywords: [ModelProvider.XAI] },
  {
    Combine: memo(({ size = 24, type = 'color', ...props }) => (
      <Combine
        left={<Cloudflare.Combine size={size * 1.1} type={type} />}
        right={<WorkersAI.Combine size={size * 0.9} type={type} />}
        size={size}
        {...props}
      />
    )),
    Icon: Cloudflare,
    combineMultiple: 1.1,
    keywords: [ModelProvider.Cloudflare],
  },
  { Icon: InternLM, combineMultiple: 0.95, keywords: [ModelProvider.InternLM] },
  { Icon: Higress, keywords: [ModelProvider.Higress] },
  { Icon: Vllm, combineMultiple: 0.85, keywords: [ModelProvider.VLLM] },
  { Icon: GiteeAI, combineMultiple: 0.95, keywords: [ModelProvider.GiteeAI] },
  { Icon: ModelScope, combineMultiple: 1.2, keywords: [ModelProvider.ModelScope] },
  { Icon: VertexAI, keywords: [ModelProvider.VertexAI] },
  { Icon: PPIO, combineMultiple: 0.85, keywords: [ModelProvider.PPIO] },
  { Icon: Jina, keywords: [ModelProvider.Jina] },
  { Icon: AzureAI, keywords: [ModelProvider.AzureAI] },
  { Icon: Volcengine, keywords: [ModelProvider.Volcengine] },
  { Icon: SambaNova, combineMultiple: 0.8, keywords: [ModelProvider.SambaNova] },
  { Icon: Cohere, keywords: [ModelProvider.Cohere] },
  { Icon: Search1API, combineMultiple: 0.9, keywords: [ModelProvider.Search1API] },
  { Icon: Infinigence, combineMultiple: 0.8, keywords: [ModelProvider.InfiniAI] },
  { Icon: Xinference, combineMultiple: 0.85, keywords: [ModelProvider.Xinference] },
  { Icon: Fal, keywords: [ModelProvider.Fal] },
  { Icon: AiHubMix, combineMultiple: 0.9, keywords: [ModelProvider.AiHubMix] },
  {
    Combine: memo(({ size = 24, type = 'color', ...props }) => (
      <Combine
        left={<Vercel.Combine size={size * 1.1} type={type} />}
        right={<V0.Combine size={size * 0.9} type={type} />}
        size={size}
        {...props}
      />
    )),
    Icon: Vercel,
    combineMultiple: 1.1,
    keywords: [ModelProvider.V0],
  },
];
