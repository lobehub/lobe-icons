import { DivProps } from '@lobehub/ui';
import { Divider } from 'antd';
import { FC, ReactNode, memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import Ai360 from '@/Ai360';
import AiMass from '@/AiMass';
import Anthropic from '@/Anthropic';
import Aws from '@/Aws';
import Azure from '@/Azure';
import Baichuan from '@/Baichuan';
import Bedrock from '@/Bedrock';
import Claude from '@/Claude';
import DeepSeek from '@/DeepSeek';
import Fireworks from '@/Fireworks';
import Gemini from '@/Gemini';
import Google from '@/Google';
import Groq from '@/Groq';
import LobeHub from '@/LobeHub';
import Minimax from '@/Minimax';
import Mistral from '@/Mistral';
import Moonshot from '@/Moonshot';
import Novita from '@/Novita';
import Ollama from '@/Ollama';
import OpenAI from '@/OpenAI';
import OpenRouter from '@/OpenRouter';
import Perplexity from '@/Perplexity';
import { ModelProvider } from '@/ProviderIcon/const';
import Qwen from '@/Qwen';
import SiliconCloud from '@/SiliconCloud';
import Spark from '@/Spark';
import Stepfun from '@/Stepfun';
import Together from '@/Together';
import ZeroOne from '@/ZeroOne';
import Zhipu from '@/Zhipu';

export interface ProviderMapping {
  Icon: FC<DivProps & { size: number; type: 'color' | 'mono' }>;
  keywords: string[];
  multiple?: number;
  props?: any;
}

const Combine = memo<DivProps & { left: ReactNode; right: ReactNode; size: number }>(
  ({ left, right, size = 24, ...rest }) => {
    return (
      <Flexbox align={'center'} flex={'none'} gap={size / 3} horizontal {...rest}>
        {left}
        <Divider style={{ marginBlock: 0, marginInline: size / 6 }} type={'vertical'} />
        {right}
      </Flexbox>
    );
  },
);

export const providerMappings: ProviderMapping[] = [
  { Icon: LobeHub.Combine, keywords: [ModelProvider.LobeHub] },
  { Icon: Zhipu.Combine, keywords: [ModelProvider.ZhiPu], multiple: 1.25 },
  {
    Icon: ({ size = 24, type = 'color', ...props }) => (
      <Combine
        left={type === 'color' ? <Aws.Color size={size * 1.2} /> : <Aws size={size * 1.2} />}
        right={<Bedrock.Combine size={size} type={type} />}
        size={size}
        {...props}
      />
    ),
    keywords: [ModelProvider.Bedrock],
    multiple: 1.1,
  },
  { Icon: DeepSeek.Combine, keywords: [ModelProvider.DeepSeek], multiple: 1.16 },
  {
    Icon: ({ size = 24, type = 'color', ...props }) => (
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
    ),
    keywords: [ModelProvider.Google],
    multiple: 0.92,
  },
  {
    Icon: ({ size = 24, type = 'color', ...props }) => (
      <Combine
        left={<Azure.Combine size={size * 0.92} type={type} />}
        right={<OpenAI.Combine size={size} />}
        size={size}
        {...props}
      />
    ),
    keywords: [ModelProvider.Azure],
  },
  {
    Icon: Moonshot.Combine,
    keywords: [ModelProvider.Moonshot],
    multiple: 0.9,
  },
  { Icon: OpenAI.Combine, keywords: [ModelProvider.OpenAI] },
  {
    Icon: Ollama.Combine,
    keywords: [ModelProvider.Ollama],
    multiple: 1.16,
  },
  { Icon: Perplexity.Combine, keywords: [ModelProvider.Perplexity] },
  { Icon: Minimax.Combine, keywords: [ModelProvider.Minimax], multiple: 1.3 },
  { Icon: Mistral.Combine, keywords: [ModelProvider.Mistral], multiple: 1.08 },
  {
    Icon: ({ size = 24, type = 'color', ...props }) => (
      <Combine
        left={<Anthropic.Text size={size * 0.75} />}
        right={<Claude.Combine size={size} type={type} />}
        size={size}
        {...props}
      />
    ),
    keywords: [ModelProvider.Anthropic],
    multiple: 0.83,
  },
  { Icon: Groq.Combine, keywords: [ModelProvider.Groq] },
  { Icon: OpenRouter.Combine, keywords: [ModelProvider.OpenRouter], multiple: 0.8 },
  { Icon: ZeroOne.Combine, keywords: [ModelProvider.ZeroOne], multiple: 0.9 },
  { Icon: Together.Combine, keywords: [ModelProvider.TogetherAI] },
  { Icon: Fireworks.Combine, keywords: [ModelProvider.FireworksAI] },
  { Icon: Qwen.Combine, keywords: [ModelProvider.Qwen] },
  { Icon: Stepfun.Combine, keywords: [ModelProvider.Stepfun], multiple: 0.83 },
  { Icon: Baichuan.Combine, keywords: [ModelProvider.Baichuan], multiple: 0.83 },
  { Icon: AiMass.Combine, keywords: [ModelProvider.Taichu], multiple: 1.16 },
  { Icon: Ai360.Combine, keywords: [ModelProvider.Ai360], multiple: 0.83 },
  { Icon: Novita.Combine, keywords: [ModelProvider.Novita], multiple: 0.95 },
  { Icon: SiliconCloud.Combine, keywords: [ModelProvider.SiliconCloud], multiple: 0.75 },
  { Icon: Spark.Combine, keywords: [ModelProvider.Spark] },
];
