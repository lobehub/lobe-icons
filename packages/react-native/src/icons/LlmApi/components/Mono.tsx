import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, color = 'currentColor', ...rest }) => {
  return (
    <Svg height={size} style={style} viewBox="0 0 72 72" width={size} {...rest}>
      <Path
        d="M24.136 33.9484L12.0218 27.1098L24.136 20.2711L36.2501 27.1098L24.136 33.9484Z"
        fill={color}
      />
      <Path
        d="M36.2501 27.1099V44.1205L24.1359 50.9592V42.7528V33.9485L36.2501 27.1099Z"
        fill={color}
      />
      <Path
        d="M48.3642 33.9484L36.25 27.1098L48.3642 20.2711L60.4784 27.1098L48.3642 33.9484Z"
        fill={color}
      />
      <Path
        d="M60.4784 27.1099V44.1205L48.3642 50.9592V42.7528V33.9485L60.4784 27.1099Z"
        fill={color}
      />
      <Path
        d="M24.136 47.6218L12.0218 40.7832L24.136 33.9445L36.2501 40.7832L24.136 47.6218Z"
        fill={color}
      />
      <Path
        d="M36.2501 40.7831V57.7977L24.1359 64.6364V56.43V47.6218L36.2501 40.7831Z"
        fill={color}
      />
      <Path
        d="M48.3642 47.6218L36.25 40.7832L48.3642 33.9445L60.4784 40.7832L48.3642 47.6218Z"
        fill={color}
      />
      <Path
        d="M60.4784 40.7831V57.7977L48.3642 64.6364V56.43V47.6218L60.4784 40.7831Z"
        fill={color}
      />
      <Path
        d="M35.9374 40.0909C44.9748 40.0909 52.3011 32.7647 52.3011 23.7273C52.3011 14.6899 44.9748 7.36365 35.9374 7.36365C26.9001 7.36365 19.5738 14.6899 19.5738 23.7273C19.5738 32.7647 26.9001 40.0909 35.9374 40.0909Z"
        fill={color}
      />
      <Path d="M27.3465 25.2273H29.8011V29.7273H27.3465V25.2273Z" fill={color} />
      <Path d="M42.0738 25.2273H44.5284V29.7273H42.0738V25.2273Z" fill={color} />
    </Svg>
  );
});

Icon.displayName = 'LlmApiMono';

export default Icon;
