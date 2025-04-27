import Avatar from './components/Avatar';
import Combine from './components/Combine';
import Mono from './components/Mono';
import Text from './components/Text';
import { COLOR_GRADIENT, COLOR_PRIMARY, TITLE } from './style';

export type CompoundedIcon = typeof Mono & {
  Avatar: typeof Avatar;
  Combine: typeof Combine;
  Text: typeof Text;
  colorGradient: string;
  colorPrimary: string;
  title: string;
};

const Icons = Mono as CompoundedIcon;
Icons.Text = Text;
Icons.Combine = Combine;
Icons.Avatar = Avatar;
Icons.colorPrimary = COLOR_PRIMARY;
Icons.colorGradient = COLOR_GRADIENT;
Icons.title = TITLE;
export default Icons;
