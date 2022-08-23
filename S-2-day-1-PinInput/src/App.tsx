import { useState } from 'react'

import './App.css'
import { OtpInput } from './components/OtpInput'
import Random from './components/Random'

function App() {
const handleChange=(otp: string)=>{
// console.log("Recive", otp)
}
  return (
    <div className="App">
      <h1>OTP input box</h1>
      <Random/>
    <OtpInput totalInputs={4} onChange={handleChange}/>
    </div>
  )
}

export default App
