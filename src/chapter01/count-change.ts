import { add, subtract } from "../scheme";

const countChange = (amount: number) => cc(amount, 5);

const cc = (amount: number, kindsOfCoins: number): number => {
  if (amount === 0) return 1;
  if (amount < 0 || kindsOfCoins === 0) return 0;
  return add(
    cc(amount, subtract(kindsOfCoins, 1)),
    cc(subtract(amount, firstDenomination(kindsOfCoins)), kindsOfCoins)
  );
};

const firstDenomination = (kindsOfCoins: number): number => {
  if (kindsOfCoins === 5) return 50;
  if (kindsOfCoins === 4) return 25;
  if (kindsOfCoins === 3) return 10;
  if (kindsOfCoins === 2) return 5;
  return 1;
};

console.log(countChange(100));
