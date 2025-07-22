import { helloWorld } from './reactjs/App.util';
import './App.css';

function App() {
  const result = helloWorld()
  console.info(result); // This will log "Hello World from App.util.js"

  return (
    <div className="App">
      <header className="App-header">
        Parent A project
      </header>
    </div>
  );
}

export default App;
