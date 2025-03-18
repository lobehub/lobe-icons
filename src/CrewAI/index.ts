'use client';

import Avatar from './components/Avatar';
import Brand from './components/Brand';
import BrandColor from './components/BrandColor';
import Color from './components/Color';
import Combine from './components/Combine';
import Mono from './components/Mono';
import Text from './components/Text';
import { COLOR_PRIMARY, TITLE } from './style';

export type CompoundedIcon = typeof Mono & {
  Avatar: typeof Avatar;
  Brand: typeof Brand;
  BrandColor: typeof BrandColor;
  Color: typeof Color;
  Combine: typeof Combine;
  Text: typeof Text;
  colorPrimary: string;
  title: string;
};

const Icons = Mono as CompoundedIcon;
Icons.Color = Color;
Icons.Text = Text;
Icons.Combine = Combine;
Icons.Avatar = Avatar;
Icons.Brand = Brand;
Icons.BrandColor = BrandColor;
Icons.colorPrimary = COLOR_PRIMARY;
Icons.title = TITLE;

export default Icons;
