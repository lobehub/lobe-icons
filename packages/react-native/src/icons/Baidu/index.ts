import Avatar from './components/Avatar';
import BrandColor from './components/BrandColor';
import BrandMono from './components/BrandMono';
import Color from './components/Color';
import Mono from './components/Mono';
import Text from './components/Text';
import TextCn from './components/TextCn';
import { COLOR_PRIMARY, TITLE } from './style';

export type CompoundedIcon = typeof Mono & {
  Avatar: typeof Avatar;
  Brand: typeof BrandMono;
  BrandColor: typeof BrandColor;
  Color: typeof Color;
  Text: typeof Text;
  TextCn: typeof TextCn;
  colorPrimary: string;
  title: string;
};

const Icons = Mono as CompoundedIcon;
Icons.Color = Color;
Icons.Text = Text;
Icons.TextCn = TextCn;
Icons.Avatar = Avatar;
Icons.Brand = BrandMono;
Icons.BrandColor = BrandColor;
Icons.colorPrimary = COLOR_PRIMARY;
Icons.title = TITLE;

export default Icons;
