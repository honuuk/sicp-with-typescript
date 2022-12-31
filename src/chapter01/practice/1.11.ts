import { add, subtract, multiply } from "../../scheme";

const recursive = (n: number): number => {
  if (n < 3) return n;
  return add(
    recursive(subtract(n, 1)),
    multiply(2, recursive(subtract(n, 2))),
    multiply(3, recursive(subtract(n, 3)))
  );
};

console.log(recursive(5));

const iterative = (n: number) => {
  return iterativeIter(n, 0, 1, 2);
};

const iterativeIter = (n: number, a: number, b: number, c: number): number => {
  if (n === 0) return a;
  return iterativeIter(
    subtract(n, 1),
    b,
    c,
    add(multiply(3, a), multiply(2, b), c)
  );
};

console.log(iterative(5));
