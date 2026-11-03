import type { DeepSeekProps, IconProps, OpenAIProps } from '@lobehub/icons-vue';
import { DeepSeek, OpenAI } from '@lobehub/icons-vue';
import Color from '@lobehub/icons-vue/es/DeepSeek/components/Color';
import DirectOpenAI from '@lobehub/icons-vue/OpenAI';

const icon: IconProps = {
  class: ['brand', { active: true }],
  color: 'red',
  onClick: () => {},
  size: '2em',
  style: ['opacity: 0.5', { marginLeft: '4px' }],
};
const avatar: InstanceType<typeof OpenAI.Avatar>['$props'] = {
  shape: 'square',
  size: 40,
  type: 'gpt5',
};
const combine: InstanceType<typeof DeepSeek.Combine>['$props'] = {
  inverse: true,
  showText: false,
  size: 32,
  type: 'color',
};
const direct: OpenAIProps = DirectOpenAI;
const named: DeepSeekProps = DeepSeek;
const color: typeof DeepSeek.Color = Color;
void [icon, avatar, combine, direct, named, color, OpenAI];

// @ts-expect-error SVG sizes accept numbers and strings, not objects.
const invalidSize: IconProps = { size: {} };
// @ts-expect-error Avatar sizes are numeric pixel sizes.
const invalidAvatar: InstanceType<typeof OpenAI.Avatar>['$props'] = { size: '40px' };
// @ts-expect-error Avatar variants follow the source brand's declared options.
const invalidVariant: InstanceType<typeof OpenAI.Avatar>['$props'] = { size: 40, type: 'unknown' };
void invalidVariant;
void [invalidSize, invalidAvatar];
