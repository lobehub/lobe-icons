import { FC } from 'react';

import Adobe from '@/Adobe';
import Ai21 from '@/Ai21';
import Ai360 from '@/Ai360';
import AiMass from '@/AiMass';
import Aws from '@/Aws';
import Aya from '@/Aya';
import Azure from '@/Azure';
import Baichuan from '@/Baichuan';
import ByteDance from '@/ByteDance';
import ChatGLM from '@/ChatGLM';
import Claude from '@/Claude';
import CodeGeeX from '@/CodeGeeX';
import Cohere from '@/Cohere';
import Dalle from '@/Dalle';
import Dbrx from '@/Dbrx';
import DeepSeek from '@/DeepSeek';
import Doubao from '@/Doubao';
import Fireworks from '@/Fireworks';
import FishAudio from '@/FishAudio';
import Flux from '@/Flux';
import Gemini from '@/Gemini';
import Gemma from '@/Gemma';
import Google from '@/Google';
import Grok from '@/Grok';
import Hunyuan from '@/Hunyuan';
import Ideogram from '@/Ideogram';
import InternLM from '@/InternLM';
import LLaVA from '@/LLaVA';
import Meta from '@/Meta';
import Minimax from '@/Minimax';
import Mistral from '@/Mistral';
import Moonshot from '@/Moonshot';
import OpenAI from '@/OpenAI';
import OpenChat from '@/OpenChat';
import OpenRouter from '@/OpenRouter';
import PaLM from '@/PaLM';
import Perplexity from '@/Perplexity';
import Qwen from '@/Qwen';
import Rwkv from '@/Rwkv';
import SenseNova from '@/SenseNova';
import Spark from '@/Spark';
import Stability from '@/Stability';
import Stepfun from '@/Stepfun';
import Suno from '@/Suno';
import Udio from '@/Udio';
import Upstage from '@/Upstage';
import Wenxin from '@/Wenxin';
import Yi from '@/Yi';
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
  { Icon: OpenAI, keywords: ['o1-', '^o1', '/o1', 'o3-', '^o3', '/o3'], props: { type: 'o1' } },
  { Icon: Dalle, keywords: ['dalle', 'dall-e'] },
  { Icon: OpenAI, keywords: ['^gpt-', '/gpt-', 'openai', 'text-embedding-', 'tts-', 'whisper-'] },
  { Icon: ChatGLM, keywords: ['glm-', 'chatglm'] },
  { Icon: CodeGeeX, keywords: ['^codegeex'] },
  { Icon: DeepSeek, keywords: ['deepseek'] },
  { Icon: Claude, keywords: ['claude'] },
  { Icon: Aws, keywords: ['titan'] },
  { Icon: Fireworks, keywords: ['accounts/fireworks/models/fire'] },
  { Icon: InternLM, keywords: ['internlm', 'internvl'] },
  { Icon: Meta, keywords: ['llama', '/l3'] },
  { Icon: LLaVA, keywords: ['llava'] },
  { Icon: Gemini, keywords: ['gemini'] },
  { Icon: Gemma, keywords: ['gemma'] },
  { Icon: Moonshot, keywords: ['moonshot'] },
  { Icon: Qwen, keywords: ['qwen', 'qwq', 'qvq'] },
  { Icon: Minimax, keywords: ['minimax', 'abab'] },
  {
    Icon: Mistral,
    keywords: ['mistral', 'mixtral', 'codestral', 'mathstral', '/mn-', 'pixtral', 'ministral'],
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
  { Icon: Wenxin, keywords: ['ernie'] },
  { Icon: Doubao, keywords: ['^ep-', 'doubao-'] },
  { Icon: Hunyuan, keywords: ['hunyuan'] },
  { Icon: FishAudio, keywords: ['^d_', '^g_', '^wd_'] },
  { Icon: ByteDance, keywords: ['skylark'] },
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
  { Icon: Azure, keywords: ['wizardlm', 'phi3', 'phi-3', 'phi-2'] },
  { Icon: Adobe, keywords: ['firefly'] },
  { Icon: Ai21, keywords: ['jamba', '^j2-', 'ai21'] },
  { Icon: Upstage, keywords: ['^solar-', '/solar'] },
  { Icon: PaLM, keywords: ['palm'] },
  { Icon: Google, keywords: ['google'] },
  { Icon: SenseNova, keywords: ['SenseChat'] },
  { Icon: Grok, keywords: ['^grok-'] },
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
    ],
  },
  { Icon: Udio, keywords: ['udio'] },
];
