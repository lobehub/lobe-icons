import { FC } from 'react';

import Ai360 from '@/Ai360';
import AiMass from '@/AiMass';
import Anthropic from '@/Anthropic';
import Azure from '@/Azure';
import Baichuan from '@/Baichuan';
import Bedrock from '@/Bedrock';
import DeepSeek from '@/DeepSeek';
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
import SiliconCloud from '@/SiliconCloud';
import Stepfun from '@/Stepfun';
import Together from '@/Together';
import Tongyi from '@/Tongyi';
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
  Ai360 = 'ai360',
  Anthropic = 'anthropic',
  Azure = 'azure',
  Baichuan = 'baichuan',
  Bedrock = 'bedrock',
  DeepSeek = 'deepseek',
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
  Stepfun = 'stepfun',
  Taichu = 'taichu',
  TogetherAI = 'togetherai',
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
  { Icon: Tongyi, keywords: [ModelProvider.Qwen] },
  { Icon: Stepfun, keywords: [ModelProvider.Stepfun] },
  { Icon: Baichuan, keywords: [ModelProvider.Baichuan] },
  { Icon: AiMass, keywords: [ModelProvider.Taichu] },
  { Icon: Ai360, keywords: [ModelProvider.Ai360] },
  { Icon: SiliconCloud, keywords: [ModelProvider.SiliconCloud] },
];
