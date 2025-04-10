'use client';

import Avatar from './components/Avatar';
import Combine from './components/Combine';
import Mono from './components/Mono';
import Text from './components/Text';
import { COLOR_PRIMARY, TITLE } from './style';

export type CompoundedIcon = typeof Mono & {
  Avatar: typeof Avatar;
  Combine: typeof Combine;
  Text: typeof Text;
  colorPrimary: string;
  title: string;
};

const Icons = Mono as CompoundedIcon;
Icons.Text = Text;
Icons.Combine = Combine;
Icons.Avatar = Avatar;
Icons.colorPrimary = COLOR_PRIMARY;
Icons.title = TITLE;
export default Icons;
