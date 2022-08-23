import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import {v4 as uuid} from "uuid"
//npm install --save-dev @types/uuid



type TodoType= {
   id: string,
   title: string,
   status: boolean,
};

const Todos = () => {
    const [text, setText] = useState("")
    const [todos, setTodos] = useState<TodoType[]>([])

    useEffect(()=>{
        getData();
    },[])

    const getData = ()=>{
        axios.get("http://localhost:8080/todos")
        .then((res:AxiosResponse<TodoType[]>)=> {
            const {data} = res;
            setTodos(data)

        })}
  return (
    <div>
        <input type="text"
        value={text}
        onChange={(e)=>setText(e.target.value)} 
        placeholder='write something' /> {" "}
   
        <button onClick={()=>{
            const payload= { title: text, status: false};
            axios.post("http://localhost:8080/todos", payload).then(getData)
            // setTodos([...todos, payload])
       
        }}>Add Todo</button>

    {
        todos.map((t)=>(
            <div key={t.id}>
            {t.title} - {t.status ? "Done" : "Not Done"}
            </div>
        ))}
    
    </div>
  )
}

export default Todos