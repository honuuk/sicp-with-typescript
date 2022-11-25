import { abs, add, divide, square, subtract } from "../scheme";

export const sqrt = (x: number): number => sqrtIter(-10000, 1, x);

const sqrtIter = (prevGuess: number, guess: number, x: number): number =>
  isGoodEnough(prevGuess, guess, x)
    ? guess
    : sqrtIter(guess, improve(guess, x), x);

const improve = (guess: number, x: number): number =>
  average(guess, divide(x, guess));

const average = (x: number, y: number): number => divide(add(x, y), 2);

const isGoodEnough = (prevGuess: number, guess: number, x: number) =>
  abs(
    subtract(
      abs(subtract(square(guess), x)),
      abs(subtract(square(prevGuess), x))
    )
  ) < 0.0001;

console.log(sqrt(9007199254740992));
console.log(sqrt(0.001));
