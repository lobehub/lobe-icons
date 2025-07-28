import React, { memo } from 'react';
import { Text, View } from 'react-native';

import type { RNIconCombineProps } from '../types';

const RNIconCombine = memo<RNIconCombineProps>(
  ({
    Icon,
    style,
    Text: TextComponent,
    size = 24,
    spaceMultiple = 1,
    textMultiple = 1,
    extra,
    extraStyle,
    showText = true,
    showLogo = true,
    iconProps,
    inverse,
    ...rest
  }) => {
    const logo = Icon && showLogo && (
      <Icon
        size={size}
        {...(iconProps as any)}
        style={[
          inverse ? { marginLeft: size * spaceMultiple } : { marginRight: size * spaceMultiple },
          iconProps?.style,
        ]}
      />
    );

    const text = showText && TextComponent && (
      <TextComponent color={rest.color} size={size * textMultiple} />
    );

    return (
      <View
        style={[
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          },
          style,
        ]}
        {...rest}
      >
        {inverse ? (
          <>
            {text}
            {logo}
          </>
        ) : (
          <>
            {logo}
            {text}
          </>
        )}
        {extra && (
          <Text
            style={[
              {
                fontSize: size * textMultiple * 0.95,
                lineHeight: size * textMultiple * 0.95,
              },
              extraStyle,
            ]}
          >
            {extra}
          </Text>
        )}
      </View>
    );
  },
);

export default RNIconCombine;
