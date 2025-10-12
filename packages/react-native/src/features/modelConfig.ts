import { FC } from 'react';

import Adobe from '../icons/Adobe';
import Ai21 from '../icons/Ai21';
import Ai360 from '../icons/Ai360';
import AiHubMix from '../icons/AiHubMix';
import AiMass from '../icons/AiMass';
import AionLabs from '../icons/AionLabs';
import Anthropic from '../icons/Anthropic';
import AssemblyAI from '../icons/AssemblyAI';
import Aws from '../icons/Aws';
import Aya from '../icons/Aya';
import Baichuan from '../icons/Baichuan';
import BaiduCloud from '../icons/BaiduCloud';
import Bilibili from '../icons/Bilibili';
import BilibiliIndex from '../icons/BilibiliIndex';
import BurnCloud from '../icons/BurnCloud';
import ByteDance from '../icons/ByteDance';
import ChatGLM from '../icons/ChatGLM';
import Claude from '../icons/Claude';
import CodeGeeX from '../icons/CodeGeeX';
import CogView from '../icons/CogView';
import Cohere from '../icons/Cohere';
import Dalle from '../icons/Dalle';
import Dbrx from '../icons/Dbrx';
import DeepMind from '../icons/DeepMind';
import DeepSeek from '../icons/DeepSeek';
import Dolphin from '../icons/Dolphin';
import Doubao from '../icons/Doubao';
import Fireworks from '../icons/Fireworks';
import FishAudio from '../icons/FishAudio';
import Flux from '../icons/Flux';
import GLMV from '../icons/GLMV';
import Gemini from '../icons/Gemini';
import Gemma from '../icons/Gemma';
import Google from '../icons/Google';
import Grok from '../icons/Grok';
import Hunyuan from '../icons/Hunyuan';
import IBM from '../icons/IBM';
import Ideogram from '../icons/Ideogram';
import Inflection from '../icons/Inflection';
import InternLM from '../icons/InternLM';
import Jina from '../icons/Jina';
import Kolors from '../icons/Kolors';
import LG from '../icons/LG';
import LLaVA from '../icons/LLaVA';
import Liquid from '../icons/Liquid';
import Menlo from '../icons/Menlo';
import Meta from '../icons/Meta';
import Microsoft from '../icons/Microsoft';
import Minimax from '../icons/Minimax';
import Mistral from '../icons/Mistral';
import Moonshot from '../icons/Moonshot';
import NousResearch from '../icons/NousResearch';
import Nvidia from '../icons/Nvidia';
// Import React Native icon components
import OpenAI from '../icons/OpenAI';
import OpenChat from '../icons/OpenChat';
import OpenRouter from '../icons/OpenRouter';
import PaLM from '../icons/PaLM';
import Perplexity from '../icons/Perplexity';
import Phind from '../icons/Phind';
import Qiniu from '../icons/Qiniu';
import Qwen from '../icons/Qwen';
import Rwkv from '../icons/Rwkv';
import SenseNova from '../icons/SenseNova';
import Skywork from '../icons/Skywork';
import Spark from '../icons/Spark';
import Stability from '../icons/Stability';
import Stepfun from '../icons/Stepfun';
import Suno from '../icons/Suno';
import TII from '../icons/TII';
import Udio from '../icons/Udio';
import Upstage from '../icons/Upstage';
import V0 from '../icons/V0';
import VertexAI from '../icons/VertexAI';
import Voyage from '../icons/Voyage';
import Wenxin from '../icons/Wenxin';
import Yi from '../icons/Yi';
import ZAI from '../icons/ZAI';
import type { RNIconAvatarProps, RNIconCombineProps, RNIconProps } from './types';

type RNModelIconType = FC<RNIconProps & any> & {
  Avatar: FC<Omit<RNIconAvatarProps, 'Icon'> & any>;
  Brand?: FC<RNIconProps & any>;
  BrandColor?: FC<RNIconProps & any>;
  Color?: FC<RNIconProps & any>;
  Combine?: FC<Omit<RNIconCombineProps, 'Icon' | 'Text'> & any>;
  Text?: FC<RNIconProps & any>;
};

// Define a type for our model mapping
export interface RNModelMapping {
  Icon: RNModelIconType;
  keywords: string[];
  props?: any;
}

// Create a mapping of model keywords to their respective Icon functions
export const rnModelMappings: RNModelMapping[] = [
  { Icon: OpenAI, keywords: ['gpt-3'], props: { type: 'gpt3' } },
  { Icon: OpenAI, keywords: ['gpt-4'], props: { type: 'gpt4' } },
  { Icon: OpenAI, keywords: ['gpt-5'], props: { type: 'gpt5' } },
  { Icon: OpenAI, keywords: ['gpt-oss'], props: { type: 'oss' } },
  {
    Icon: OpenAI,
    keywords: ['o1-', '^o1', '/o1', 'o3-', '^o3', '/o3', 'o4-', '^o4', '/o4'],
    props: { type: 'o1' },
  },
  { Icon: Dalle, keywords: ['dalle', 'dall-e'] },
  {
    Icon: OpenAI,
    keywords: [
      'text-embedding-',
      'tts-',
      'whisper-',
      'codex',
      'davinci',
      'babbage',
      'omni-moderation',
      'text-moderation',
      'text-adb',
      'text-ada',
      'computer-use',
    ],
    props: { type: 'platform' },
  },
  {
    Icon: OpenAI,
    keywords: ['^gpt-', '/gpt-', 'openai'],
  },
  { Icon: GLMV, keywords: ['^glm-(.*)v', '/glm-(.*)v'] },
  { Icon: ZAI, keywords: ['^glm-4', '/glm-4'] },
  { Icon: ChatGLM, keywords: ['^glm-', '/glm-', 'chatglm'] },
  { Icon: CodeGeeX, keywords: ['^codegeex', '/codegeex'] },
  { Icon: Claude, keywords: ['claude'] },
  { Icon: Anthropic, keywords: ['anthropic'] },
  { Icon: Aws, keywords: ['titan'] },
  { Icon: Fireworks, keywords: ['accounts/fireworks/models/fire'] },
  { Icon: InternLM, keywords: ['internlm', 'internvl'] },
  { Icon: NousResearch, keywords: ['deephermes', 'hermes', 'genstruct', 'minos'] },
  { Icon: Nvidia, keywords: ['nemotron', 'openreasoning'] },
  { Icon: Meta, keywords: ['llama', '/l3'] },
  { Icon: LLaVA, keywords: ['llava'] },
  { Icon: Gemini, keywords: ['gemini'] },
  { Icon: DeepMind, keywords: ['^imagen-', '/imagen-', '^imagen\\d/', '/imagen\\d'] },
  { Icon: Gemma, keywords: ['gemma'] },
  { Icon: Moonshot, keywords: ['kimi', 'moonshot'] },
  { Icon: Qiniu, keywords: ['qiniu'] },
  { Icon: Qwen, keywords: ['qwen', 'qwq', 'qvq', 'wanx', 'wan\\d/', 'wan\\d\\.\\d-'] },
  { Icon: Minimax, keywords: ['minimax', 'abab', '^image-'] },
  {
    Icon: Mistral,
    keywords: [
      'mistral',
      'mixtral',
      'codestral',
      'mathstral',
      '/mn-',
      'pixtral',
      'ministral',
      'magistral',
      'devstral',
      'voxtral',
    ],
  },
  { Icon: Perplexity, keywords: ['pplx', 'sonar'] },
  { Icon: Yi, keywords: ['^yi-', '/yi-', '-yi-'] },
  { Icon: OpenRouter, keywords: ['^openrouter'] },
  { Icon: OpenChat, keywords: ['^openchat'] },
  { Icon: Aya, keywords: ['aya'] },
  { Icon: Cohere, keywords: ['command'] },
  { Icon: Dbrx, keywords: ['dbrx'] },
  { Icon: Stepfun, keywords: ['step'] },
  { Icon: AiMass, keywords: ['taichu'] },
  { Icon: Ai360, keywords: ['360gpt', '360zhinao'] },
  { Icon: Baichuan, keywords: ['baichuan'] },
  { Icon: Rwkv, keywords: ['rwkv', '/eagle-'] },
  { Icon: Wenxin, keywords: ['ernie', 'irag'] },
  { Icon: Jina, keywords: ['^jina', '/jina'] },
  { Icon: Doubao, keywords: ['^ep-', 'doubao-', 'seedream', 'seededit'] },
  { Icon: Hunyuan, keywords: ['hunyuan'] },
  { Icon: FishAudio, keywords: ['^d_', '^g_', '^wd_'] },
  { Icon: ByteDance, keywords: ['skylark'] },
  { Icon: BurnCloud, keywords: ['burncloud'] },
  {
    Icon: Stability,
    keywords: [
      'stable-diffusion',
      'stable-video',
      'stable-cascade',
      'sdxl',
      'stablelm',
      '^stable-',
      '^sd3',
      '^sd2',
      '^sd1',
    ],
  },
  { Icon: Flux, keywords: ['flux'] },
  { Icon: Suno, keywords: ['suno'] },
  { Icon: Microsoft, keywords: ['wizardlm', '/phi-', '^phi-', '-phi-'] },
  { Icon: Adobe, keywords: ['firefly'] },
  { Icon: Ai21, keywords: ['jamba', '^j2-', 'ai21'] },
  { Icon: Upstage, keywords: ['^solar-', '/solar'] },
  { Icon: PaLM, keywords: ['palm'] },
  { Icon: SenseNova, keywords: ['SenseChat', 'SenseNova'] },
  { Icon: Grok, keywords: ['^grok-', '/grok-'] },
  { Icon: Ideogram, keywords: ['ideogram'] },
  {
    Icon: Spark,
    keywords: [
      'spark',
      'general$',
      'generalv3$',
      'generalv3.5$',
      '4.0ultra$',
      'pro-128k$',
      '^max-32k$',
      '^lite$',
      '^x1$',
    ],
  },
  { Icon: Udio, keywords: ['udio'] },
  { Icon: DeepSeek, keywords: ['deepseek'] },
  { Icon: Voyage, keywords: ['voyage'] },
  { Icon: AssemblyAI, keywords: ['assemblyai'] },
  { Icon: Liquid, keywords: ['liquid', 'lfm'] },
  { Icon: Inflection, keywords: ['inflection-'] },
  { Icon: AionLabs, keywords: ['aion-'] },
  { Icon: AiHubMix, keywords: ['aihubmix'] },
  { Icon: V0, keywords: ['^v0-'] },
  { Icon: VertexAI, keywords: ['^veo-', '/veo-'] },
  { Icon: Google, keywords: ['google', 'learnlm', 'nano-banana'] },
  { Icon: CogView, keywords: ['cogview'] },
  { Icon: Kolors, keywords: ['kolors'] },
  { Icon: BaiduCloud, keywords: ['baidu', 'qianfan'] },
  { Icon: Phind, keywords: ['phind'] },
  { Icon: Dolphin, keywords: ['dolphin'] },
  { Icon: IBM, keywords: ['ibm', 'granite'] },
  { Icon: Skywork, keywords: ['skywork'] },
  { Icon: BilibiliIndex, keywords: ['bilibili-index'] },
  { Icon: Bilibili, keywords: ['bilibili'] },
  { Icon: LG, keywords: ['kmmlu', 'exaone', 'lgai'] },
  { Icon: TII, keywords: ['falcon'] },
  { Icon: Menlo, keywords: ['menlo', 'lucy', 'jan-nano'] },
];
