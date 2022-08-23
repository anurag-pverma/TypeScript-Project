import React, { useEffect, useState } from 'react'

const Random = () => {
    const [value, setValue]= useState(0)
    
    useEffect(()=>{
        var val = Math.floor(1000 + Math.random() * 9000);
        setValue(val)
    },[])
    // console.log(value);
    
  return (
    <div>
        <h3>Your OTP is: <span style={{color:"red"}}> {value}</span></h3>

    </div>
  )
}

export default Random