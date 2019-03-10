import React, { useReducer } from 'react';
import './Calculator.css';

const calcReducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'clear':
      return { ...state, display: '0', cleared: true };

    case 'add':
      return state;

    case 'subtract':
      return state;

    case 'multiply':
      return state;

    case 'divide':
      return state;

    case 'decimal':
      return state;

    case 'negate':
      return state;

    case 'percent':
      return state;

    case 'equal':
      return state;

    case 'num':
      if (action.payload === '0') {
        return {
          ...state,
          display: state.display === '0' ? '0' : state.display + String(action.payload),
          cleared: state.display === '0',
        };
      } else {
        return {
          ...state,
          display: state.display === '0' ? String(action.payload) : state.display + String(action.payload),
          cleared: false,
        };
      }

    default:
      throw new Error('Undefined calculator reducer action type specified.');
  }
};

const Calculator = () => {
  const initialState = { display: '0', cleared: true };
  const [state, dispatch] = useReducer(calcReducer, initialState);

  return (
    <div className="Calculator no-select">
      <div className="display">{state.display}</div>
      <div className="row">
        <div
          className="btn-misc"
          onClick={() => {
            dispatch({ type: 'clear' });
          }}
        >
          {state.cleared ? 'AC' : 'C'}
        </div>
        <div
          className="btn-misc"
          onClick={() => {
            dispatch({ type: 'negate' });
          }}
        >
          &#xb1; {/* Plus or Minus */}
        </div>
        <div
          className="btn-misc"
          onClick={() => {
            dispatch({ type: 'percent' });
          }}
        >
          &#x25; {/* Percent */}
        </div>
        <div
          className="btn-ops"
          onClick={() => {
            dispatch({ type: 'divide' });
          }}
        >
          &#xf7; {/* Divide */}
        </div>
      </div>
      <div className="row">
        <div
          className="btn-nums"
          onClick={() => {
            dispatch({ type: 'num', payload: '7' });
          }}
        >
          7
        </div>
        <div
          className="btn-nums"
          onClick={() => {
            dispatch({ type: 'num', payload: '8' });
          }}
        >
          8
        </div>
        <div
          className="btn-nums"
          onClick={() => {
            dispatch({ type: 'num', payload: '9' });
          }}
        >
          9
        </div>
        <div
          className="btn-ops"
          onClick={() => {
            dispatch({ type: 'multiply' });
          }}
        >
          &#xd7; {/* Multiply */}
        </div>
      </div>
      <div className="row">
        <div
          className="btn-nums"
          onClick={() => {
            dispatch({ type: 'num', payload: '4' });
          }}
        >
          4
        </div>
        <div
          className="btn-nums"
          onClick={() => {
            dispatch({ type: 'num', payload: '5' });
          }}
        >
          5
        </div>
        <div
          className="btn-nums"
          onClick={() => {
            dispatch({ type: 'num', payload: '6' });
          }}
        >
          6
        </div>
        <div
          className="btn-ops"
          onClick={() => {
            dispatch({ type: 'subtract' });
          }}
        >
          &#x2212; {/* Minus */}
        </div>
      </div>
      <div className="row">
        <div
          className="btn-nums"
          onClick={() => {
            dispatch({ type: 'num', payload: '1' });
          }}
        >
          1
        </div>
        <div
          className="btn-nums"
          onClick={() => {
            dispatch({ type: 'num', payload: '2' });
          }}
        >
          2
        </div>
        <div
          className="btn-nums"
          onClick={() => {
            dispatch({ type: 'num', payload: '3' });
          }}
        >
          3
        </div>
        <div
          className="btn-ops"
          onClick={() => {
            dispatch({ type: 'add' });
          }}
        >
          &#x2b; {/* Plus */}
        </div>
      </div>
      <div className="row">
        <div
          className="zero btn-nums"
          onClick={() => {
            dispatch({ type: 'num', payload: '0' });
          }}
        >
          0
        </div>
        <div
          className="btn-nums"
          onClick={() => {
            dispatch({ type: 'decimal' });
          }}
        >
          .
        </div>
        <div
          className="btn-ops"
          onClick={() => {
            dispatch({ type: 'equal' });
          }}
        >
          &#x3d; {/* Equals */}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
