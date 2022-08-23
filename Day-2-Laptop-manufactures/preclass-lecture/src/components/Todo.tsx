import React, { useState } from 'react'

type Todo={
    id:number;
    title:string;
    status:boolean;
}

const Todo = () => {
    const [text, setText] = useState<string>("")
    const [todos, setTodos]= useState<Todo[]>([])
  return (
    <div>
        <input type="text" placeholder='write somrthing'
        value={text} onChange={(e)=>setText(e.target.value)} />
        <button onClick={()=> setTodos([...todos, {id: Math.random(),
        status:false, title:text}])}>Add Todo</button>

        <div>
            {todos.map((t)=> <div key={t.id}>
                {t.title} - {t.status ?"Done": "Not Done"}
            </div>
            )}
        </div>
    </div>
  )
}

export default Todo