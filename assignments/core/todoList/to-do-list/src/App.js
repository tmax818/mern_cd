import React, { useReducer } from 'react';

import Form from './components/Form'

import './App.css';

const initialState = [];

function reducer(state, action) {
  console.log(state, action)
return [
    ...state,
    {[action.type]: action.payload, completed: false, visible: true}
];
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(e.target.value)
    dispatch({
        type: name,
        payload: value
    });
}

  return (
    <div className="App">
      <Form handleChange={handleChange} state={state} />
      {state.filter(item => item.visible).map(item => {
        return(
          <p>{item.name}</p>
        )
      })}
    </div>
  );
}

export default App;
