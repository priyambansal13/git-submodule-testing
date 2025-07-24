import { helloWorld2 } from './reactjs/App.util';
import './App.css';
import Customers from './reactjs/Customers';

function App() {
  const result = helloWorld2()
  console.info(result); // This will log "Hello World from App.util.js"

  return (
    <div className="App">
      <header className="App-header">
        Parent A project
      </header>
      <Customers />
    </div>
  );
}

export default App;
