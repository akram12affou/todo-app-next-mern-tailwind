"use client"
import React,{useState} from "react";

 function page() {
    const [todoName , setTodoName] = useState('')
  return (
    <div className="flex m-3 items-center flex-row gap-2 w-full flex-wrap justify-center ">
       <label>Todo Name :</label>
       <input className="border-2 border-sky-500 outline-none p-2" value={todoName} onChange={e => setTodoName(e.target.value)}/>
       <button className="cursor-pointer  border-2 font-semibold rounded-md border-sky-300 outline-none p-1 hover:scale-105 transition duration-75 ease-in shadow-md bg-sky-300">Add Todo</button>
    </div>
  );
}

export default page;

