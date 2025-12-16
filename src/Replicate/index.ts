import Avatar from './components/Avatar';
import BrandMono from './components/BrandMono';
import Mono from './components/Mono';
import { COLOR_PRIMARY, TITLE } from './style';

export type CompoundedIcon = typeof Mono & {
  Avatar: typeof Avatar;
  Brand: typeof BrandMono;
  Text: typeof BrandMono;
  colorPrimary: string;
  title: string;
};

const Icons = Mono as CompoundedIcon;
Icons.Avatar = Avatar;
Icons.Text = BrandMono;
Icons.Brand = BrandMono;
Icons.colorPrimary = COLOR_PRIMARY;
Icons.title = TITLE;

export default Icons;
