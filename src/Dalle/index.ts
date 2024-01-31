import Combine from './components/Combine';
import Mono from './components/Mono';
import Text from './components/Text';
import { COLOR_PRIMARY } from './style';

export type CompoundedIcon = typeof Mono & {
  Combine: typeof Combine;

  Text: typeof Text;
  colorPrimary: string;
};

const Icons = Mono as CompoundedIcon;

Icons.Text = Text;
Icons.Combine = Combine;
Icons.colorPrimary = COLOR_PRIMARY;

export default Icons;
