'use client'

import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { AuthContext } from "../Context/authContext";
import React, { useState , useContext } from "react";
import axios from "axios";
function Loginpage() {
  const router = useRouter
  const {loading ,error , user, dispatch } = useContext<any>(AuthContext)
  const [register , setRegister] =useState(true)
  const [cookie, setCookie, _] = useCookies(["acces-token"]);
  const [name , setName] = useState('')
  const [email,setEmail] = useState('')
  const [password , setPassword] = useState('')
  const auth = () => {
    console.log(loading ,error , user)
    
    if(register){
      dispatch({type:"LOGIN_START"})
      axios.post('http://localhost:3003/user/register' , 
      {
        username:name,
        email, 
        password
      }).then(res => {
        console.log(res)
        dispatch({type:"LOGIN_SUCCES" , payload:res.data.newUser})
        setCookie("acces-token", res.data.token);
        router.push('/')
      }).catch(err => {
        dispatch({type:"LOGIN_FAILED" , payload:err.responce?.data || 'Somthing Went Wrong'})
        console.log(err)
      })
    }else{

      console.log('login')
    } 
  }
  return (
    <div className=" shadow-lg shadow-indigo-500/40 flex box  flex-col max-w-md mx-auto mt-20 p-4">
      {loading &&
      <center>loading...</center>
      }
     {register && 
     <>
     <label htmlFor="">NAME</label>
     <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="your name ..."
        className="border max-w-md	 mb-4 border-sky-500 outline-none p-3 placeholder:italic"
      />
      </>
      }

      <label htmlFor="">EMAIL</label> 
      <input
           value={email}
           onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="exemple@gmail.com"
        className="border max-w-md mb-4 border-sky-500 outline-none  p-3 placeholder:italic"
      />

      <label htmlFor="">PASSWORD</label>
      <input
       value={password}
       onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="your password ..."
        className="border max-w-md mb-5 border-sky-500 outline-none p-3 placeholder:italic"
      />

      <button  className="border border-emerald-500 max-w-md rounded mb-3 bg-sky-500 text-white tracking-wider font-bold outline-none p-1 placeholder:italic" onClick={auth}>{register ? 'Sign In' : 'Login'}</button>
      <span>
       {register ?  'Already have an account ?' : "Don't have an account?"}<span className="text-cyan-400 font-semibold tracking-wider cursor-pointer" onClick={() => setRegister(prev => !prev)}>{register ? "Click here to Log In" : "Click here to Sign In"}</span>
      </span>
      <span className="text-red-600 mt-2 font-semibold mx-auto tracking-wider">{error}</span>
    </div>
  );
}

export default Loginpage;
