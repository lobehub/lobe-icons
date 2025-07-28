import React, { ReactNode, memo } from 'react';
import { View, type ViewStyle } from 'react-native';

export interface RNProviderCombineProps {
  left: ReactNode;
  right: ReactNode;
  size?: number;
  style?: ViewStyle;
}

const RNProviderCombine = memo<RNProviderCombineProps>(
  ({ left, right, size = 24, style, ...rest }) => {
    return (
      <View
        style={[
          {
            alignItems: 'center',
            flexDirection: 'row',
            gap: size / 3,
          },
          style,
        ]}
        {...rest}
      >
        {left}
        <View
          style={{
            backgroundColor: '#e0e0e0',
            height: size * 0.6,
            marginHorizontal: size / 6,
            width: 1,
          }}
        />
        {right}
      </View>
    );
  },
);

RNProviderCombine.displayName = 'RNProviderCombine';

export default RNProviderCombine;
