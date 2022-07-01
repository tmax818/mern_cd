import Tab from './Tab'
import './App.css';



function App() {
  const tabs = [
    {id: 1, header: "tab1", content: "This is the content for tab 1"},
    {id: 2, header: "tab2", content: "This is the content for tab 2"},
  ]
  return (
    <div className="App">
      <Tab tabs={tabs} />
    </div>
  );
}

export default App;
