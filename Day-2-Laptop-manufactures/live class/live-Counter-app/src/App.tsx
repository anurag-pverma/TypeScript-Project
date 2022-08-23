import React from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
    <Counter init={0}/>
    <Counter init={10}/>
    <button>children Add 1</button>
    <button >children Add 1</button>
    <Counter />
    </div>
  );
}

export default App;
