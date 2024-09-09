import { FC } from 'react';

import Ai21 from '@/Ai21';
import Ai360 from '@/Ai360';
import AiMass from '@/AiMass';
import Anthropic from '@/Anthropic';
import Azure from '@/Azure';
import Baichuan from '@/Baichuan';
import Bedrock from '@/Bedrock';
import DeepSeek from '@/DeepSeek';
import Fireworks from '@/Fireworks';
import Google from '@/Google';
import Groq from '@/Groq';
import type { IconAvatarProps } from '@/IconAvatar';
import type { IconCombineProps } from '@/IconCombine';
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
import SiliconCloud from '@/SiliconCloud';
import Spark from '@/Spark';
import Stepfun from '@/Stepfun';
import Together from '@/Together';
import Upstage from '@/Upstage';
import ZeroOne from '@/ZeroOne';
import Zhipu from '@/Zhipu';
import type { IconType } from '@/types';

type ProviderIconType = FC<IconType & any> & {
  Avatar: FC<Omit<IconAvatarProps, 'Icon'> & any>;
  Brand?: FC<IconType & any>;
  BrandColor?: FC<IconType & any>;
  Color?: FC<IconType & any>;
  Combine?: FC<Omit<IconCombineProps, 'Icon' | 'Text'> & any>;
  Text?: FC<IconType & any>;
};

export interface ProviderMapping {
  Icon: ProviderIconType;
  keywords: string[];
  props?: any;
}

export enum ModelProvider {
  Ai21 = 'ai21',
  Ai360 = 'ai360',
  Anthropic = 'anthropic',
  Azure = 'azure',
  Baichuan = 'baichuan',
  Bedrock = 'bedrock',
  DeepSeek = 'deepseek',
  FireworksAI = 'fireworksai',
  Google = 'google',
  Groq = 'groq',
  LobeHub = 'lobehub',
  Minimax = 'minimax',
  Mistral = 'mistral',
  Moonshot = 'moonshot',
  Novita = 'novita',
  Ollama = 'ollama',
  OpenAI = 'openai',
  OpenRouter = 'openrouter',
  Perplexity = 'perplexity',
  Qwen = 'qwen',
  SiliconCloud = 'siliconcloud',
  Spark = 'spark',
  Stepfun = 'stepfun',
  Taichu = 'taichu',
  TogetherAI = 'togetherai',
  Upstage = 'upstage',
  ZeroOne = 'zeroone',
  ZhiPu = 'zhipu',
}

export type ModelProviderKey = Lowercase<keyof typeof ModelProvider>;

export const providerMappings: ProviderMapping[] = [
  { Icon: LobeHub, keywords: [ModelProvider.LobeHub] },
  { Icon: Zhipu, keywords: [ModelProvider.ZhiPu] },
  { Icon: Bedrock, keywords: [ModelProvider.Bedrock] },
  { Icon: DeepSeek, keywords: [ModelProvider.DeepSeek] },
  { Icon: Google, keywords: [ModelProvider.Google] },
  { Icon: Azure, keywords: [ModelProvider.Azure] },
  { Icon: Moonshot, keywords: [ModelProvider.Moonshot] },
  { Icon: Novita, keywords: [ModelProvider.Novita] },
  { Icon: OpenAI, keywords: [ModelProvider.OpenAI] },
  { Icon: Ollama, keywords: [ModelProvider.Ollama] },
  { Icon: Perplexity, keywords: [ModelProvider.Perplexity] },
  { Icon: Minimax, keywords: [ModelProvider.Minimax] },
  { Icon: Mistral, keywords: [ModelProvider.Mistral] },
  { Icon: Anthropic, keywords: [ModelProvider.Anthropic] },
  { Icon: Groq, keywords: [ModelProvider.Groq] },
  { Icon: OpenRouter, keywords: [ModelProvider.OpenRouter] },
  { Icon: ZeroOne, keywords: [ModelProvider.ZeroOne] },
  { Icon: Together, keywords: [ModelProvider.TogetherAI] },
  { Icon: Qwen, keywords: [ModelProvider.Qwen] },
  { Icon: Stepfun, keywords: [ModelProvider.Stepfun] },
  { Icon: Spark, keywords: [ModelProvider.Spark] },
  { Icon: Fireworks, keywords: [ModelProvider.FireworksAI] },
  { Icon: Baichuan, keywords: [ModelProvider.Baichuan] },
  { Icon: AiMass, keywords: [ModelProvider.Taichu] },
  { Icon: Ai360, keywords: [ModelProvider.Ai360] },
  { Icon: SiliconCloud, keywords: [ModelProvider.SiliconCloud] },
  { Icon: Upstage, keywords: [ModelProvider.Upstage] },
  { Icon: Ai21, keywords: [ModelProvider.Ai21] },
];
