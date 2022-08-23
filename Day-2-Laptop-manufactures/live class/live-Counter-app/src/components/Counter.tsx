import React, { useState } from 'react'

type CounterProps={
    init?: number;
  children?:JSX.Element | JSX.Element[];

}

const Counter = (props: CounterProps) => {
    const {init = 5, children}= props; //default destructuring
    const [counter,setCounter] = useState(init)

 
  return (
    <div>
        <h3>Counter: {counter}</h3>
        {children}
        <button onClick={()=>setCounter(counter+1)}>+ </button>
        <button onClick={()=>setCounter(counter-1)}>-</button>
    
    
    </div>
  )
}

export default Counter