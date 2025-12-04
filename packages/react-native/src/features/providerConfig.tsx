import { FC, memo } from 'react';

import { ModelProvider } from '../../../../src';
import Ai21 from '../icons/Ai21';
import Ai302 from '../icons/Ai302';
import Ai360 from '../icons/Ai360';
import AiHubMix from '../icons/AiHubMix';
import AiMass from '../icons/AiMass';
import AkashChat from '../icons/AkashChat';
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
import Cerebras from '../icons/Cerebras';
import Claude from '../icons/Claude';
import Cloudflare from '../icons/Cloudflare';
import Cohere from '../icons/Cohere';
import CometAPI from '../icons/CometAPI';
import ComfyUI from '../icons/ComfyUI';
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
import LongCat from '../icons/LongCat';
import Minimax from '../icons/Minimax';
import Mistral from '../icons/Mistral';
import ModelScope from '../icons/ModelScope';
import Moonshot from '../icons/Moonshot';
import Nebius from '../icons/Nebius';
import NewAPI from '../icons/NewAPI';
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
import SophNet from '../icons/SophNet';
import Spark from '../icons/Spark';
import Stepfun from '../icons/Stepfun';
import Straico from '../icons/Straico';
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
import ZenMux from '../icons/ZenMux';
import ZeroOne from '../icons/ZeroOne';
import Zhipu from '../icons/Zhipu';
import Combine from './ProviderCombine/Combine';
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
  { Icon: LobeHub, combineMultiple: 1.1, keywords: [ModelProvider.LobeHub] },
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
    combineMultiple: 0.9,
    keywords: [ModelProvider.Azure],
  },
  { Icon: Moonshot, combineMultiple: 0.9, keywords: [ModelProvider.Moonshot] },
  { Icon: Novita, keywords: [ModelProvider.Novita] },
  { Icon: OpenAI, keywords: [ModelProvider.OpenAI] },
  { Icon: Ollama, combineMultiple: 1.16, keywords: [ModelProvider.Ollama] },
  { Icon: Perplexity, keywords: [ModelProvider.Perplexity] },
  { Icon: Minimax, combineMultiple: 1.3, keywords: [ModelProvider.Minimax] },
  { Icon: Mistral, keywords: [ModelProvider.Mistral] },
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
  { Icon: ZeroOne, combineMultiple: 1, keywords: [ModelProvider.ZeroOne] },
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
  { Icon: BurnCloud, combineMultiple: 1.2, keywords: [ModelProvider.BurnCloud] },
  { Icon: AiMass, combineMultiple: 1.16, keywords: [ModelProvider.Taichu] },
  { Icon: Ai360, combineMultiple: 0.83, keywords: [ModelProvider.Ai360] },
  { Icon: SiliconCloud, combineMultiple: 1, keywords: [ModelProvider.SiliconCloud] },
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
  { Icon: ComfyUI, keywords: [ModelProvider.ComfyUI] },
  { Icon: Search1API, combineMultiple: 0.9, keywords: [ModelProvider.Search1API] },
  { Icon: Infinigence, combineMultiple: 0.8, keywords: [ModelProvider.InfiniAI] },
  { Icon: Xinference, combineMultiple: 0.85, keywords: [ModelProvider.Xinference] },
  { Icon: Fal, combineMultiple: 0.8, keywords: [ModelProvider.Fal] },
  { Icon: Ai302, combineMultiple: 0.9, keywords: [ModelProvider.Ai302] },
  { Icon: AiHubMix, combineMultiple: 0.9, keywords: [ModelProvider.AiHubMix] },
  { Icon: CometAPI, keywords: [ModelProvider.CometAPI] },
  {
    Combine: memo(({ size = 24, ...props }) => (
      <Combine
        left={<Vercel.Combine size={size * 0.85} />}
        right={<V0 size={size * 1.1} />}
        size={size}
        {...props}
      />
    )),
    Icon: Vercel,
    keywords: [ModelProvider.V0],
  },
  { Icon: Vercel, combineMultiple: 0.85, keywords: [ModelProvider.Vercel] },
  { Icon: Bfl, keywords: [ModelProvider.Bfl] },
  { Icon: Nebius, combineMultiple: 0.75, keywords: [ModelProvider.Nebius] },
  { Icon: NewAPI, combineMultiple: 0.85, keywords: [ModelProvider.NewAPI] },
  { Icon: AkashChat, combineMultiple: 0.8, keywords: [ModelProvider.AkashChat] },
  { Icon: SophNet, combineMultiple: 0.85, keywords: [ModelProvider.SophNet] },
  {
    Combine: memo(({ size = 24, ...props }) => (
      <Ollama.Combine
        extra={'Cloud'}
        extraStyle={{ fontSize: size * 0.78, fontWeight: 500, marginLeft: size * 0.2 }}
        size={size * 1.16}
        {...props}
      />
    )),
    Icon: Ollama,
    keywords: [ModelProvider.OllamaCloud],
  },
  { Icon: LongCat, combineMultiple: 1, keywords: [ModelProvider.LongCat] },
  { Icon: Cerebras, combineMultiple: 1, keywords: [ModelProvider.Cerebras] },
  { Icon: Straico, combineMultiple: 0.85, keywords: [ModelProvider.Straico] },
  { Icon: ZenMux, combineMultiple: 1, keywords: [ModelProvider.ZenMux], props: { inverse: true } },
];
