import { useState } from "react";
import "./App.css";

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

const getChar = (value) => {
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

const isOperator = (c) => /[+\-*\/]$/.test(c);

const removeLastOperator = (s) => {
  return s.replace(/[+\-*\/]{1,2}$/, "");
};

const Calculator = () => {
  const [formula, setFormula] = useState("");
  const [output, setOutput] = useState("0");
  const [result, setResult] = useState("");

  const handleClick = (key) => {
    const char = getChar(key);

    setOutput(char);

    switch (key) {
      case AC: {
        setFormula("");
        setOutput("0");
        break;
      }
      case DIVIDE: {
        setFormula((prev) => removeLastOperator(prev) + char);
        break;
      }
      case MULTIPLY: {
        setFormula((prev) => removeLastOperator(prev) + char);
        break;
      }
      case ADD: {
        setFormula((prev) => removeLastOperator(prev) + char);
        break;
      }
      case SUBTRACT: {
        setFormula((prev) =>
          prev[prev.length - 1] === char && isOperator(prev[prev.length - 2])
            ? prev
            : prev + char
        );
        break;
      }
      case DECIMAL: {
        setFormula((prev) => {
          const lastChar = prev[prev.length - 1];
          if (!lastChar || isOperator(lastChar)) {
            return prev + "0.";
          }
          return lastChar === char ? prev : prev + char;
        });
        break;
      }
      case EQUALS: {
        if (formula) {
          const result = eval(formula);
          setFormula((prev) => prev + `= ${result}`);
          setOutput(result);
        }
        break;
      }
      case ONE: {
        setFormula((prev) => prev + char);
        break;
      }
      case TWO: {
        setFormula((prev) => prev + char);
        break;
      }
      case THREE: {
        setFormula((prev) => prev + char);
        break;
      }
      case FOUR: {
        setFormula((prev) => prev + char);
        break;
      }
      case FIVE: {
        setFormula((prev) => prev + char);
        break;
      }
      case SIX: {
        setFormula((prev) => prev + char);
        break;
      }
      case SEVEN: {
        setFormula((prev) => prev + char);
        break;
      }
      case EIGHT: {
        setFormula((prev) => prev + char);
        break;
      }
      case NINE: {
        setFormula((prev) => prev + char);
        break;
      }
      case ZERO: {
        setFormula((prev) => prev + char);
        break;
      }
      default: {
        // Do nothing
        break;
      }
    }
  };

  return (
    <div className="calculator" style={{}}>
      <div className="formulaScreen">{formula}</div>
      <div className="outputScreen" id="display">
        {output}
      </div>
      <div className="num-pad">
        <button
          id="clear"
          className="jumbo"
          onClick={() => {
            handleClick(AC);
          }}
        >
          AC
        </button>
        <button
          id="divide"
          className="operator"
          onClick={() => {
            handleClick(DIVIDE);
          }}
        >
          /
        </button>
        <button
          id="multiply"
          className="operator"
          onClick={() => {
            handleClick(MULTIPLY);
          }}
        >
          x
        </button>
        <button
          id="seven"
          onClick={() => {
            handleClick(SEVEN);
          }}
        >
          7
        </button>
        <button
          id="eight"
          onClick={() => {
            handleClick(EIGHT);
          }}
        >
          8
        </button>
        <button
          id="nine"
          onClick={() => {
            handleClick(NINE);
          }}
        >
          9
        </button>
        <button
          id="subtract"
          className="operator"
          onClick={() => {
            handleClick(SUBTRACT);
          }}
        >
          -
        </button>
        <button
          id="four"
          onClick={() => {
            handleClick(FOUR);
          }}
        >
          4
        </button>
        <button
          id="five"
          onClick={() => {
            handleClick(FIVE);
          }}
        >
          5
        </button>
        <button
          id="six"
          onClick={() => {
            handleClick(SIX);
          }}
        >
          6
        </button>
        <button
          id="add"
          className="operator"
          onClick={() => {
            handleClick(ADD);
          }}
        >
          +
        </button>
        <button
          id="one"
          onClick={() => {
            handleClick(ONE);
          }}
        >
          1
        </button>
        <button
          id="two"
          onClick={() => {
            handleClick(TWO);
          }}
        >
          2
        </button>
        <button
          id="three"
          onClick={() => {
            handleClick(THREE);
          }}
        >
          3
        </button>
        <button
          id="zero"
          className="jumbo"
          onClick={() => {
            handleClick(ZERO);
          }}
        >
          0
        </button>
        <button
          id="decimal"
          onClick={() => {
            handleClick(DECIMAL);
          }}
        >
          .
        </button>
        <button
          id="equals"
          onClick={() => {
            handleClick(EQUALS);
          }}
        >
          =
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Calculator />
      </div>
    </div>
  );
}

export default App;
