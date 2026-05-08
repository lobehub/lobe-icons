import { FC } from 'react';

import Amp from '@/Amp';
import Antigravity from '@/Antigravity';
import CherryStudio from '@/CherryStudio';
import Claude from '@/Claude';
import ClaudeCode from '@/ClaudeCode';
import Cline from '@/Cline';
import CodeBuddy from '@/CodeBuddy';
import CodeFlicker from '@/CodeFlicker';
import Codex from '@/Codex';
import Copilot from '@/Copilot';
import Coze from '@/Coze';
import Cursor from '@/Cursor';
import Dify from '@/Dify';
import Flowith from '@/Flowith';
import Gemini from '@/Gemini';
import GeminiCLI from '@/GeminiCLI';
import GithubCopilot from '@/GithubCopilot';
import Goose from '@/Goose';
import HermesAgent from '@/HermesAgent';
import Junie from '@/Junie';
import KiloCode from '@/KiloCode';
import Kimi from '@/Kimi';
import LobeHub from '@/LobeHub';
import Manus from '@/Manus';
import MetaAI from '@/MetaAI';
import Microsoft from '@/Microsoft';
import N8n from '@/N8n';
import Notion from '@/Notion';
import OpenAI from '@/OpenAI';
import OpenClaw from '@/OpenClaw';
import OpenCode from '@/OpenCode';
import OpenHands from '@/OpenHands';
import OpenWebUI from '@/OpenWebUI';
import Qoder from '@/Qoder';
import Qwen from '@/Qwen';
import Replit from '@/Replit';
import RooCode from '@/RooCode';
import Trae from '@/Trae';
import Windsurf from '@/Windsurf';
import Zencoder from '@/Zencoder';
import ZeroOne from '@/ZeroOne';
import type { IconAvatarProps } from '@/features/IconAvatar';
import type { IconCombineProps } from '@/features/IconCombine';
import type { IconType } from '@/types';

type AgentIconType = FC<IconType & any> & {
  Avatar: FC<Omit<IconAvatarProps, 'Icon'> & any>;
  Brand?: FC<IconType & any>;
  BrandColor?: FC<IconType & any>;
  Color?: FC<IconType & any>;
  Combine?: FC<Omit<IconCombineProps, 'Icon' | 'Text'> & any>;
  Text?: FC<IconType & any>;
};

// Define a type for our agent mapping
export interface AgentMapping {
  Icon: AgentIconType;
  keywords: string[];
  props?: any;
}

// Create a mapping of agent keywords to their respective Icon functions
export const agentMappings: AgentMapping[] = [
  {
    Icon: LobeHub,
    keywords: ['lobehub', 'lobechat', 'lobe-chat', 'lobe-agent', 'lobe-ai', 'lobeai', 'lobe'],
  },
  { Icon: ClaudeCode, keywords: ['claude-code', 'claudecode', 'claude-co'] },
  { Icon: Claude, keywords: ['claude-desktop', 'open-claude', 'claude'] },
  { Icon: Codex, keywords: ['codex'] },
  { Icon: OpenAI, keywords: ['openai', 'chatgpt', 'gpt'] },
  { Icon: Kimi, keywords: ['kimi-cli', 'kimi-code', 'kimi', 'kimiclaw', 'kimi-claw'] },
  {
    Icon: OpenClaw,
    keywords: [
      'open-claw',
      'openclaw',
      'dewu-smartclaw',
      'nanoclaw',
      'zeroclaw',
      'goclaw',
      'clawhub',
      'catpaw',
      'copaw',
      'clawdbot',
      'moltbot',
      'claw',
    ],
  },
  { Icon: HermesAgent, keywords: ['hermes'] },
  { Icon: Manus, keywords: ['manus'] },
  { Icon: CherryStudio, keywords: ['cherry-studio', 'cherrystudio'] },
  { Icon: Cursor, keywords: ['cursor'] },
  { Icon: Amp, keywords: ['amp'] },
  {
    Icon: GithubCopilot,
    keywords: [
      'github-copilot-cli',
      'github-copilot',
      'githubcopilot',
      'vscode-copilot',
      'copilot-cli',
      'github',
    ],
  },
  { Icon: Copilot, keywords: ['copilot'] },
  { Icon: GeminiCLI, keywords: ['geminicli', 'gemini-cli'] },
  { Icon: Gemini, keywords: ['gemini-scout', 'gemini'] },
  { Icon: KiloCode, keywords: ['kilo-code', 'kilocode', 'kilo', 'kiro-cli', 'kiro'] },
  { Icon: Junie, keywords: ['junie'] },
  { Icon: Replit, keywords: ['replit'] },
  { Icon: Windsurf, keywords: ['windsurf'] },
  { Icon: Cline, keywords: ['cline'] },
  {
    Icon: OpenCode,
    keywords: [
      'open-code',
      'opencode',
      'openwork',
      'open-code-go',
      'opencodego',
      'opencodecodingplan',
      'open-code-zen',
      'opencodezen',
    ],
  },
  { Icon: OpenHands, keywords: ['open-hands', 'openhands'] },
  { Icon: RooCode, keywords: ['roo-code', 'roocode'] },
  { Icon: Goose, keywords: ['goose'] },
  { Icon: Trae, keywords: ['trae-ide', 'trae-ai', 'traeb', 'trae'] },
  { Icon: Zencoder, keywords: ['zencoder'] },
  { Icon: Coze, keywords: ['coze-coding', 'coze'] },
  { Icon: Dify, keywords: ['dify'] },
  { Icon: Antigravity, keywords: ['antigravity', 'google'] },
  { Icon: Qoder, keywords: ['qoder-work', 'qoder'] },
  { Icon: Qwen, keywords: ['qwen-code', 'qwen'] },
  { Icon: Microsoft, keywords: ['windows', 'vscode', 'micode'] },
  { Icon: OpenWebUI, keywords: ['openwebui-bridge', 'openwebui'] },
  { Icon: CodeFlicker, keywords: ['codeflicker'] },
  { Icon: Flowith, keywords: ['iflow', 'flowith'] },
  { Icon: ZeroOne, keywords: ['agent-zero', 'agentzero', 'agent0'] },
  { Icon: MetaAI, keywords: ['meta-ai', 'metaai'] },
  { Icon: N8n, keywords: ['n8n'] },
  { Icon: Notion, keywords: ['notion'] },
  { Icon: CodeBuddy, keywords: ['code-buddy', 'codebuddy'] },
];
