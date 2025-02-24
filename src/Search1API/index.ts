'use client';

import Avatar from './components/Avatar';
import Color from './components/Color';
import Combine from './components/Combine';
import Text from './components/Text';
import { COLOR_PRIMARY, TITLE } from './style';

export type CompoundedIcon = typeof Color & {
  Avatar: typeof Avatar;
  Combine: typeof Combine;
  Text: typeof Text;
  colorPrimary: string;
  title: string;
};

const Icons = Color as CompoundedIcon;
Icons.Text = Text;
Icons.Avatar = Avatar;
Icons.Combine = Combine;
Icons.colorPrimary = COLOR_PRIMARY;
Icons.title = TITLE;

export default Icons;
