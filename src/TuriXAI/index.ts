import AvatarA from './components/AvatarA';
import AvatarB from './components/AvatarB';
import CombineA from './components/CombineA';
import CombineB from './components/CombineB';
import Mono from './components/Mono';
import Text from './components/Text';
import { COLOR_GRADIENT, COLOR_PRIMARY, TITLE } from './style';

export type CompoundedIcon = typeof Mono & {
  AvatarA: typeof AvatarA;
  AvatarB: typeof AvatarB;
  CombineA: typeof CombineA;
  CombineB: typeof CombineB;
  Text: typeof Text;
  color: string;
  colorGradient: string;
  colorPrimary: string;
  title: string;
};

const Icons = Mono as CompoundedIcon;
Icons.Text = Text;
Icons.CombineA = CombineA;
Icons.CombineB = CombineB;
Icons.AvatarA = AvatarA;
Icons.AvatarB = AvatarB;
Icons.colorPrimary = COLOR_PRIMARY;
Icons.colorGradient = COLOR_GRADIENT;
Icons.title = TITLE;
Icons.color = '#000000';
export default Icons;
