import React, { memo } from 'react';
import { Text, View, type ViewStyle } from 'react-native';

import RNModelIcon from '../ModelIcon';

export interface RNModelTagProps {
    model: string;
    style?: ViewStyle;
    textStyle?: ViewStyle;
    type?: 'color' | 'mono';
}

const RNModelTag = memo<RNModelTagProps>(({ type = 'mono', model, style, textStyle, ...rest }) => (
    <View
        style={[
            {
                alignItems: 'center',
                backgroundColor: '#f5f5f5',
                borderRadius: 12,
                flexDirection: 'row',
                paddingHorizontal: 8,
                paddingVertical: 4,
            },
            style,
        ]}
        {...rest}
    >
        <RNModelIcon model={model} size={12} type={type} />
        <Text
            style={[
                {
                    color: '#666',
                    fontSize: 12,
                    marginLeft: 4,
                },
                textStyle,
            ]}
        >
            {model}
        </Text>
    </View>
));

RNModelTag.displayName = 'RNModelTag';

export default RNModelTag; 