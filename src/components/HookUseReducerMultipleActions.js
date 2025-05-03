import React, { useReducer } from 'react';

const initialState = {
  name: '',
  age: 0,
  submitted: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_AGE':
      return { ...state, age: action.payload };
    case 'SUBMIT':
      return { ...state, submitted: true };
    default:
      return state;
  }
};

function HookUseReducerMultipleActions({ onSubmit }) {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const handleSubmit = () => {
    dispatch({ type: 'SUBMIT' });
    if (onSubmit) {
      onSubmit(state);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={state.name}
        placeholder="Name"
        onChange={(e) =>
          dispatch({ type: 'SET_NAME', payload: e.target.value })
        }
      />
      <input
        type="number"
        value={state.age}
        placeholder="Age"
        onChange={(e) => dispatch({ type: 'SET_AGE', payload: e.target.value })}
      />
      <button onClick={handleSubmit}>Submit</button>
      {state.submitted && <p>Form Submitted!</p>}
    </div>
  );
}

export default HookUseReducerMultipleActions;
