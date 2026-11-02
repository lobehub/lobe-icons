import { h } from 'vue';

import { defineIcon } from '../runtime';
import DefaultIcon from './DefaultIcon';
import IconAvatar, { type IconAvatarProps } from './IconAvatar';

export default defineIcon<Omit<IconAvatarProps, 'Icon'>>(
  () => (props) =>
    h(IconAvatar, {
      background: 'rgba(128,128,128,0.12)',
      color: 'currentColor',
      iconMultiple: 0.6,
      ...props,
      Icon: DefaultIcon,
    }),
);
