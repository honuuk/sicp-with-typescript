export const add = (...numbers: number[]): number =>
  numbers.reduce((acc, number) => acc + number);

export const subtract = (a: number, b: number): number => a - b;

export const multiply = (...numbers: number[]): number =>
  numbers.reduce((acc, number) => acc * number);

export const divide = (a: number, b: number): number => a / b;

export const square = (x: number): number => multiply(x, x);

export const abs = (x: number): number => {
  if (x < 0) return -x;
  else return x;
};
