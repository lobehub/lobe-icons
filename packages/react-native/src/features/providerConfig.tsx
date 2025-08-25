import { FC, memo } from 'react';

// Import React Native icon components
import Ai21 from '../icons/Ai21';
import Ai302 from '../icons/Ai302';
import Ai360 from '../icons/Ai360';
import AiHubMix from '../icons/AiHubMix';
import AiMass from '../icons/AiMass';
import AlibabaCloud from '../icons/AlibabaCloud';
import Anthropic from '../icons/Anthropic';
import Aws from '../icons/Aws';
import Azure from '../icons/Azure';
import AzureAI from '../icons/AzureAI';
import Baichuan from '../icons/Baichuan';
import BaiduCloud from '../icons/BaiduCloud';
import Bedrock from '../icons/Bedrock';
import Bfl from '../icons/Bfl';
import BurnCloud from '../icons/BurnCloud';
import Claude from '../icons/Claude';
import Cloudflare from '../icons/Cloudflare';
import Cohere from '../icons/Cohere';
import DeepSeek from '../icons/DeepSeek';
import Doubao from '../icons/Doubao';
import Fal from '../icons/Fal';
import Fireworks from '../icons/Fireworks';
import Gemini from '../icons/Gemini';
import GiteeAI from '../icons/GiteeAI';
import Github from '../icons/Github';
import Google from '../icons/Google';
import Groq from '../icons/Groq';
import Higress from '../icons/Higress';
import HuggingFace from '../icons/HuggingFace';
import Hunyuan from '../icons/Hunyuan';
import Infinigence from '../icons/Infinigence';
import InternLM from '../icons/InternLM';
import Jina from '../icons/Jina';
import LmStudio from '../icons/LmStudio';
import LobeHub from '../icons/LobeHub';
import Minimax from '../icons/Minimax';
import Mistral from '../icons/Mistral';
import ModelScope from '../icons/ModelScope';
import Moonshot from '../icons/Moonshot';
import Nebius from '../icons/Nebius';
import Novita from '../icons/Novita';
import Nvidia from '../icons/Nvidia';
import Ollama from '../icons/Ollama';
import OpenAI from '../icons/OpenAI';
import OpenRouter from '../icons/OpenRouter';
import PPIO from '../icons/PPIO';
import Perplexity from '../icons/Perplexity';
import Player2 from '../icons/Player2';
import Qiniu from '../icons/Qiniu';
import Qwen from '../icons/Qwen';
import SambaNova from '../icons/SambaNova';
import Search1API from '../icons/Search1API';
import SenseNova from '../icons/SenseNova';
import SiliconCloud from '../icons/SiliconCloud';
import Spark from '../icons/Spark';
import Stepfun from '../icons/Stepfun';
import TencentCloud from '../icons/TencentCloud';
import Together from '../icons/Together';
import Upstage from '../icons/Upstage';
import V0 from '../icons/V0';
import Vercel from '../icons/Vercel';
import VertexAI from '../icons/VertexAI';
import Vllm from '../icons/Vllm';
import Volcengine from '../icons/Volcengine';
import Wenxin from '../icons/Wenxin';
import WorkersAI from '../icons/WorkersAI';
import XAI from '../icons/XAI';
import Xinference from '../icons/Xinference';
import ZeroOne from '../icons/ZeroOne';
import Zhipu from '../icons/Zhipu';
import Combine from './ProviderCombine/Combine';
import { RNModelProvider } from './providerEnum';
import type { RNIconAvatarProps, RNIconCombineProps, RNIconProps } from './types';

type RNProviderIconType = FC<RNIconProps & any> & {
  Avatar: FC<Omit<RNIconAvatarProps, 'Icon'> & any>;
  Brand?: FC<RNIconProps & any>;
  BrandColor?: FC<RNIconProps & any>;
  Color?: FC<RNIconProps & any>;
  Combine?: FC<Omit<RNIconCombineProps, 'Icon' | 'Text'> & any>;
  Text?: FC<RNIconProps & any>;
};

export interface RNProviderMapping {
  Combine?: FC<{ size: number; type: 'color' | 'mono' }>;
  Icon: RNProviderIconType;
  combineMultiple?: number;
  keywords: string[];
  props?: any;
}

export const rnProviderMappings: RNProviderMapping[] = [
  { Icon: LobeHub, keywords: [RNModelProvider.LobeHub] },
  { Icon: Zhipu, combineMultiple: 1.25, keywords: [RNModelProvider.ZhiPu] },
  {
    Combine: memo(({ size = 24, type = 'color', ...props }) => (
      <Combine
        left={
          type === 'color' ? (
            <Aws.Color size={size * 1.2} {...props} />
          ) : (
            <Aws size={size * 1.2} {...props} />
          )
        }
        right={<Bedrock.Combine size={size} type={type} {...props} />}
        size={size}
        {...props}
      />
    )),
    Icon: Bedrock,
    combineMultiple: 1.1,
    keywords: [RNModelProvider.Bedrock],
  },
  { Icon: DeepSeek, combineMultiple: 1.16, keywords: [RNModelProvider.DeepSeek] },
  {
    Combine: memo(({ size = 24, type = 'color', ...props }) => (
      <Combine
        left={
          type === 'color' ? (
            <Google.BrandColor size={size * 0.95} {...props} />
          ) : (
            <Google.Brand size={size * 0.95} {...props} />
          )
        }
        right={<Gemini.Combine size={size} type={type} {...props} />}
        size={size}
        {...props}
      />
    )),
    Icon: Google,
    combineMultiple: 0.92,
    keywords: [RNModelProvider.Google],
  },
  {
    Combine: memo(({ size = 24, type = 'color', ...props }) => (
      <Combine
        left={<Azure.Combine size={size * 0.92} type={type} {...props} />}
        right={<OpenAI.Combine size={size} {...props} />}
        size={size}
        {...props}
      />
    )),
    Icon: Azure,
    combineMultiple: 0.9,
    keywords: [RNModelProvider.Azure],
  },
  { Icon: Moonshot, combineMultiple: 0.9, keywords: [RNModelProvider.Moonshot] },
  { Icon: Novita, keywords: [RNModelProvider.Novita] },
  { Icon: OpenAI, keywords: [RNModelProvider.OpenAI] },
  { Icon: Ollama, combineMultiple: 1.16, keywords: [RNModelProvider.Ollama] },
  { Icon: Perplexity, keywords: [RNModelProvider.Perplexity] },
  { Icon: Minimax, combineMultiple: 1.3, keywords: [RNModelProvider.Minimax] },
  { Icon: Mistral, keywords: [RNModelProvider.Mistral] },
  {
    Combine: memo(({ size = 24, type = 'color', ...props }) => (
      <Combine
        left={<Anthropic.Text size={size * 0.75} {...props} />}
        right={<Claude.Combine size={size} type={type} {...props} />}
        size={size}
        {...props}
      />
    )),
    Icon: Anthropic,
    combineMultiple: 0.83,
    keywords: [RNModelProvider.Anthropic],
  },
  { Icon: Groq, keywords: [RNModelProvider.Groq] },
  { Icon: OpenRouter, combineMultiple: 0.8, keywords: [RNModelProvider.OpenRouter] },
  { Icon: ZeroOne, combineMultiple: 1, keywords: [RNModelProvider.ZeroOne] },
  { Icon: Together, keywords: [RNModelProvider.TogetherAI] },
  { Icon: Qiniu, combineMultiple: 1.1, keywords: [RNModelProvider.Qiniu] },
  {
    Combine: memo(({ size = 24, type = 'color', ...props }) => (
      <Combine
        left={<AlibabaCloud.Combine size={size} type={type} {...props} />}
        right={<Qwen.Combine size={size * 0.9} type={type} {...props} />}
        size={size}
        {...props}
      />
    )),
    Icon: AlibabaCloud,
    combineMultiple: 1.1,
    keywords: [RNModelProvider.Qwen],
  },
  { Icon: Stepfun, combineMultiple: 0.83, keywords: [RNModelProvider.Stepfun] },
  { Icon: Spark, combineMultiple: 0.92, keywords: [RNModelProvider.Spark] },
  { Icon: Fireworks, combineMultiple: 1.14, keywords: [RNModelProvider.FireworksAI] },
  { Icon: Baichuan, combineMultiple: 0.83, keywords: [RNModelProvider.Baichuan] },
  { Icon: BurnCloud, combineMultiple: 1.2, keywords: [RNModelProvider.BurnCloud] },
  { Icon: AiMass, combineMultiple: 1.16, keywords: [RNModelProvider.Taichu] },
  { Icon: Ai360, combineMultiple: 0.83, keywords: [RNModelProvider.Ai360] },
  { Icon: SiliconCloud, combineMultiple: 1, keywords: [RNModelProvider.SiliconCloud] },
  { Icon: Upstage, combineMultiple: 0.9, keywords: [RNModelProvider.Upstage] },
  { Icon: Ai21, combineMultiple: 0.9, keywords: [RNModelProvider.Ai21] },
  { Icon: Player2, combineMultiple: 0.9, keywords: [RNModelProvider.Player2] },
  { Icon: Github, combineMultiple: 0.95, keywords: [RNModelProvider.Github] },
  { Icon: Doubao, keywords: [RNModelProvider.Doubao] },
  { Icon: Hunyuan, keywords: [RNModelProvider.Hunyuan] },
  { Icon: Nvidia, keywords: [RNModelProvider.Nvidia] },
  { Icon: TencentCloud, keywords: [RNModelProvider.TencentCloud] },
  {
    Combine: memo(({ size = 24, type = 'color', ...props }) => (
      <Combine
        left={<BaiduCloud.Combine size={size * 0.9} type={type} {...props} />}
        right={<Wenxin.Combine extra={'千帆'} size={size} type={type} {...props} />}
        size={size}
        {...props}
      />
    )),
    Icon: Wenxin,
    keywords: [RNModelProvider.Wenxin],
  },
  { Icon: SenseNova, combineMultiple: 0.95, keywords: [RNModelProvider.SenseNova] },
  { Icon: HuggingFace, combineMultiple: 1.16, keywords: [RNModelProvider.HuggingFace] },
  { Icon: LmStudio, keywords: [RNModelProvider.LmStudio] },
  { Icon: XAI, combineMultiple: 0.85, keywords: [RNModelProvider.XAI] },
  {
    Combine: memo(({ size = 24, type = 'color', ...props }) => (
      <Combine
        left={<Cloudflare.Combine size={size * 1.1} type={type} {...props} />}
        right={<WorkersAI.Combine size={size * 0.9} type={type} {...props} />}
        size={size}
        {...props}
      />
    )),
    Icon: Cloudflare,
    combineMultiple: 1.1,
    keywords: [RNModelProvider.Cloudflare],
  },
  { Icon: InternLM, combineMultiple: 0.95, keywords: [RNModelProvider.InternLM] },
  { Icon: Higress, keywords: [RNModelProvider.Higress] },
  { Icon: Vllm, combineMultiple: 0.85, keywords: [RNModelProvider.VLLM] },
  { Icon: GiteeAI, combineMultiple: 0.95, keywords: [RNModelProvider.GiteeAI] },
  { Icon: ModelScope, combineMultiple: 1.2, keywords: [RNModelProvider.ModelScope] },
  { Icon: VertexAI, keywords: [RNModelProvider.VertexAI] },
  { Icon: PPIO, combineMultiple: 0.85, keywords: [RNModelProvider.PPIO] },
  { Icon: Jina, keywords: [RNModelProvider.Jina] },
  { Icon: AzureAI, keywords: [RNModelProvider.AzureAI] },
  { Icon: Volcengine, keywords: [RNModelProvider.Volcengine] },
  { Icon: SambaNova, combineMultiple: 0.8, keywords: [RNModelProvider.SambaNova] },
  { Icon: Cohere, keywords: [RNModelProvider.Cohere] },
  { Icon: Search1API, combineMultiple: 0.9, keywords: [RNModelProvider.Search1API] },
  { Icon: Infinigence, combineMultiple: 0.8, keywords: [RNModelProvider.InfiniAI] },
  { Icon: Xinference, combineMultiple: 0.85, keywords: [RNModelProvider.Xinference] },
  { Icon: Fal, combineMultiple: 0.8, keywords: [RNModelProvider.Fal] },
  { Icon: Ai302, combineMultiple: 0.9, keywords: [RNModelProvider.Ai302] },
  { Icon: AiHubMix, combineMultiple: 0.9, keywords: [RNModelProvider.AiHubMix] },
  {
    Combine: memo(({ size = 24, ...props }) => (
      <Combine
        left={<Vercel.Combine size={size * 0.9} {...props} />}
        right={<V0 size={size} {...props} />}
        size={size}
        {...props}
      />
    )),
    Icon: Vercel,
    keywords: [RNModelProvider.V0],
  },
  { Icon: Bfl, keywords: [RNModelProvider.Bfl] },
  { Icon: Nebius, combineMultiple: 0.8, keywords: [RNModelProvider.Nebius] },
];
