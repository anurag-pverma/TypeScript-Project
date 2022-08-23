import { useState } from 'react'
import { Accordian2 } from './Accordian-2/Accordian2';
import './App.css'
import { Accordian } from './components/Accordian';

function App() {
  const data = [
    {
      desc:
        "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
      title: "Tab 1",
    },
    {
      desc:
        "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
      title: "Tab 2",
    }
  ];
  return (
    <div className="App">
    <Accordian data={data}/>
    </div>
  )
}

export default App
