import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useTimeout } from './hooks/useTimeout'

function App() {
  const toShow= useTimeout(2)
console.log(toShow)

  if(!toShow){
return <h1 style={{textAlign:"center"}}>Loading for your data......</h1>
  }
  return (
    <div className="App">
     <h1 style={{color:"red"}}>Hello Typescript</h1>
     <img style={{height:"400px", marginTop:"0px"}}
     src="https://newsd.in/wp-content/uploads/2021/03/Masai-School-1.jpg" alt="img" />
    </div>
  )
}

export default App
