import React, { memo } from 'react';
import { Text, type ViewStyle } from 'react-native';

import type { RNIconProps } from '../types';

interface DefaultIconProps extends RNIconProps {
    style?: ViewStyle;
}

const DefaultIcon = memo<DefaultIconProps>(({ color = '#666', size = 12, style, ...rest }) => {
    return (
        <Text
            style={[
                {
                    color,
                    fontSize: size,
                    fontWeight: 'bold',
                },
                style,
            ]}
            {...rest}
        >
            📡
        </Text>
    );
});

export default DefaultIcon; 