import { useReducer } from "react";
import { ACTION_TYPES } from "./actions";
import { initialState, reducer } from "./reducer";

export const Calculator = () => {
  const [{ formulaArr, output }, dispatch] = useReducer(reducer, initialState);
  const formula = formulaArr?.join("");
  const handleClick = (key) => {
    dispatch({ type: key });
  };

  return (
    <div className="calculator">
      <div style={{ color: "white" }}>{JSON.stringify(formulaArr)}</div>

      <div className="formulaScreen">{formula}</div>
      <div className="outputScreen" id="display">
        {output}
      </div>
      <div className="num-pad">
        <button
          id="clear"
          className="jumbo"
          onClick={() => {
            handleClick(ACTION_TYPES.AC);
          }}
        >
          AC
        </button>
        <button
          id="divide"
          className="operator"
          onClick={() => {
            handleClick(ACTION_TYPES.DIVIDE);
          }}
        >
          /
        </button>
        <button
          id="multiply"
          className="operator"
          onClick={() => {
            handleClick(ACTION_TYPES.MULTIPLY);
          }}
        >
          x
        </button>
        <button
          id="seven"
          onClick={() => {
            handleClick(ACTION_TYPES.SEVEN);
          }}
        >
          7
        </button>
        <button
          id="eight"
          onClick={() => {
            handleClick(ACTION_TYPES.EIGHT);
          }}
        >
          8
        </button>
        <button
          id="nine"
          onClick={() => {
            handleClick(ACTION_TYPES.NINE);
          }}
        >
          9
        </button>
        <button
          id="subtract"
          className="operator"
          onClick={() => {
            handleClick(ACTION_TYPES.SUBTRACT);
          }}
        >
          -
        </button>
        <button
          id="four"
          onClick={() => {
            handleClick(ACTION_TYPES.FOUR);
          }}
        >
          4
        </button>
        <button
          id="five"
          onClick={() => {
            handleClick(ACTION_TYPES.FIVE);
          }}
        >
          5
        </button>
        <button
          id="six"
          onClick={() => {
            handleClick(ACTION_TYPES.SIX);
          }}
        >
          6
        </button>
        <button
          id="add"
          className="operator"
          onClick={() => {
            handleClick(ACTION_TYPES.ADD);
          }}
        >
          +
        </button>
        <button
          id="one"
          onClick={() => {
            handleClick(ACTION_TYPES.ONE);
          }}
        >
          1
        </button>
        <button
          id="two"
          onClick={() => {
            handleClick(ACTION_TYPES.TWO);
          }}
        >
          2
        </button>
        <button
          id="three"
          onClick={() => {
            handleClick(ACTION_TYPES.THREE);
          }}
        >
          3
        </button>
        <button
          id="zero"
          className="jumbo"
          onClick={() => {
            handleClick(ACTION_TYPES.ZERO);
          }}
        >
          0
        </button>
        <button
          id="decimal"
          onClick={() => {
            handleClick(ACTION_TYPES.DECIMAL);
          }}
        >
          .
        </button>
        <button
          id="equals"
          onClick={() => {
            handleClick(ACTION_TYPES.EQUALS);
          }}
        >
          =
        </button>
      </div>
    </div>
  );
};
