import Avatar from './components/Avatar';
import BrandColor from './components/BrandColor';
import BrandMono from './components/BrandMono';
import Color from './components/Color';
import Mono from './components/Mono';
import { COLOR_PRIMARY } from './style';

export type CompoundedIcon = typeof Mono & {
  Avatar: typeof Avatar;
  Brand: typeof BrandMono;
  BrandColor: typeof BrandColor;
  Color: typeof Color;
  colorPrimary: string;
};

const Icons = Mono as CompoundedIcon;
Icons.Color = Color;
Icons.Brand = BrandMono;
Icons.BrandColor = BrandColor;
Icons.Avatar = Avatar;
Icons.colorPrimary = COLOR_PRIMARY;

export default Icons;
