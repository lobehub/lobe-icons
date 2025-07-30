import Avatar from './components/Avatar';
import BrandColor from './components/BrandColor';
import BrandMono from './components/BrandMono';
import Color from './components/Color';
import Combine from './components/Combine';
import Mono from './components/Mono';
import { COLOR_PRIMARY, TITLE } from './style';

export type CompoundedIcon = typeof Mono & {
  Avatar: typeof Avatar;
  Brand: typeof BrandMono;
  BrandColor: typeof BrandColor;
  Color: typeof Color;
  Combine: typeof Combine;
  colorPrimary: string;
  title: string;
};

const Icons = Mono as CompoundedIcon;
Icons.Color = Color;
Icons.Brand = BrandMono;
Icons.BrandColor = BrandColor;
Icons.Combine = Combine;
Icons.Avatar = Avatar;
Icons.colorPrimary = COLOR_PRIMARY;
Icons.title = TITLE;

export default Icons;
