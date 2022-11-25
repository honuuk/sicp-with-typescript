import { abs, add, divide, square, subtract } from "../scheme";

export const sqrt = (x: number): number => sqrtIter(1, x);

const sqrtIter = (guess: number, x: number): number =>
  isGoodEnough(guess, x) ? guess : sqrtIter(improve(guess, x), x);

export const improve = (guess: number, x: number): number =>
  average(guess, divide(x, guess));

const average = (x: number, y: number): number => divide(add(x, y), 2);

const isGoodEnough = (guess: number, x: number) =>
  abs(subtract(square(guess), x)) < 0.001;

console.log(sqrt(9));
