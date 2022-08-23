import axios from 'axios';
import { useState } from 'react'
import './App.css'
import {UseFetch} from './hooks/UseFetch';


const URL="https://api.github.com/search/users";

 type User={
    id: number;
    login: string;
    avatar_url: string;
};

function App() {


const [text, setText] =useState("")

const { loading, data, err} =UseFetch<User>(URL, {
  per_page: 5,
  q: text || "Masai-codes",
});


console.log(data);

  return(
    <div className="App">
    <input type="text" value={text}
    onChange={(e)=>setText(e.target.value)} />
<button onClick={()=>{
  axios.get(URL,{
   params:{
   q: text,
   per_page:5,
   } ,
  }
  );
}}>
  Search
</button>
 {
       loading ? (
         <div>Loading....</div>
       ): err ? (
         <div>something went wrong</div>
       ) : ( 
      
       data.map((user)=>{
         return (
         <div key={user.id} >
           {user.login} {" "}
  <div>
    <img src={user.avatar_url} alt="images" height={200} width={200} />
  </div>
  
         </div>
       );
       }
       ) )}
    </div>
  )
}

export default App
