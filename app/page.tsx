"use client"
import { AuthContext } from "./Context/authContext";
import { TodosContext } from "./Context/todosContext";
import React, {useState,useContext,useEffect} from "react";
import {MdDelete} from 'react-icons/md';
import axios from 'axios';
import { useCookies } from "react-cookie";
 function page() { 
    const { todos, dispatcht } = useContext<any>(TodosContext)
    const {user} = useContext(AuthContext)
    const [todoName , setTodoName] = useState('')
    const [cookie,_] = useCookies(['acces-token'])
    useEffect(() => {
       if(!user) return;
        axios.get('http://localhost:3003/todos/'+user?._id).then(res => {
          dispatcht({payload:res.data, type:"FETCHTODOS"});
        }).catch(err => {
          console.log(err);
        })
    },[])
    const done = (e: string) => { 
      dispatcht({payload:e, type:"TODODONE"})
      console.log(cookie['acces-token'])
      axios.put('http://localhost:3003/todos/'+e,{},  {
        headers : {
          token : cookie['acces-token']
        }}).then(res => {
        console.log(res.data);
      }).catch((err) => {
        console.log(err)
      })
    }
    const deleteTodo = (id) => {
      dispatcht({payload:id , type:"DELETETODO"})
      axios.delete('http://localhost:3003/todos/' + id,   {
        headers : {
          token : cookie['acces-token']
        }}).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
    const addTodo = () => {
         axios.post('http://localhost:3003/todos',
         {
          todoname:todoName,
          userId:user._id 
         },
         {
          headers : {
            token : cookie['acces-token']
          }}).then(res => {
          dispatcht({type:'ADDTODO',payload:res.data});
        }
         ).catch(err => { 
          alert(err);
         })
    };
  return (
    <> <div className="flex m-3 items-center flex-row gap-2 w-full flex-wrap justify-center ">
       <label>Todo Name :</label>
       <input  className="border-2 border-sky-500 outline-none p-2" value={todoName} onChange={e => setTodoName(e.target.value)}/>
       {cookie['acces-token'] &&  <button className="cursor-pointer  border-2 font-semibold rounded-md border-sky-300 outline-none p-1 hover:scale-105 transition duration-75 ease-in shadow-md bg-sky-300" onClick={addTodo}>Add Todo</button>}
       </div>
      <div className="flex flex-wrap justify-center items-center gap-2 mt-2">{todos?.map(todo => {
        return(
          
          <div key={todo?._id} className="border border-gray-950 p-4 rounded-sm sm:w-1/3 w-1/2">
            <div className="flex flex-row items-center justify-evenly">
               <div>
              <div className="flex items-center gap-1">
              <input onChange={() => done(todo?._id)} type="checkbox" className="border border-blue-400 " name="" id="" checked={todo?.done} />
              <h2 className="font-semibold">{todo?.todoname}</h2>
            </div>
              <span>{todo?.date}</span>
            </div>
              <div onClick={() => deleteTodo(todo?._id)}>
                <MdDelete className='text-red-800 cursor-pointer text-xl'/>
              </div>
             
            </div>
           
          </div>
        )
      })}
    </div></>
   
  );
}

export default page;

