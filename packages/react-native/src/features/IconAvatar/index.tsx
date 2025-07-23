import React, { memo, useMemo } from 'react';
import { View, type ViewStyle } from 'react-native';

import type { RNIconProps } from '../types';

// Gradient parsing interfaces
interface GradientInfo {
  colors: string[];
  end?: { x: number; y: number };
  locations?: number[];
  start?: { x: number; y: number };
}

// Convert degrees to start/end coordinates
const degreesToCoordinates = (degrees: number): { end: { x: number; y: number }; start: { x: number; y: number } } => {
  // Normalize degrees to 0-360
  const normalizedDegrees = ((degrees % 360) + 360) % 360;
  const radians = (normalizedDegrees * Math.PI) / 180;

  // Calculate end coordinates based on angle
  const endX = Math.cos(radians - Math.PI / 2);
  const endY = Math.sin(radians - Math.PI / 2);

  // Normalize to 0-1 range
  const start = { x: 0.5 - endX / 2, y: 0.5 - endY / 2 };
  const end = { x: 0.5 + endX / 2, y: 0.5 + endY / 2 };

  return { end, start };
};

// Convert CSS direction to react-native-linear-gradient coordinates
const parseGradientDirection = (direction: string): { end: { x: number; y: number }; start: { x: number; y: number } } => {
  const directionMap: Record<string, { end: { x: number; y: number }; start: { x: number; y: number } }> = {
    'to bottom': { end: { x: 0, y: 1 }, start: { x: 0, y: 0 } },
    'to bottom left': { end: { x: 0, y: 1 }, start: { x: 1, y: 0 } },
    'to bottom right': { end: { x: 1, y: 1 }, start: { x: 0, y: 0 } },
    'to left': { end: { x: 0, y: 0 }, start: { x: 1, y: 0 } },
    'to right': { end: { x: 1, y: 0 }, start: { x: 0, y: 0 } },
    'to top': { end: { x: 0, y: 0 }, start: { x: 0, y: 1 } },
    'to top left': { end: { x: 0, y: 0 }, start: { x: 1, y: 1 } },
    'to top right': { end: { x: 1, y: 0 }, start: { x: 0, y: 1 } },
  };

  // Handle keyword directions
  if (directionMap[direction]) {
    return directionMap[direction];
  }

  // Handle degree values
  const degreeMatch = direction.match(/(-?\d+(?:\.\d+)?)deg/);
  if (degreeMatch) {
    const degrees = parseFloat(degreeMatch[1]);
    return degreesToCoordinates(degrees);
  }

  // Default to bottom
  return directionMap['to bottom'];
};

// Parse CSS linear-gradient string
const parseLinearGradient = (gradientString: string): GradientInfo | null => {
  try {
    const match = gradientString.match(/linear-gradient\(([^)]+)\)/);
    if (!match) return null;

    const parts = match[1].split(',').map(s => s.trim());
    if (parts.length < 2) return null;

    let direction = parts[0];
    let colors: string[] = [];
    let locations: number[] | undefined;

    // Check if first part is a color (no direction specified)
    const isColor = direction.match(/#[\dA-Fa-f]{6}|#[\dA-Fa-f]{3}|rgb|hsl/);
    const colorParts = isColor ? parts : parts.slice(1);

    // Parse colors and optional locations
    const colorData = colorParts.map(part => {
      const colorMatch = part.match(/(#[\dA-Fa-f]{6}|#[\dA-Fa-f]{3}|rgb\([^)]+\)|rgba\([^)]+\)|hsl\([^)]+\)|hsla\([^)]+\))/);
      const percentMatch = part.match(/(\d+(?:\.\d+)?)%/);

      if (colorMatch) {
        return {
          color: colorMatch[1],
          location: percentMatch ? parseFloat(percentMatch[1]) / 100 : undefined
        };
      }
      return null;
    }).filter(Boolean);

    colors = colorData.map(item => item!.color);
    const hasLocations = colorData.some(item => item!.location !== undefined);

    if (hasLocations) {
      locations = colorData.map((item, index) => {
        return item!.location !== undefined ? item!.location : index / (colorData.length - 1);
      });
    }

    // Parse direction
    const coordinates = isColor ?
      { end: { x: 0, y: 1 }, start: { x: 0, y: 0 } } : // default to bottom
      parseGradientDirection(direction);

    return {
      colors,
      ...coordinates,
      locations,
    };
  } catch (error) {
    console.warn('Failed to parse gradient:', gradientString, error);
    return null;
  }
};

// Extract fallback color from gradient string
const extractFallbackColor = (gradientString: string): string => {
  const colorMatch = gradientString.match(/#[\dA-Fa-f]{6}|#[\dA-Fa-f]{3}/);
  return colorMatch ? colorMatch[0] : '#cccccc';
};

// Check if background is a gradient
const isGradient = (background?: string): boolean => {
  return background?.includes('linear-gradient(') ?? false;
};

export interface RNIconAvatarProps {
  Icon?: React.ComponentType<RNIconProps>;
  background?: string;
  color?: string;
  iconMultiple?: number;
  iconStyle?: ViewStyle;
  shape?: 'circle' | 'square';
  size: number;
  style?: ViewStyle;
}

const RNIconAvatar = memo<RNIconAvatarProps>(
  ({
    shape = 'circle',
    color = '#fff',
    background,
    size,
    style,
    iconMultiple = 0.75,
    Icon,
    iconStyle,
    ...rest
  }) => {
    const borderRadius = shape === 'circle' ? size / 2 : Math.floor(size * 0.1);

    // Parse gradient information
    const gradientInfo = useMemo(() => {
      if (!background || !isGradient(background)) {
        return null;
      }
      return parseLinearGradient(background);
    }, [background]);

    const containerStyle: ViewStyle = {
      alignItems: 'center',
      borderRadius,
      height: size,
      justifyContent: 'center',
      width: size,
    };

    const combinedStyle = [containerStyle, style];

    // Try to import LinearGradient dynamically
    let LinearGradient: any = null;
    try {
      LinearGradient = require('react-native-linear-gradient').default;
    } catch {
      // LinearGradient not available, will fall back to solid color
    }

    // Render with gradient if available and parsed successfully
    if (gradientInfo && LinearGradient) {
      return (
        <LinearGradient
          colors={gradientInfo.colors}
          end={gradientInfo.end}
          locations={gradientInfo.locations}
          start={gradientInfo.start}
          style={combinedStyle}
          {...rest}
        >
          {Icon && <Icon color={color} size={Math.round(size * iconMultiple)} style={iconStyle} />}
        </LinearGradient>
      );
    }

    // Fallback to solid color
    const fallbackBackground = isGradient(background || '')
      ? extractFallbackColor(background || '')
      : background;

    return (
      <View
        style={[
          combinedStyle,
          {
            backgroundColor: fallbackBackground,
          },
        ]}
        {...rest}
      >
        {Icon && <Icon color={color} size={Math.round(size * iconMultiple)} style={iconStyle} />}
      </View>
    );
  },
);

export default RNIconAvatar;
