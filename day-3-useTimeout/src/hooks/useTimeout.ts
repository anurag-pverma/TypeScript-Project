import React,{useEffect, useState} from 'react'

export const useTimeout = (delay: number) => {
    const [toShow, setToShow]= useState(false)

    useEffect(()=>{

   let id= setTimeout(()=>{
        setToShow(true)
      },delay * 5000)
  
      return ()=>clearTimeout(id)
    },[])
  
  

  return toShow;
}
