/* eslint-disable no-eval */
import { isNumber } from "../shared/utils/isNumber";
import { ACTION_TYPES, getChar } from "./actions";
const removeLastOperator = (s) => {
  return s.replace(/[+\-*/]{1,2}$/, "");
};

const isOperator = (c) => /[+\-*/]$/.test(c);

export const initialState = {
  formulaArr: [],
  output: "0",
};

export const reducer = (state, action) => {
  const char = getChar(action.type);
  switch (action.type) {
    case ACTION_TYPES.AC: {
      return initialState;
    }
    case ACTION_TYPES.DIVIDE: {
      return {
        ...state,
        formulaArr: isOperator(state.formulaArr.at(-1))
          ? state.formulaArr.replace(-1, char)
          : state.formulaArr.concat(char),
        output: char,
      };
    }
    case ACTION_TYPES.MULTIPLY: {
      return {
        ...state,
        formulaArr: isOperator(state.formulaArr.at(-1))
          ? state.formulaArr.replace(-1, char)
          : state.formulaArr.concat(char),
        output: char,
      };
    }
    case ACTION_TYPES.ADD: {
      return {
        ...state,
        formulaArr: isOperator(state.formulaArr.at(-1))
          ? state.formulaArr.replace(-1, char)
          : state.formulaArr.concat(char),
        output: char,
      };
    }
    case ACTION_TYPES.SUBTRACT: {
      return {
        ...state,
        formulaArr:
          state.formulaArr.at(-1) === char &&
          isOperator(state.formulaArr.at(-2))
            ? state.formulaArr
            : state.formulaArr.concat(char),
        output: char,
      };
    }
    case ACTION_TYPES.DECIMAL: {
      const lastNode = state.formulaArr.at(-1);

      const newFormulaArr =
        !lastNode || isOperator(lastNode)
          ? state.formulaArr.concat("0.")
          : isNumber(lastNode) && lastNode.toString().includes(".")
          ? state.formulaArr
          : state.formulaArr.replace(-1, state.formulaArr.at(-1) + char);

      return {
        ...state,
        formulaArr: newFormulaArr,
        output: newFormulaArr.at(-1).toString(),
      };
    }
    case ACTION_TYPES.EQUALS: {
      if (state.formulaArr.length) {
        const result = eval(removeLastOperator(state.formulaArr.join("")));
        return {
          formulaArr: [result].filter(Boolean),
          output: result,
        };
      }
      return state;
    }
    case ACTION_TYPES.ONE:
    case ACTION_TYPES.TWO:
    case ACTION_TYPES.THREE:
    case ACTION_TYPES.FOUR:
    case ACTION_TYPES.FIVE:
    case ACTION_TYPES.SIX:
    case ACTION_TYPES.SEVEN:
    case ACTION_TYPES.EIGHT:
    case ACTION_TYPES.NINE:
    case ACTION_TYPES.ZERO: {
      const lastNode = state.formulaArr.at(-1);

      const newFormulaArr = isNumber(lastNode)
        ? state.formulaArr.replace(
            -1,
            lastNode.includes(".")
              ? lastNode + char
              : Number((lastNode || "") + char).toString()
          )
        : state.formulaArr.concat(char);

      return {
        ...state,
        formulaArr: newFormulaArr,
        output: newFormulaArr.at(-1).toString(),
      };
    }
    default: {
      return state;
    }
  }
};
