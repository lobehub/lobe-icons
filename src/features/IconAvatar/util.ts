export const roundToEven = (number: number) => {
  const rounded = Math.round(number);
  const diff = Math.abs(number - rounded);

  if (diff === 0.5) {
    return rounded % 2 === 0 ? rounded : rounded - 1;
  }
  return rounded;
};
