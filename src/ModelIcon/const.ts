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
import Dbrx from '@/Dbrx';
import DeepSeek from '@/DeepSeek';
import Fireworks from '@/Fireworks';
import FishAudio from '@/FishAudio';
import Gemini from '@/Gemini';
import Gemma from '@/Gemma';
import Hunyuan from '@/Hunyuan';
import type { IconAvatarProps } from '@/IconAvatar';
import type { IconCombineProps } from '@/IconCombine';
import InternLM from '@/InternLM';
import LLaVA from '@/LLaVA';
import Meta from '@/Meta';
import Minimax from '@/Minimax';
import Mistral from '@/Mistral';
import Moonshot from '@/Moonshot';
import OpenAI from '@/OpenAI';
import OpenChat from '@/OpenChat';
import OpenRouter from '@/OpenRouter';
import Perplexity from '@/Perplexity';
import Qwen from '@/Qwen';
import Rwkv from '@/Rwkv';
import Spark from '@/Spark';
import Stability from '@/Stability';
import Stepfun from '@/Stepfun';
import Wenxin from '@/Wenxin';
import Yi from '@/Yi';
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
  { Icon: OpenAI, keywords: ['^gpt-', '/gpt-', 'openai', 'dalle', 'text-embedding-'] },
  { Icon: ChatGLM, keywords: ['glm-', 'chatglm'] },
  { Icon: CodeGeeX, keywords: ['^codegeex'] },
  { Icon: DeepSeek, keywords: ['deepseek'] },
  { Icon: Claude, keywords: ['claude'] },
  { Icon: Aws, keywords: ['titan'] },
  { Icon: Fireworks, keywords: ['accounts/fireworks/models/fire'] },
  { Icon: Meta, keywords: ['llama'] },
  { Icon: LLaVA, keywords: ['llava'] },
  { Icon: Gemini, keywords: ['gemini'] },
  { Icon: Gemma, keywords: ['gemma'] },
  { Icon: Moonshot, keywords: ['moonshot'] },
  { Icon: Qwen, keywords: ['qwen'] },
  { Icon: Minimax, keywords: ['minmax', 'abab'] },
  { Icon: Mistral, keywords: ['mistral', 'mixtral', 'codestral', 'mathstral'] },
  { Icon: Perplexity, keywords: ['pplx', 'sonar'] },
  { Icon: Yi, keywords: ['^yi-', '/yi-'] },
  { Icon: OpenRouter, keywords: ['^openrouter'] },
  { Icon: OpenChat, keywords: ['^openchat'] },
  { Icon: Aya, keywords: ['aya'] },
  { Icon: Cohere, keywords: ['command'] },
  { Icon: Dbrx, keywords: ['dbrx'] },
  { Icon: Stepfun, keywords: ['step'] },
  { Icon: AiMass, keywords: ['taichu'] },
  { Icon: Ai360, keywords: ['360gpt'] },
  { Icon: Baichuan, keywords: ['baichuan'] },
  { Icon: Rwkv, keywords: ['rwkv'] },
  { Icon: Wenxin, keywords: ['ernie'] },
  { Icon: Spark, keywords: ['spark', 'general', 'pro-128k', '4.0ultra'] },
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
  { Icon: Azure, keywords: ['wizardlm', 'phi3', 'phi-3'] },
  { Icon: Adobe, keywords: ['firefly'] },
  { Icon: Ai21, keywords: ['jamba', '^j2-'] },
  { Icon: InternLM, keywords: ['internlm'] },
];
