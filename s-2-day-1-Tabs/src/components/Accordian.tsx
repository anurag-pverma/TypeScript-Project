import React, { useState } from 'react'
import './accordian.css'

type Element = {title: string; desc: string}

type AccordianType={
data:Element[];
}



export const Accordian = ({data}: AccordianType) => {

const [opened, setOpened] = useState<number>(0)
    
const handleOpen=(index: number)=>{
    setOpened( index)
    }

  return (
    <div className='flex'>
        {
            data.map((el, index)=>(
                <Card key={index} 
                isVisible={index===opened} 
                 title={el.title} 
                 desc={el.desc} 
                 index={index}
                 handleOpen={handleOpen}
                 
                 />
                
                
            ))
        }
        
      
    </div>
  )
};


type CardProps={
title: string,
desc: string;
index: number;
isVisible: boolean;
handleOpen:(i:number)=>void;
};


 const Card = ({ title, desc,isVisible, handleOpen, index}: CardProps)=>{

    return (
        <div className='accordianContiner'>

            <button onClick={()=>handleOpen(index)}>{title}</button>
        { isVisible && <p>{desc}</p>}
        </div>
    )
}