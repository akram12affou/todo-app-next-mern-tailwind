"use client"
import { TodosContext } from "./Context/todosContext";
import React, {useState,useContext,useEffect} from "react";
import axios from 'axios';
 function page() {
    const { todos, dispatch } = useContext(TodosContext)
    const [todoName , setTodoName] = useState('')
    useEffect(() => {
        axios.get('http://localhost:3003/todos').then(res => {
        dispatch({payload:res.data , type:"FETCHTODOS"})
        })
    },[])
    const addTodo =   () => {
         axios.post('http://localhost:3003/todos',
         {
          todoname:todoName 
         }).then(res => {
          console.log(res.data)
          dispatch({type:'ADDTODO' , payload:res.data})
        }
         ).catch(err => { 
          console.log(err)
         })
    };
  return (
    <div className="flex m-3 items-center flex-row gap-2 w-full flex-wrap justify-center ">
      
       <label>Todo Name :</label>
       <input className="border-2 border-sky-500 outline-none p-2" value={todoName} onChange={e => setTodoName(e.target.value)}/>
       <button className="cursor-pointer  border-2 font-semibold rounded-md border-sky-300 outline-none p-1 hover:scale-105 transition duration-75 ease-in shadow-md bg-sky-300" onClick={addTodo}>Add Todo</button>
       {/* [{"todoname":"f","date":"2023-10-15T22:34:27.376Z","done":false,"_id":"652c69e1e19eaff0088e4f08"}] */}
      {todos.map(todo => {
        return(
          <div key={todo._id}>
             <h2>{todo.todoname}</h2>
          </div>
        )
      })}
    </div>
  );
}

export default page;

