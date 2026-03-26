/**
 * Shared SVG path definitions for the AskVerdict gavel icon.
 * Used by both Mono and Color variants to keep geometry in one place.
 */
export const PATHS = {
  /** Left triangle of upper V */
  triangleLeft: 'M12 3.42L4.5 7.97 12 12.47Z',
  /** Right triangle of upper V */
  triangleRight: 'M12 3.42L19.5 7.97 12 12.47Z',
  /** Center notch detail */
  notch: 'M12 6.56L14.48 8.95 13.08 8.95 12 7.73 10.83 8.95 9.42 8.95Z',
  /** Upper chevron band */
  bandUpper: 'M4.5 13.88L12 16.83 19.5 13.88 19.5 15.61 12 18.56 4.5 15.61Z',
  /** Lower chevron band */
  bandLower: 'M5.3 16.83L12 19.55 18.7 16.83 18.7 18.38 12 20.77 5.3 18.38Z',
} as const;
