import { useState } from 'react';
import './App.css';
import InputBox from './components/Country';
import { useDebouncedCallback } from '@react-hookz/web';

function App() {
  const [value,setValue] = useState<string>("")

  
  const onChangeDebounced = useDebouncedCallback(
    (e)=>setValue(e.target.value),
    [],
    1000,
    0
  )

  return (
    <div className="App">
      <h2>Country Search </h2>
      <InputBox label='value' value={value} onChange={onChangeDebounced} />
    </div>
  );
}

export default App;