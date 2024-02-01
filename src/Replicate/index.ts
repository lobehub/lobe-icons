import Avatar from './components/Avatar';
import BrandMono from './components/BrandMono';
import Mono from './components/Mono';
import { COLOR_PRIMARY } from './style';

export type CompoundedIcon = typeof Mono & {
  Avatar: typeof Avatar;
  Brand: typeof BrandMono;
  colorPrimary: string;
};

const Icons = Mono as CompoundedIcon;
Icons.Avatar = Avatar;
Icons.Brand = BrandMono;
Icons.colorPrimary = COLOR_PRIMARY;

export default Icons;
