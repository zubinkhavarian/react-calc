// @ts-nocheck
import React, { useReducer } from "react";
import ObjectDebugger from "./ObjectDebugger";

import "./Calculator.css";

const MAX_DIGITS = 9;

const format = (x) => {
  let parts = x.split(".");
  parts[0] = parts[0].replace(",", "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};

/*
const operations = {
  '/': (prev, next) => prev / next,
  '*': (prev, next) => prev * next,
  '+': (prev, next) => prev + next,
  '-': (prev, next) => prev - next,
  '=': (prev, next) => next,
};
*/

const calcReducer = (state, action) => {
  // console.log(action);

  switch (action.type) {
    case "clear":
      return { ...state, display: "0", cleared: true, registry: 0, opActive: false, operand: null };

    case "add":
      // return {...state, registry: Number(state.display), opActive: true, operand: 'add'};
      return state;

    case "subtract":
      return state;

    case "multiply":
      return state;

    case "divide":
      return state;

    case "decimal": {
      const result = state.display.includes(".") ? state.display : state.display + ".";
      return {
        ...state,
        display: result,
        registry: Number(result),
      };
    }

    case "negate":
      return state;

    case "percent":
      return state;

    case "equal":
      return state;

    case "num":
      if (state.display.replace(".", "").replace(",", "").length >= MAX_DIGITS) {
        return state;
      }

      if (action.payload === "0") {
        const result = state.display === "0" ? "0" : state.display + String(action.payload);
        return {
          ...state,
          display: result,
          registry: Number(result),
          cleared: state.display === "0",
        };
      } else {
        const result = state.display === "0" ? String(action.payload) : state.display + String(action.payload);
        return {
          ...state,
          display: result,
          registry: Number(result),
          cleared: false,
        };
      }

    case "delete": {
      const result =
        state.display === "0" || state.display.length === 1 ? "0" : state.display.slice(0, state.display.length - 1);

      return {
        ...state,
        display: result,
        registry: Number(result),
      };
    }

    default:
      throw new Error("Undefined calculator reducer action type specified.");
  }
};

const Calculator = () => {
  const initialState = { display: "0", cleared: true, registry: 0, opActive: false, operand: null };
  const [state, dispatch] = useReducer(calcReducer, initialState);
  const displayScale = Math.min((1 / state.display.length) * 7, 1);

  const keys = {
    48: () => dispatch({ type: "num", payload: 0 }), // '0'
    49: () => dispatch({ type: "num", payload: 1 }), // '1'
    50: () => dispatch({ type: "num", payload: 2 }), // '2'
    51: () => dispatch({ type: "num", payload: 3 }), // '3'
    52: () => dispatch({ type: "num", payload: 4 }), // '4'
    53: () => dispatch({ type: "num", payload: 5 }), // '5'
    54: () => dispatch({ type: "num", payload: 6 }), // '6'
    55: () => dispatch({ type: "num", payload: 7 }), // '7'
    56: () => dispatch({ type: "num", payload: 8 }), // '8'
    57: () => dispatch({ type: "num", payload: 9 }), // '9'

    190: () => dispatch({ type: "decimal" }),
    187: () => {},
    8: () => dispatch({ type: "delete" }),
  };

  return (
    <>
      <ObjectDebugger object={state} />
      <div className="Calculator no-select" onKeyDown={(e) => keys[e.keyCode] && keys[e.keyCode]()} tabIndex={0}>
        <div className="display" style={{ fontSize: `calc(${displayScale} * 4em)` }}>
          <span>{format(state.display)}</span>
        </div>
        <div className="row">
          <div className="btn-misc" onClick={() => dispatch({ type: "clear" })}>
            {state.cleared ? "AC" : "C"}
          </div>
          <div className="btn-misc" onClick={() => dispatch({ type: "negate" })}>
            &#xb1; {/* Plus or Minus */}
          </div>
          <div className="btn-misc" onClick={() => dispatch({ type: "percent" })}>
            &#x25; {/* Percent */}
          </div>
          <div className="btn-ops" onClick={() => dispatch({ type: "divide" })}>
            &#xf7; {/* Divide */}
          </div>
        </div>
        <div className="row">
          <div className="btn-nums" onClick={() => dispatch({ type: "num", payload: "7" })}>
            7
          </div>
          <div className="btn-nums" onClick={() => dispatch({ type: "num", payload: "8" })}>
            8
          </div>
          <div className="btn-nums" onClick={() => dispatch({ type: "num", payload: "9" })}>
            9
          </div>
          <div className="btn-ops" onClick={() => dispatch({ type: "multiply" })}>
            &#xd7; {/* Multiply */}
          </div>
        </div>
        <div className="row">
          <div className="btn-nums" onClick={() => dispatch({ type: "num", payload: "4" })}>
            4
          </div>
          <div className="btn-nums" onClick={() => dispatch({ type: "num", payload: "5" })}>
            5
          </div>
          <div className="btn-nums" onClick={() => dispatch({ type: "num", payload: "6" })}>
            6
          </div>
          <div className="btn-ops" onClick={() => dispatch({ type: "subtract" })}>
            &#x2212; {/* Minus */}
          </div>
        </div>
        <div className="row">
          <div className="btn-nums" onClick={() => dispatch({ type: "num", payload: "1" })}>
            1
          </div>
          <div className="btn-nums" onClick={() => dispatch({ type: "num", payload: "2" })}>
            2
          </div>
          <div className="btn-nums" onClick={() => dispatch({ type: "num", payload: "3" })}>
            3
          </div>
          <div className="btn-ops" onClick={() => dispatch({ type: "add" })}>
            &#x2b; {/* Plus */}
          </div>
        </div>
        <div className="row">
          <div className="zero btn-nums" onClick={() => dispatch({ type: "num", payload: "0" })}>
            0
          </div>
          <div className="btn-nums" onClick={() => dispatch({ type: "decimal" })}>
            .
          </div>
          <div className="btn-ops" onClick={() => dispatch({ type: "equal" })}>
            &#x3d; {/* Equals */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
