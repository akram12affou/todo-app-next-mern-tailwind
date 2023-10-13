'use client'
import React, { useState } from "react";

function Loginpage() {
  const [register , setRegister] =useState(true)
  const [name , setName] = useState('')
  const [email,setEmail] = useState('')
  const [password , setPassword] = useState('')

  return (
    <div className=" shadow-lg shadow-indigo-500/40 flex box  flex-col max-w-md mx-auto mt-20 p-4">
      <label htmlFor="">NAME</label>
      <input
        type="text"
        placeholder="your name ..."
        className="border max-w-md	 mb-4 border-sky-500 outline-none p-3 placeholder:italic"
      />

      <label htmlFor="">EMAIL</label> 
      <input
        type="text"
        placeholder="exemple@gmail.com"
        className="border max-w-md mb-4 border-sky-500 outline-none  p-3 placeholder:italic"
      />

      <label htmlFor="">PASSWORD</label>
      <input
        type="password"
        placeholder="your password ..."
        className="border max-w-md mb-5 border-sky-500 outline-none p-3 placeholder:italic"
      />

      <button  className="border border-emerald-500 max-w-md rounded mb-3 bg-sky-500 text-white tracking-wider font-bold outline-none p-1 placeholder:italic" >Sign Up</button>
      <span>
        Already have an account ?<span className="text-cyan-400 font-semibold tracking-wider cursor-pointer"> Click here to Sign Up</span>
      </span>
    </div>
  );
}

export default Loginpage;
