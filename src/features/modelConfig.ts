import { FC } from 'react';

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

// Define a type for our model mapping with dynamic import
export interface ModelMapping {
  iconImport: () => Promise<{ default: ModelIconType }>;
  keywords: string[];
  props?: any;
}

// Create a mapping of model keywords to their respective Icon import functions
export const modelMappings: ModelMapping[] = [
  { iconImport: () => import('@/OpenAI'), keywords: ['gpt-3'], props: { type: 'gpt3' } },
  { iconImport: () => import('@/OpenAI'), keywords: ['gpt-4'], props: { type: 'gpt4' } },
  {
    iconImport: () => import('@/OpenAI'),
    keywords: ['o1-', '^o1', '/o1', 'o3-', '^o3', '/o3', 'o4-', '^o4', '/o4'],
    props: { type: 'o1' },
  },
  { iconImport: () => import('@/Dalle'), keywords: ['dalle', 'dall-e'] },
  {
    iconImport: () => import('@/OpenAI'),
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
    iconImport: () => import('@/OpenAI'),
    keywords: ['^gpt-', '/gpt-', 'openai'],
  },
  { iconImport: () => import('@/GLMV'), keywords: ['^glm-(.*)v', '/glm-(.*)v'] },
  { iconImport: () => import('@/ZAI'), keywords: ['^glm-4', '/glm-4'] },
  { iconImport: () => import('@/ChatGLM'), keywords: ['^glm-', '/glm-', 'chatglm'] },
  { iconImport: () => import('@/CodeGeeX'), keywords: ['^codegeex', '/codegeex'] },
  { iconImport: () => import('@/Claude'), keywords: ['claude'] },
  { iconImport: () => import('@/Anthropic'), keywords: ['anthropic'] },
  { iconImport: () => import('@/Aws'), keywords: ['titan'] },
  { iconImport: () => import('@/Fireworks'), keywords: ['accounts/fireworks/models/fire'] },
  { iconImport: () => import('@/InternLM'), keywords: ['internlm', 'internvl'] },
  { iconImport: () => import('@/Meta'), keywords: ['llama', '/l3'] },
  { iconImport: () => import('@/LLaVA'), keywords: ['llava'] },
  { iconImport: () => import('@/Gemini'), keywords: ['gemini'] },
  { iconImport: () => import('@/DeepMind'), keywords: ['^imagen-', '/imagen-', '^imagen\\d/'] },
  { iconImport: () => import('@/Gemma'), keywords: ['gemma'] },
  { iconImport: () => import('@/Moonshot'), keywords: ['kimi', 'moonshot'] },
  { iconImport: () => import('@/Qiniu'), keywords: ['qiniu'] },
  { iconImport: () => import('@/Qwen'), keywords: ['qwen', 'qwq', 'qvq', 'wanx', 'wan\\d/'] },
  { iconImport: () => import('@/Minimax'), keywords: ['minimax', 'abab', '^image-'] },
  {
    iconImport: () => import('@/Mistral'),
    keywords: ['mistral', 'mixtral', 'codestral', 'mathstral', '/mn-', 'pixtral', 'ministral'],
  },
  { iconImport: () => import('@/Perplexity'), keywords: ['pplx', 'sonar'] },
  { iconImport: () => import('@/Yi'), keywords: ['^yi-', '/yi-', '-yi-'] },
  { iconImport: () => import('@/OpenRouter'), keywords: ['^openrouter'] },
  { iconImport: () => import('@/OpenChat'), keywords: ['^openchat'] },
  { iconImport: () => import('@/Aya'), keywords: ['aya'] },
  { iconImport: () => import('@/Cohere'), keywords: ['command'] },
  { iconImport: () => import('@/Dbrx'), keywords: ['dbrx'] },
  { iconImport: () => import('@/Stepfun'), keywords: ['step'] },
  { iconImport: () => import('@/AiMass'), keywords: ['taichu'] },
  { iconImport: () => import('@/Ai360'), keywords: ['360gpt', '360zhinao'] },
  { iconImport: () => import('@/Baichuan'), keywords: ['baichuan'] },
  { iconImport: () => import('@/Rwkv'), keywords: ['rwkv', '/eagle-'] },
  { iconImport: () => import('@/Wenxin'), keywords: ['ernie', 'irag'] },
  { iconImport: () => import('@/Jina'), keywords: ['^jina', '/jina'] },
  { iconImport: () => import('@/Doubao'), keywords: ['^ep-', 'doubao-'] },
  { iconImport: () => import('@/Hunyuan'), keywords: ['hunyuan'] },
  { iconImport: () => import('@/FishAudio'), keywords: ['^d_', '^g_', '^wd_'] },
  { iconImport: () => import('@/ByteDance'), keywords: ['skylark'] },
  { iconImport: () => import('@/BurnCloud'), keywords: ['burncloud'] },
  {
    iconImport: () => import('@/Stability'),
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
  { iconImport: () => import('@/Flux'), keywords: ['flux'] },
  { iconImport: () => import('@/Suno'), keywords: ['suno'] },
  { iconImport: () => import('@/Microsoft'), keywords: ['wizardlm', '/phi-', '^phi-', '-phi-'] },
  { iconImport: () => import('@/Adobe'), keywords: ['firefly'] },
  { iconImport: () => import('@/Ai21'), keywords: ['jamba', '^j2-', 'ai21'] },
  { iconImport: () => import('@/Upstage'), keywords: ['^solar-', '/solar'] },
  { iconImport: () => import('@/PaLM'), keywords: ['palm'] },
  { iconImport: () => import('@/SenseNova'), keywords: ['SenseChat', 'SenseNova'] },
  { iconImport: () => import('@/Grok'), keywords: ['^grok-', '/grok-'] },
  { iconImport: () => import('@/Ideogram'), keywords: ['ideogram'] },
  {
    iconImport: () => import('@/Spark'),
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
  { iconImport: () => import('@/Udio'), keywords: ['udio'] },
  { iconImport: () => import('@/DeepSeek'), keywords: ['deepseek'] },
  { iconImport: () => import('@/Voyage'), keywords: ['voyage'] },
  { iconImport: () => import('@/AssemblyAI'), keywords: ['assemblyai'] },
  { iconImport: () => import('@/Liquid'), keywords: ['liquid', 'lfm'] },
  { iconImport: () => import('@/Inflection'), keywords: ['inflection-'] },
  { iconImport: () => import('@/AionLabs'), keywords: ['aion-'] },
  { iconImport: () => import('@/AiHubMix'), keywords: ['aihubmix'] },
  { iconImport: () => import('@/V0'), keywords: ['^v0-'] },
  { iconImport: () => import('@/VertexAI'), keywords: ['^veo-', '/veo-'] },
  { iconImport: () => import('@/Google'), keywords: ['google', 'learnlm'] },
  { iconImport: () => import('@/CogView'), keywords: ['cogview'] },
  { iconImport: () => import('@/Kolors'), keywords: ['kolors'] },
  { iconImport: () => import('@/BaiduCloud'), keywords: ['baidu', 'qianfan'] },
];
