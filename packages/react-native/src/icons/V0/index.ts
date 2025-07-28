import Avatar from './components/Avatar';
import Mono from './components/Mono';
import { COLOR_PRIMARY, TITLE } from './style';

export type CompoundedIcon = typeof Mono & {
  Avatar: typeof Avatar;
  colorPrimary: string;
  title: string;
};

const Icons = Mono as CompoundedIcon;
Icons.Avatar = Avatar;
Icons.colorPrimary = COLOR_PRIMARY;
Icons.title = TITLE;
export default Icons;
