export const roundToEven = (number: number) => {
  return number % 2 === 0 ? number : number - 1;
};

export const getAvatarShadow = (isDarkMode: boolean, background?: string) => {
  if (!background) return;
  if (isDarkMode && background === '#000') {
    return '0 0 0 1px rgba(255,255,255,0.1) inset';
  } else if (!isDarkMode && background === '#fff') {
    return '0 0 0 1px rgba(0,0,0,0.05) inset';
  }
  return;
};
