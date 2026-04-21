import Color from './components/Color';
import Combine from './components/Combine';
import Mono from './components/Mono';
import { COLOR_PRIMARY, TITLE } from './style';

export type CompoundedIcon = typeof Mono & {
  Color: typeof Color;
  Combine: typeof Combine;
  colorPrimary: string;
  title: string;
};

const Icons = Mono as CompoundedIcon;
Icons.Color = Color;
Icons.Combine = Combine;
Icons.colorPrimary = COLOR_PRIMARY;
Icons.title = TITLE;

export default Icons;
