import Avatar from './components/Avatar';
import Combine from './components/Combine';
import Mono from './components/Mono';
import Text from './components/Text';
import { COLOR_GPT_3, COLOR_GPT_4, COLOR_PRIMARY, TITLE } from './style';

export type CompoundedIcon = typeof Mono & {
  Avatar: typeof Avatar;
  Combine: typeof Combine;
  Text: typeof Text;
  colorGpt3: string;
  colorGpt4: string;
  colorPrimary: string;
  title: string;
};

const Icons = Mono as CompoundedIcon;
Icons.Text = Text;
Icons.Combine = Combine;
Icons.Avatar = Avatar;
Icons.colorPrimary = COLOR_PRIMARY;
Icons.colorGpt3 = COLOR_GPT_3;
Icons.colorGpt4 = COLOR_GPT_4;
Icons.title = TITLE;
export default Icons;
