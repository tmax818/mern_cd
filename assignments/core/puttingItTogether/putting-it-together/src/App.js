
import './App.css';
import {users} from './data/users'

import PersonCard from './PersonCard';

function App() {
  return (
    <div className="App">
    { users.map((user) =>{
          return(<PersonCard {...user} />)
          })}
    </div>
  );
}

export default App;
