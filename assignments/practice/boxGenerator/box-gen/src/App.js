import ColorForm from './ColorForm'
import Box from './Box'
import {useState} from 'react'
import './App.css';

function App() {
  const [state, setState] = useState([]);
  console.log(state)
  return (
    <div className="App">
      <ColorForm setState={setState} state={state}/>
      {state.map(box => {

        return (<Box color={box.color}/>)
      })}
    </div>
  );
}

export default App;
