const AC = "AC";
const DIVIDE = "DIVIDE";
const MULTIPLY = "MULTIPLY";
const ADD = "ADD";
const SUBTRACT = "SUBTRACT";
const DECIMAL = "DECIMAL";
const EQUALS = "EQUALS";
const ONE = "ONE";
const TWO = "TWO";
const THREE = "THREE";
const FOUR = "FOUR";
const FIVE = "FIVE";
const SIX = "SIX";
const SEVEN = "SEVEN";
const EIGHT = "EIGHT";
const NINE = "NINE";
const ZERO = "ZERO";

export const ACTION_TYPES = Object.freeze({
  AC,
  DIVIDE,
  MULTIPLY,
  ADD,
  SUBTRACT,
  DECIMAL,
  EQUALS,
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  ZERO,
});

export const getChar = (value) => {
  return {
    [AC]: "",
    [DIVIDE]: "/",
    [MULTIPLY]: "*",
    [ADD]: "+",
    [SUBTRACT]: "-",
    [DECIMAL]: ".",
    [EQUALS]: "=",
    [ONE]: "1",
    [TWO]: "2",
    [THREE]: "3",
    [FOUR]: "4",
    [FIVE]: "5",
    [SIX]: "6",
    [SEVEN]: "7",
    [EIGHT]: "8",
    [NINE]: "9",
    [ZERO]: "0",
  }[value];
};
