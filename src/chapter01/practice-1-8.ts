import { abs, add, divide, multiply, square, subtract } from "../scheme";

const cbrt = (x: number): number => cbrtIter(1, x);

const cbrtIter = (guess: number, x: number): number =>
  isGoodEnough(guess, x) ? guess : cbrtIter(improve(guess, x), x);

const improve = (guess: number, x: number): number =>
  divide(add(divide(x, square(guess)), multiply(2, guess)), 3);

const isGoodEnough = (guess: number, x: number) =>
  abs(subtract(guess, improve(guess, x))) < 0.0001;

console.log(cbrt(8));
