import Avatar from './components/Avatar';
import Color from './components/Color';
import Mono from './components/Mono';
import { COLOR_PRIMARY, TITLE } from './style';

export type CompoundedIcon = typeof Mono & {
  Avatar: typeof Avatar;
  Color: typeof Color;
  colorPrimary: string;
  title: string;
};

const Icons = Mono as CompoundedIcon;

Icons.Color = Color;
Icons.Avatar = Avatar;
Icons.colorPrimary = COLOR_PRIMARY;
Icons.title = TITLE;

export default Icons;
