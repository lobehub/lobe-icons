import React, { memo } from 'react';
import { View } from 'react-native';

import type { RNIconAvatarProps } from '../types';

import DefaultIcon from './DefaultIcon';

const DefaultAvatar = memo<Omit<RNIconAvatarProps, 'Icon'>>(
    ({
        shape = 'circle',
        color = '#fff',
        background = '#f0f0f0',
        size,
        style,
        iconMultiple = 0.6,
        iconStyle,
    }) => {
        const borderRadius = shape === 'circle' ? size / 2 : Math.floor(size * 0.1);

        return (
            <View
                style={[
                    {
                        alignItems: 'center',
                        backgroundColor: background,
                        borderRadius,
                        height: size,
                        justifyContent: 'center',
                        width: size,
                    },
                    style,
                ]}
            >
                <DefaultIcon
                    color={color}
                    size={size * iconMultiple}
                    style={iconStyle}
                />
            </View>
        );
    },
);

export default DefaultAvatar; 