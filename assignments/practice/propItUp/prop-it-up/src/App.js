import './App.css';
import {users} from './data/users'

//Components

import PersonCard from './PersonCard'

function App() {
  return (
    <div>
      <header className="App-header">
         { users.map((user) =>{
          return(<PersonCard {...user} />)
          })}
      </header>
    </div>
  );
}

export default App;
