import { FC } from 'react';

import Adobe from '@/Adobe';
import Ai21 from '@/Ai21';
import Ai360 from '@/Ai360';
import AiHubMix from '@/AiHubMix';
import AiMass from '@/AiMass';
import AionLabs from '@/AionLabs';
import Anthropic from '@/Anthropic';
import AssemblyAI from '@/AssemblyAI';
import Aws from '@/Aws';
import Aya from '@/Aya';
import Baichuan from '@/Baichuan';
import BaiduCloud from '@/BaiduCloud';
import Bilibili from '@/Bilibili';
import BilibiliIndex from '@/BilibiliIndex';
import BurnCloud from '@/BurnCloud';
import ByteDance from '@/ByteDance';
import ChatGLM from '@/ChatGLM';
import Claude from '@/Claude';
import CodeGeeX from '@/CodeGeeX';
import CogView from '@/CogView';
import Cohere from '@/Cohere';
import Dalle from '@/Dalle';
import Dbrx from '@/Dbrx';
import DeepMind from '@/DeepMind';
import DeepSeek from '@/DeepSeek';
import Dolphin from '@/Dolphin';
import Doubao from '@/Doubao';
import Fireworks from '@/Fireworks';
import FishAudio from '@/FishAudio';
import Flux from '@/Flux';
import GLMV from '@/GLMV';
import Gemini from '@/Gemini';
import Gemma from '@/Gemma';
import Google from '@/Google';
import Grok from '@/Grok';
import Hunyuan from '@/Hunyuan';
import IBM from '@/IBM';
import Ideogram from '@/Ideogram';
import Inflection from '@/Inflection';
import InternLM from '@/InternLM';
import Jina from '@/Jina';
import Kolors from '@/Kolors';
import { Kwaipilot } from '@/icons';
import LG from '@/LG';
import LLaVA from '@/LLaVA';
import Liquid from '@/Liquid';
import LongCat from '@/LongCat';
import Menlo from '@/Menlo';
import Meta from '@/Meta';
import Microsoft from '@/Microsoft';
import Minimax from '@/Minimax';
import Mistral from '@/Mistral';
import Moonshot from '@/Moonshot';
import NousResearch from '@/NousResearch';
import Nvidia from '@/Nvidia';
import OpenAI from '@/OpenAI';
import OpenChat from '@/OpenChat';
import OpenRouter from '@/OpenRouter';
import PaLM from '@/PaLM';
import Perplexity from '@/Perplexity';
import Phind from '@/Phind';
import Qiniu from '@/Qiniu';
import Qwen from '@/Qwen';
import Rwkv from '@/Rwkv';
import SenseNova from '@/SenseNova';
import Skywork from '@/Skywork';
import Spark from '@/Spark';
import Stability from '@/Stability';
import Stepfun from '@/Stepfun';
import Suno from '@/Suno';
import TII from '@/TII';
import Udio from '@/Udio';
import Upstage from '@/Upstage';
import V0 from '@/V0';
import VertexAI from '@/VertexAI';
import Voyage from '@/Voyage';
import Wenxin from '@/Wenxin';
import Yi from '@/Yi';
import ZAI from '@/ZAI';
import type { IconAvatarProps } from '@/features/IconAvatar';
import type { IconCombineProps } from '@/features/IconCombine';
import type { IconType } from '@/types';

type ModelIconType = FC<IconType & any> & {
  Avatar: FC<Omit<IconAvatarProps, 'Icon'> & any>;
  Brand?: FC<IconType & any>;
  BrandColor?: FC<IconType & any>;
  Color?: FC<IconType & any>;
  Combine?: FC<Omit<IconCombineProps, 'Icon' | 'Text'> & any>;
  Text?: FC<IconType & any>;
};

// Define a type for our model mapping
export interface ModelMapping {
  Icon: ModelIconType;
  keywords: string[];
  props?: any;
}

// Create a mapping of model keywords to their respective Icon functions
export const modelMappings: ModelMapping[] = [
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
  { Icon: Qwen, keywords: ['qwen', 'qwq', 'qvq', 'wanx', 'wan\\d/', 'wan\\d\\.\\d-', 'tongyi'] },
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
  { Icon: ByteDance, keywords: ['skylark', 'seed-', 'bytedance'] },
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
  { Icon: Microsoft, keywords: ['wizardlm', '/phi-', '^phi-', '-phi-', 'mai-', 'microsoft'] },
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
  { Icon: LongCat, keywords: ['longcat'] },
  { Icon: Kwaipilot, keywords: ['kat-'] },
];
