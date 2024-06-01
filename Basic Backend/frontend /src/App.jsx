import { useEffect, useState } from 'react'
import axios from "axios";
import './App.css'

function App() {
  const [jokes, setJokes]= useState([]);

  useEffect(()=>{
   axios.get('/api/jokes').
    then((response)=>{
      setJokes(response.data);
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])
  
  return (
    <main>
      <h1>Hello </h1>
      <p>Jokes : {jokes.length}</p>
      {jokes.map((joke)=>(
       <div key={joke.id}>
          <p>{joke.joke}</p>
       </div> 
      )
      )}
    </main>
  )
}

export default App
