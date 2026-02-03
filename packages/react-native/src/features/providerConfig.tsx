import { FC, memo } from 'react';

import Ai21 from '../icons/Ai21';
import Ai302 from '../icons/Ai302';
import Ai360 from '../icons/Ai360';
import AiHubMix from '../icons/AiHubMix';
import AiMass from '../icons/AiMass';
import AiStudio from '../icons/AiStudio';
import AkashChat from '../icons/AkashChat';
import AlephAlpha from '../icons/AlephAlpha';
import Alibaba from '../icons/Alibaba';
import AlibabaCloud from '../icons/AlibabaCloud';
import AntGroup from '../icons/AntGroup';
import Anthropic from '../icons/Anthropic';
import Anyscale from '../icons/Anyscale';
import Apple from '../icons/Apple';
import AtlasCloud from '../icons/AtlasCloud';
import Aws from '../icons/Aws';
import Azure from '../icons/Azure';
import AzureAI from '../icons/AzureAI';
import Baichuan from '../icons/Baichuan';
import Baidu from '../icons/Baidu';
import BaiduCloud from '../icons/BaiduCloud';
import Bailian from '../icons/Bailian';
import Baseten from '../icons/Baseten';
import Bedrock from '../icons/Bedrock';
import Bfl from '../icons/Bfl';
import Bilibili from '../icons/Bilibili';
import BurnCloud from '../icons/BurnCloud';
import ByteDance from '../icons/ByteDance';
import CentML from '../icons/CentML';
import Cerebras from '../icons/Cerebras';
import Civitai from '../icons/Civitai';
import Claude from '../icons/Claude';
import Cloudflare from '../icons/Cloudflare';
import Cohere from '../icons/Cohere';
import CometAPI from '../icons/CometAPI';
import ComfyUI from '../icons/ComfyUI';
import Copilot from '../icons/Copilot';
import Crusoe from '../icons/Crusoe';
import DeepInfra from '../icons/DeepInfra';
import DeepMind from '../icons/DeepMind';
import DeepSeek from '../icons/DeepSeek';
import Doubao from '../icons/Doubao';
import Exa from '../icons/Exa';
import Fal from '../icons/Fal';
import Featherless from '../icons/Featherless';
import Fireworks from '../icons/Fireworks';
import Friendli from '../icons/Friendli';
import Gemini from '../icons/Gemini';
import GiteeAI from '../icons/GiteeAI';
import Github from '../icons/Github';
import GithubCopilot from '../icons/GithubCopilot';
import Google from '../icons/Google';
import GoogleCloud from '../icons/GoogleCloud';
import Groq from '../icons/Groq';
import Higress from '../icons/Higress';
import Huawei from '../icons/Huawei';
import HuaweiCloud from '../icons/HuaweiCloud';
import HuggingFace from '../icons/HuggingFace';
import Hunyuan from '../icons/Hunyuan';
import Hyperbolic from '../icons/Hyperbolic';
import IBM from '../icons/IBM';
import IFlyTekCloud from '../icons/IFlyTekCloud';
import Inference from '../icons/Inference';
import Infermatic from '../icons/Infermatic';
import Infinigence from '../icons/Infinigence';
import InternLM from '../icons/InternLM';
import Jina from '../icons/Jina';
import Kluster from '../icons/Kluster';
import LG from '../icons/LG';
import Lambda from '../icons/Lambda';
import LeptonAI from '../icons/LeptonAI';
import LmStudio from '../icons/LmStudio';
import LobeHub from '../icons/LobeHub';
import LongCat from '../icons/LongCat';
import Menlo from '../icons/Menlo';
import Meta from '../icons/Meta';
import Microsoft from '../icons/Microsoft';
import Minimax from '../icons/Minimax';
import Mistral from '../icons/Mistral';
import ModelScope from '../icons/ModelScope';
import Moonshot from '../icons/Moonshot';
import NPLCloud from '../icons/NPLCloud';
import Nebius from '../icons/Nebius';
import NewAPI from '../icons/NewAPI';
import NousResearch from '../icons/NousResearch';
import Novita from '../icons/Novita';
import Nvidia from '../icons/Nvidia';
import Ollama from '../icons/Ollama';
import OpenAI from '../icons/OpenAI';
import OpenRouter from '../icons/OpenRouter';
import PPIO from '../icons/PPIO';
import Parasail from '../icons/Parasail';
import Perplexity from '../icons/Perplexity';
import Player2 from '../icons/Player2';
import Qiniu from '../icons/Qiniu';
import Qwen from '../icons/Qwen';
import Replicate from '../icons/Replicate';
import SambaNova from '../icons/SambaNova';
import Search1API from '../icons/Search1API';
import SearchApi from '../icons/SearchApi';
import SenseNova from '../icons/SenseNova';
import SiliconCloud from '../icons/SiliconCloud';
import Snowflake from '../icons/Snowflake';
import SophNet from '../icons/SophNet';
import Spark from '../icons/Spark';
import Stability from '../icons/Stability';
import StateCloud from '../icons/StateCloud';
import Stepfun from '../icons/Stepfun';
import Straico from '../icons/Straico';
import StreamLake from '../icons/StreamLake';
import SubModel from '../icons/SubModel';
import TII from '../icons/TII';
import Targon from '../icons/Targon';
import Tencent from '../icons/Tencent';
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
import XiaomiMiMo from '../icons/XiaomiMiMo';
import Xinference from '../icons/Xinference';
import Yandex from '../icons/Yandex';
import ZenMux from '../icons/ZenMux';
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
  { Icon: Alibaba, keywords: [RNModelProvider.Alibaba] },
  { Icon: AlephAlpha, keywords: [RNModelProvider.AlephAlpha] },
  { Icon: AntGroup, keywords: [RNModelProvider.AntGroup] },
  { Icon: Anyscale, keywords: [RNModelProvider.Anyscale] },
  { Icon: Apple, keywords: [RNModelProvider.Apple] },
  { Icon: Baidu, keywords: [RNModelProvider.Baidu] },
  { Icon: Bailian, keywords: [RNModelProvider.Bailian] },
  { Icon: Baseten, keywords: [RNModelProvider.Baseten] },
  { Icon: Bilibili, keywords: [RNModelProvider.Bilibili] },
  { Icon: ByteDance, keywords: [RNModelProvider.ByteDance] },
  { Icon: CentML, keywords: [RNModelProvider.CentML] },
  { Icon: Civitai, keywords: [RNModelProvider.Civitai] },
  { Icon: Crusoe, keywords: [RNModelProvider.Crusoe] },
  { Icon: DeepInfra, keywords: [RNModelProvider.DeepInfra] },
  { Icon: DeepMind, keywords: [RNModelProvider.DeepMind] },
  { Icon: Exa, keywords: [RNModelProvider.Exa] },
  { Icon: Featherless, keywords: [RNModelProvider.Featherless] },
  { Icon: Friendli, keywords: [RNModelProvider.Friendli] },
  { Icon: GoogleCloud, keywords: [RNModelProvider.GoogleCloud] },
  { Icon: Huawei, keywords: [RNModelProvider.Huawei] },
  { Icon: HuaweiCloud, keywords: [RNModelProvider.HuaweiCloud] },
  { Icon: Hyperbolic, keywords: [RNModelProvider.Hyperbolic] },
  { Icon: IBM, keywords: [RNModelProvider.IBM] },
  { Icon: IFlyTekCloud, keywords: [RNModelProvider.IFlyTekCloud] },
  { Icon: Inference, keywords: [RNModelProvider.Inference] },
  { Icon: Infermatic, keywords: [RNModelProvider.Infermatic] },
  { Icon: Kluster, keywords: [RNModelProvider.Kluster] },
  { Icon: Lambda, keywords: [RNModelProvider.Lambda] },
  { Icon: LeptonAI, keywords: [RNModelProvider.LeptonAI] },
  { Icon: LG, keywords: [RNModelProvider.LG] },
  { Icon: Menlo, keywords: [RNModelProvider.Menlo] },
  { Icon: Meta, keywords: [RNModelProvider.Meta] },
  { Icon: Microsoft, keywords: [RNModelProvider.Microsoft] },
  { Icon: NPLCloud, keywords: [RNModelProvider.NPLCloud] },
  { Icon: NousResearch, keywords: [RNModelProvider.NousResearch] },
  { Icon: Parasail, keywords: [RNModelProvider.Parasail] },
  { Icon: SearchApi, keywords: [RNModelProvider.SearchApi] },
  { Icon: Snowflake, keywords: [RNModelProvider.Snowflake] },
  { Icon: Stability, keywords: [RNModelProvider.Stability] },
  { Icon: StateCloud, keywords: [RNModelProvider.StateCloud] },
  { Icon: StreamLake, keywords: [RNModelProvider.StreamLake] },
  { Icon: SubModel, keywords: [RNModelProvider.SubModel] },
  { Icon: Targon, keywords: [RNModelProvider.Targon] },
  { Icon: Tencent, keywords: [RNModelProvider.Tencent] },
  { Icon: TII, keywords: [RNModelProvider.TII] },
  { Icon: Yandex, keywords: [RNModelProvider.Yandex] },

  { Icon: AiMass, keywords: [RNModelProvider.AiMass] },
  { Icon: AiStudio, keywords: [RNModelProvider.AiStudio] },
  { Icon: LobeHub, combineMultiple: 1.1, keywords: [RNModelProvider.LobeHub] },
  { Icon: Zhipu, combineMultiple: 1.25, keywords: [RNModelProvider.ZhiPu] },
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
    keywords: [RNModelProvider.Bedrock],
  },
  { Icon: DeepSeek, combineMultiple: 1.16, keywords: [RNModelProvider.DeepSeek] },
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
    keywords: [RNModelProvider.Google],
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
        left={<Anthropic.Text size={size * 0.75} />}
        right={<Claude.Combine size={size} type={type} />}
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
        left={<AlibabaCloud.Combine size={size} type={type} />}
        right={<Qwen.Combine size={size * 0.9} type={type} />}
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
  {
    Icon: GithubCopilot,
    combineMultiple: 0.95,
    keywords: [RNModelProvider.GithubCopilot, 'github-copilot'],
  },
  { Icon: Copilot, combineMultiple: 0.95, keywords: [RNModelProvider.Copilot] },
  { Icon: Doubao, keywords: [RNModelProvider.Doubao] },
  { Icon: Hunyuan, keywords: [RNModelProvider.Hunyuan] },
  { Icon: Nvidia, keywords: [RNModelProvider.Nvidia] },
  { Icon: TencentCloud, keywords: [RNModelProvider.TencentCloud] },
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
    keywords: [RNModelProvider.Wenxin],
  },
  { Icon: SenseNova, combineMultiple: 0.95, keywords: [RNModelProvider.SenseNova] },
  { Icon: HuggingFace, combineMultiple: 1.16, keywords: [RNModelProvider.HuggingFace] },
  { Icon: LmStudio, keywords: [RNModelProvider.LmStudio] },
  { Icon: XAI, combineMultiple: 0.85, keywords: [RNModelProvider.XAI] },
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
  { Icon: ComfyUI, keywords: [RNModelProvider.ComfyUI] },
  { Icon: Search1API, combineMultiple: 0.9, keywords: [RNModelProvider.Search1API] },
  { Icon: Infinigence, combineMultiple: 0.8, keywords: [RNModelProvider.InfiniAI] },
  { Icon: Xinference, combineMultiple: 0.85, keywords: [RNModelProvider.Xinference] },
  { Icon: Fal, combineMultiple: 0.8, keywords: [RNModelProvider.Fal] },
  { Icon: Ai302, combineMultiple: 0.9, keywords: [RNModelProvider.Ai302] },
  { Icon: AiHubMix, combineMultiple: 0.9, keywords: [RNModelProvider.AiHubMix] },
  { Icon: CometAPI, keywords: [RNModelProvider.CometAPI] },
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
    keywords: [RNModelProvider.V0],
  },
  {
    Icon: Vercel,
    combineMultiple: 0.85,
    keywords: [RNModelProvider.Vercel, RNModelProvider.VercelAIGateway],
  },
  { Icon: Bfl, keywords: [RNModelProvider.Bfl] },
  { Icon: Replicate, combineMultiple: 0.9, keywords: [RNModelProvider.Replicate] },
  { Icon: Nebius, combineMultiple: 0.75, keywords: [RNModelProvider.Nebius] },
  { Icon: NewAPI, combineMultiple: 0.85, keywords: [RNModelProvider.NewAPI] },
  { Icon: AkashChat, combineMultiple: 0.8, keywords: [RNModelProvider.AkashChat] },
  { Icon: AtlasCloud, combineMultiple: 0.8, keywords: [RNModelProvider.AtlasCloud] },
  { Icon: SophNet, combineMultiple: 0.85, keywords: [RNModelProvider.SophNet] },
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
    keywords: [RNModelProvider.OllamaCloud],
  },
  { Icon: LongCat, combineMultiple: 1, keywords: [RNModelProvider.LongCat] },
  { Icon: Cerebras, combineMultiple: 1, keywords: [RNModelProvider.Cerebras] },
  { Icon: Straico, combineMultiple: 0.85, keywords: [RNModelProvider.Straico] },
  {
    Icon: ZenMux,
    combineMultiple: 1,
    keywords: [RNModelProvider.ZenMux],
    props: { inverse: true },
  },
  { Icon: XiaomiMiMo, combineMultiple: 0.7, keywords: [RNModelProvider.XiaomiMiMo] },
];
