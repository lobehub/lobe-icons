import { DivProps } from '@lobehub/ui';
import { FC, memo } from 'react';

import Ai21 from '@/Ai21';
import Ai360 from '@/Ai360';
import AiMass from '@/AiMass';
import Anthropic from '@/Anthropic';
import Aws from '@/Aws';
import Azure from '@/Azure';
import Baichuan from '@/Baichuan';
import BaiduCloud from '@/BaiduCloud';
import Bedrock from '@/Bedrock';
import Claude from '@/Claude';
import Cloudflare from '@/Cloudflare';
import DeepSeek from '@/DeepSeek';
import Doubao from '@/Doubao';
import Fireworks from '@/Fireworks';
import Gemini from '@/Gemini';
import Github from '@/Github';
import Google from '@/Google';
import Groq from '@/Groq';
import HuggingFace from '@/HuggingFace';
import Hunyuan from '@/Hunyuan';
import InternLM from '@/InternLM';
import LmStudio from '@/LmStudio';
import LobeHub from '@/LobeHub';
import Minimax from '@/Minimax';
import Mistral from '@/Mistral';
import Moonshot from '@/Moonshot';
import Novita from '@/Novita';
import Ollama from '@/Ollama';
import OpenAI from '@/OpenAI';
import OpenRouter from '@/OpenRouter';
import Perplexity from '@/Perplexity';
import Qwen from '@/Qwen';
import SenseNova from '@/SenseNova';
import SiliconCloud from '@/SiliconCloud';
import Spark from '@/Spark';
import Stepfun from '@/Stepfun';
import Together from '@/Together';
import Upstage from '@/Upstage';
import Wenxin from '@/Wenxin';
import WorkersAI from '@/WorkersAI';
import XAI from '@/XAI';
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
  { Icon: Qwen, keywords: [ModelProvider.Qwen] },
  { Icon: Stepfun, combineMultiple: 0.83, keywords: [ModelProvider.Stepfun] },
  { Icon: Spark, combineMultiple: 0.92, keywords: [ModelProvider.Spark] },
  { Icon: Fireworks, combineMultiple: 1.14, keywords: [ModelProvider.FireworksAI] },
  { Icon: Baichuan, combineMultiple: 0.83, keywords: [ModelProvider.Baichuan] },
  { Icon: AiMass, combineMultiple: 1.16, keywords: [ModelProvider.Taichu] },
  { Icon: Ai360, combineMultiple: 0.83, keywords: [ModelProvider.Ai360] },
  { Icon: SiliconCloud, combineMultiple: 0.75, keywords: [ModelProvider.SiliconCloud] },
  { Icon: Upstage, combineMultiple: 0.9, keywords: [ModelProvider.Upstage] },
  { Icon: Ai21, combineMultiple: 0.9, keywords: [ModelProvider.Ai21] },
  { Icon: Github, combineMultiple: 0.95, keywords: [ModelProvider.Github] },
  { Icon: Doubao, keywords: [ModelProvider.Doubao] },
  { Icon: Hunyuan, keywords: [ModelProvider.Hunyuan] },
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
        left={<Cloudflare.Combine size={size} type={type} />}
        right={<WorkersAI.Combine size={size} type={type} />}
        size={size}
        {...props}
      />
    )),
    Icon: Cloudflare,
    combineMultiple: 1.1,
    keywords: [ModelProvider.Cloudflare],
  },
  { Icon: InternLM, combineMultiple: 0.95, keywords: [ModelProvider.InternLM] },
];
