export const roundToEven = (number: number) => {
  return number % 2 === 0 ? number : number - 1;
};
