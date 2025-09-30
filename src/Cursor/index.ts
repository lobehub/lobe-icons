import Avatar from './components/Avatar';
import Color from './components/Color';
import Combine from './components/Combine';
import Mono from './components/Mono';
import Text from './components/Text';
import {
  COLOR_BOTTOM,
  COLOR_LEFT,
  COLOR_PRIMARY,
  COLOR_RIGHT,
  COLOR_TOP_LIGHT,
  COLOR_TOP_WHITE,
  TITLE,
} from './style';

export type CompoundedIcon = typeof Mono & {
  Avatar: typeof Avatar;
  Color: typeof Color;
  Combine: typeof Combine;
  Text: typeof Text;
  colorBottom: string;
  colorLeft: string;
  colorPrimary: string;
  colorRight: string;
  colorTopLight: string;
  colorTopWhite: string;
  title: string;
};

const Icons = Mono as CompoundedIcon;
Icons.Text = Text;
Icons.Color = Color;
Icons.Combine = Combine;
Icons.Avatar = Avatar;
Icons.colorPrimary = COLOR_PRIMARY;
Icons.colorBottom = COLOR_BOTTOM;
Icons.colorLeft = COLOR_LEFT;
Icons.colorRight = COLOR_RIGHT;
Icons.colorTopLight = COLOR_TOP_LIGHT;
Icons.colorTopWhite = COLOR_TOP_WHITE;
Icons.title = TITLE;
export default Icons;
