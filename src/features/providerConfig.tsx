import { DivProps } from '@lobehub/ui';
import { FC, memo } from 'react';

import Ai21 from '@/Ai21';
import Ai302 from '@/Ai302';
import Ai360 from '@/Ai360';
import AiHubMix from '@/AiHubMix';
import AiMass from '@/AiMass';
import AiStudio from '@/AiStudio';
import AkashChat from '@/AkashChat';
import AlephAlpha from '@/AlephAlpha';
import Alibaba from '@/Alibaba';
import AlibabaCloud from '@/AlibabaCloud';
import AntGroup from '@/AntGroup';
import Anthropic from '@/Anthropic';
import Anyscale from '@/Anyscale';
import Apple from '@/Apple';
import AtlasCloud from '@/AtlasCloud';
import Aws from '@/Aws';
import Azure from '@/Azure';
import AzureAI from '@/AzureAI';
import Baichuan from '@/Baichuan';
import Baidu from '@/Baidu';
import BaiduCloud from '@/BaiduCloud';
import Bailian from '@/Bailian';
import Baseten from '@/Baseten';
import Bedrock from '@/Bedrock';
import Bfl from '@/Bfl';
import Bilibili from '@/Bilibili';
import BurnCloud from '@/BurnCloud';
import ByteDance from '@/ByteDance';
import CentML from '@/CentML';
import Cerebras from '@/Cerebras';
import Civitai from '@/Civitai';
import Claude from '@/Claude';
import Cloudflare from '@/Cloudflare';
import Cohere from '@/Cohere';
import CometAPI from '@/CometAPI';
import ComfyUI from '@/ComfyUI';
import Copilot from '@/Copilot';
import Crusoe from '@/Crusoe';
import DeepInfra from '@/DeepInfra';
import DeepMind from '@/DeepMind';
import DeepSeek from '@/DeepSeek';
import Doubao from '@/Doubao';
import Exa from '@/Exa';
import Fal from '@/Fal';
import Featherless from '@/Featherless';
import Fireworks from '@/Fireworks';
import Friendli from '@/Friendli';
import Gemini from '@/Gemini';
import GiteeAI from '@/GiteeAI';
import Github from '@/Github';
import GithubCopilot from '@/GithubCopilot';
import Google from '@/Google';
import GoogleCloud from '@/GoogleCloud';
import Groq from '@/Groq';
import Higress from '@/Higress';
import Huawei from '@/Huawei';
import HuaweiCloud from '@/HuaweiCloud';
import HuggingFace from '@/HuggingFace';
import Hunyuan from '@/Hunyuan';
import Hyperbolic from '@/Hyperbolic';
import IBM from '@/IBM';
import IFlyTekCloud from '@/IFlyTekCloud';
import Inference from '@/Inference';
import Infermatic from '@/Infermatic';
import Infinigence from '@/Infinigence';
import InternLM from '@/InternLM';
import Jina from '@/Jina';
import Kluster from '@/Kluster';
import LG from '@/LG';
import Lambda from '@/Lambda';
import LeptonAI from '@/LeptonAI';
import LlmApi from '@/LlmApi';
import LmStudio from '@/LmStudio';
import LobeHub from '@/LobeHub';
import LongCat from '@/LongCat';
import Menlo from '@/Menlo';
import Meta from '@/Meta';
import Microsoft from '@/Microsoft';
import Minimax from '@/Minimax';
import Mistral from '@/Mistral';
import ModelScope from '@/ModelScope';
import Moonshot from '@/Moonshot';
import NPLCloud from '@/NPLCloud';
import Nebius from '@/Nebius';
import NewAPI from '@/NewAPI';
import NousResearch from '@/NousResearch';
import Novita from '@/Novita';
import Nvidia from '@/Nvidia';
import Ollama from '@/Ollama';
import OpenAI from '@/OpenAI';
import OpenRouter from '@/OpenRouter';
import PPIO from '@/PPIO';
import Parasail from '@/Parasail';
import Perplexity from '@/Perplexity';
import Player2 from '@/Player2';
import Qiniu from '@/Qiniu';
import Qwen from '@/Qwen';
import Replicate from '@/Replicate';
import SambaNova from '@/SambaNova';
import Search1API from '@/Search1API';
import SearchApi from '@/SearchApi';
import SenseNova from '@/SenseNova';
import SiliconCloud from '@/SiliconCloud';
import Snowflake from '@/Snowflake';
import SophNet from '@/SophNet';
import Spark from '@/Spark';
import Stability from '@/Stability';
import StateCloud from '@/StateCloud';
import Stepfun from '@/Stepfun';
import Straico from '@/Straico';
import StreamLake from '@/StreamLake';
import SubModel from '@/SubModel';
import TII from '@/TII';
import Targon from '@/Targon';
import Tencent from '@/Tencent';
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
import XiaomiMiMo from '@/XiaomiMiMo';
import Xinference from '@/Xinference';
import Yandex from '@/Yandex';
import ZenMux from '@/ZenMux';
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
  { Icon: Alibaba, keywords: [ModelProvider.Alibaba] },
  { Icon: AlephAlpha, keywords: [ModelProvider.AlephAlpha] },
  { Icon: AntGroup, keywords: [ModelProvider.AntGroup] },
  { Icon: Anyscale, keywords: [ModelProvider.Anyscale] },
  { Icon: Apple, keywords: [ModelProvider.Apple] },
  { Icon: Baidu, keywords: [ModelProvider.Baidu] },
  { Icon: Bailian, keywords: [ModelProvider.Bailian] },
  { Icon: Baseten, keywords: [ModelProvider.Baseten] },
  { Icon: Bilibili, keywords: [ModelProvider.Bilibili] },
  { Icon: ByteDance, keywords: [ModelProvider.ByteDance] },
  { Icon: CentML, keywords: [ModelProvider.CentML] },
  { Icon: Civitai, keywords: [ModelProvider.Civitai] },
  { Icon: Crusoe, keywords: [ModelProvider.Crusoe] },
  { Icon: DeepInfra, keywords: [ModelProvider.DeepInfra] },
  { Icon: DeepMind, keywords: [ModelProvider.DeepMind] },
  { Icon: Exa, keywords: [ModelProvider.Exa] },
  { Icon: Featherless, keywords: [ModelProvider.Featherless] },
  { Icon: Friendli, keywords: [ModelProvider.Friendli] },
  { Icon: GoogleCloud, keywords: [ModelProvider.GoogleCloud] },
  { Icon: Huawei, keywords: [ModelProvider.Huawei] },
  { Icon: HuaweiCloud, keywords: [ModelProvider.HuaweiCloud] },
  { Icon: Hyperbolic, keywords: [ModelProvider.Hyperbolic] },
  { Icon: IBM, keywords: [ModelProvider.IBM] },
  { Icon: IFlyTekCloud, keywords: [ModelProvider.IFlyTekCloud] },
  { Icon: Inference, keywords: [ModelProvider.Inference] },
  { Icon: Infermatic, keywords: [ModelProvider.Infermatic] },
  { Icon: Kluster, keywords: [ModelProvider.Kluster] },
  { Icon: Lambda, keywords: [ModelProvider.Lambda] },
  { Icon: LeptonAI, keywords: [ModelProvider.LeptonAI] },
  { Icon: LlmApi, keywords: [ModelProvider.LlmApi] },
  { Icon: LG, keywords: [ModelProvider.LG] },
  { Icon: Menlo, keywords: [ModelProvider.Menlo] },
  { Icon: Meta, keywords: [ModelProvider.Meta] },
  { Icon: Microsoft, keywords: [ModelProvider.Microsoft] },
  { Icon: NPLCloud, keywords: [ModelProvider.NPLCloud] },
  { Icon: NousResearch, keywords: [ModelProvider.NousResearch] },
  { Icon: Parasail, keywords: [ModelProvider.Parasail] },
  { Icon: SearchApi, keywords: [ModelProvider.SearchApi] },
  { Icon: Snowflake, keywords: [ModelProvider.Snowflake] },
  { Icon: Stability, keywords: [ModelProvider.Stability] },
  { Icon: StateCloud, keywords: [ModelProvider.StateCloud] },
  { Icon: StreamLake, keywords: [ModelProvider.StreamLake] },
  { Icon: SubModel, keywords: [ModelProvider.SubModel] },
  { Icon: Targon, keywords: [ModelProvider.Targon] },
  { Icon: Tencent, keywords: [ModelProvider.Tencent] },
  { Icon: TII, keywords: [ModelProvider.TII] },
  { Icon: Yandex, keywords: [ModelProvider.Yandex] },

  { Icon: AiMass, keywords: [ModelProvider.AiMass] },
  { Icon: AiStudio, keywords: [ModelProvider.AiStudio] },
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
  {
    Icon: GithubCopilot,
    combineMultiple: 0.95,
    keywords: [ModelProvider.GithubCopilot, 'github-copilot'],
  },
  { Icon: Copilot, combineMultiple: 0.95, keywords: [ModelProvider.Copilot] },
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
  {
    Icon: Vercel,
    combineMultiple: 0.85,
    keywords: [ModelProvider.Vercel, ModelProvider.VercelAIGateway],
  },
  { Icon: Bfl, keywords: [ModelProvider.Bfl] },
  { Icon: Replicate, combineMultiple: 0.9, keywords: [ModelProvider.Replicate] },
  { Icon: Nebius, combineMultiple: 0.75, keywords: [ModelProvider.Nebius] },
  { Icon: NewAPI, combineMultiple: 0.85, keywords: [ModelProvider.NewAPI] },
  { Icon: AkashChat, combineMultiple: 0.8, keywords: [ModelProvider.AkashChat] },
  { Icon: AtlasCloud, combineMultiple: 0.8, keywords: [ModelProvider.AtlasCloud] },
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
  { Icon: XiaomiMiMo, combineMultiple: 0.7, keywords: [ModelProvider.XiaomiMiMo] },
];
