import { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState(0)

  function increment() {
    setState(state + 1)
  }

  function decrement() {
    setState(state - 1)
  }

  return (
    <div className="App">
      Hello, Redux
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <span>{state}</span>
      </div>
    </div>
  );
}

export default App;
