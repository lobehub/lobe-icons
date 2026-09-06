import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, color = '#000000', ...rest }) => {
  return (
    <Svg
      color={color}
      fillRule="evenodd"
      height={size}
      style={style}
      viewBox="0 0 24 24"
      width={size}
      {...rest}
    >
      <Path d="M4 3L7.76471 6.40541V8.35135H4V3Z" fill={color} />
      <Path d="M4 21L7.76471 17.5946V15.6486H4V21Z" fill={color} />
      <Path d="M20 3L16.2353 6.40541V8.35135H20V3Z" fill={color} />
      <Path d="M20 21L16.2353 17.5946V15.6486H20V21Z" fill={color} />
      <Path d="M9.17642 3L11.0588 6.40542V8.35135H9.17642V3Z" fill={color} />
      <Path d="M9.17642 21L11.0588 17.5946V15.6486H9.17642V21Z" fill={color} />
      <Path d="M14.8236 3L12.9412 6.40542V8.35135H14.8236V3Z" fill={color} />
      <Path d="M14.8236 21L12.9412 17.5946V15.6486H14.8236V21Z" fill={color} />
      <Path d="M4 8.59458L7.7647 10.5405V13.4594L4 15.4054V8.59458Z" fill={color} />
      <Path d="M9.17642 8.59457L11.0588 10.5405V13.4594L9.17642 15.4054V8.59457Z" fill={color} />
      <Path d="M14.8236 8.59457L12.9412 10.5405V13.4594L14.8236 15.4054V8.59457Z" fill={color} />
      <Path d="M20 8.59458L16.2353 10.5405V13.4594L20 15.4054V8.59458Z" fill={color} />
    </Svg>
  );
});

Icon.displayName = 'TheGridMono';

export default Icon;
