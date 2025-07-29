import React, { memo } from 'react';
import { Text, View, type ViewStyle } from 'react-native';

import RNModelIcon from '../ModelIcon';

export interface RNModelTagProps {
  model: string;
  size?: number;
  style?: ViewStyle;
  textStyle?: ViewStyle;
  type?: 'color' | 'mono';
}

const RNModelTag = memo<RNModelTagProps>(
  ({ type = 'mono', model, size = 12, style, textStyle, ...rest }) => {
    // Calculate text size and padding based on icon size
    const textSize = Math.max(size * 0.9, 10); // Text slightly smaller than icon, minimum 10
    const paddingHorizontal = Math.max(size * 0.67, 8); // Proportional padding, minimum 8
    const paddingVertical = Math.max(size * 0.33, 4); // Proportional padding, minimum 4
    const borderRadius = Math.max(size, 12); // Proportional border radius, minimum 12
    const marginLeft = Math.max(size * 0.33, 4); // Proportional margin, minimum 4

    return (
      <View
        style={[
          {
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
            borderRadius,
            flexDirection: 'row',
            paddingHorizontal,
            paddingVertical,
          },
          style,
        ]}
        {...rest}
      >
        <RNModelIcon model={model} size={size} type={type} />
        <Text
          style={[
            {
              color: '#666',
              fontSize: textSize,
              marginLeft,
            },
            textStyle,
          ]}
        >
          {model}
        </Text>
      </View>
    );
  },
);

RNModelTag.displayName = 'RNModelTag';

export default RNModelTag;
